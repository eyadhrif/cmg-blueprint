'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import fr from '../../messages/fr.json';
import en from '../../messages/en.json';

export type Language = 'fr' | 'en';

const translations: Record<Language, typeof fr> = {
  fr,
  en: en as typeof fr,
};

export type RichTagMap = Record<string, (chunks: ReactNode, key?: string) => ReactNode>;

export function stripTags(raw: string): string {
  if (!raw || typeof raw !== 'string') return raw;
  return raw.replace(/<\/?[a-zA-Z0-9_-]+\s*\/?>/g, '');
}

export function parseRichText(raw: string, customComponents?: RichTagMap): ReactNode {
  if (!raw || typeof raw !== 'string') return raw;

  const defaultComponents: RichTagMap = {
    accent: (chunks, key) => (
      <span key={key} className="text-accent">
        {chunks}
      </span>
    ),
    strong: (chunks, key) => (
      <strong key={key} className="font-semibold text-text-dark">
        {chunks}
      </strong>
    ),
    b: (chunks, key) => (
      <b key={key} className="font-semibold">
        {chunks}
      </b>
    ),
    em: (chunks, key) => (
      <em key={key} className="italic">
        {chunks}
      </em>
    ),
    i: (chunks, key) => (
      <i key={key} className="italic">
        {chunks}
      </i>
    ),
    br: (_chunks, key) => <br key={key} />,
    ...customComponents,
  };

  const tagRegex = /<\/?([a-zA-Z0-9_-]+)\s*\/?>/g;
  if (!tagRegex.test(raw)) {
    return raw;
  }
  tagRegex.lastIndex = 0;

  interface Token {
    type: 'text' | 'open' | 'close' | 'self-closing';
    tag?: string;
    content?: string;
  }

  const tokens: Token[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', content: raw.slice(lastIndex, match.index) });
    }
    const fullMatch = match[0];
    const tagName = match[1].toLowerCase();
    const isClosing = fullMatch.startsWith('</');
    const isSelfClosing = fullMatch.endsWith('/>') || tagName === 'br';

    if (isSelfClosing) {
      tokens.push({ type: 'self-closing', tag: tagName });
    } else if (isClosing) {
      tokens.push({ type: 'close', tag: tagName });
    } else {
      tokens.push({ type: 'open', tag: tagName });
    }
    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < raw.length) {
    tokens.push({ type: 'text', content: raw.slice(lastIndex) });
  }

  interface TreeNode {
    tag?: string;
    selfClosing?: boolean;
    children: (TreeNode | string)[];
  }

  const root: (TreeNode | string)[] = [];
  const stack: { tag: string; children: (TreeNode | string)[] }[] = [{ tag: 'root', children: root }];

  for (const token of tokens) {
    const current = stack[stack.length - 1];

    if (token.type === 'text' && token.content !== undefined) {
      current.children.push(token.content);
    } else if (token.type === 'self-closing' && token.tag) {
      current.children.push({ tag: token.tag, selfClosing: true, children: [] });
    } else if (token.type === 'open' && token.tag) {
      const node: TreeNode = { tag: token.tag, children: [] };
      current.children.push(node);
      stack.push(node as { tag: string; children: (TreeNode | string)[] });
    } else if (token.type === 'close' && token.tag) {
      let foundIdx = -1;
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tag === token.tag) {
          foundIdx = i;
          break;
        }
      }
      if (foundIdx > 0) {
        stack.splice(foundIdx);
      }
    }
  }

  function renderNode(node: TreeNode | string, key: string): ReactNode {
    if (typeof node === 'string') return node;
    if (!node || !node.tag) return null;

    if (node.selfClosing) {
      const render = defaultComponents[node.tag] || ((_c, k) => null);
      return render(null, key);
    }

    const render = defaultComponents[node.tag] || ((children) => children);
    const renderedChildren = node.children.map((child, idx) => renderNode(child, `${key}-${idx}`));
    return render(renderedChildren.length === 1 ? renderedChildren[0] : renderedChildren, key);
  }

  const result = root.map((node, idx) => renderNode(node, `rich-${idx}`));
  return <React.Fragment>{result}</React.Fragment>;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string, fallback?: string) => string;
  tRich: (path: string, fallback?: string, customComponents?: RichTagMap) => ReactNode;
  tArray: (path: string) => string[];
  dict: typeof fr;
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (path: string, fallback?: string) => (fallback !== undefined ? stripTags(fallback) : path),
  tRich: (path: string, fallback?: string, customComponents?: RichTagMap) =>
    parseRichText(fallback !== undefined ? fallback : path, customComponents),
  tArray: () => [],
  dict: fr,
  isEn: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const match = document.cookie.match(/cmg_lang=(fr|en)/);
      const cookieLang = match ? (match[1] as Language) : null;
      const storedLang = localStorage.getItem('cmg_lang') as Language | null;
      const activeLang = storedLang === 'fr' || storedLang === 'en' ? storedLang : cookieLang;

      if (activeLang && (activeLang === 'fr' || activeLang === 'en')) {
        setLanguageState(activeLang);
        document.documentElement.lang = activeLang;
      }
    } catch {
      // ignore in environments without localStorage
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cmg_lang', lang);
      document.cookie = `cmg_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (path: string, fallback?: string): string => {
      const keys = path.split('.');
      let current: unknown = translations[language];

      for (const key of keys) {
        if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
          current = (current as Record<string, unknown>)[key];
        } else {
          return fallback !== undefined ? stripTags(fallback) : path;
        }
      }

      if (typeof current === 'string') {
        return stripTags(current);
      }
      return fallback !== undefined ? stripTags(fallback) : path;
    },
    [language]
  );

  const tRich = useCallback(
    (path: string, fallback?: string, customComponents?: RichTagMap): ReactNode => {
      const keys = path.split('.');
      let current: unknown = translations[language];

      for (const key of keys) {
        if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
          current = (current as Record<string, unknown>)[key];
        } else {
          return parseRichText(fallback !== undefined ? fallback : path, customComponents);
        }
      }

      if (typeof current === 'string') {
        return parseRichText(current, customComponents);
      }
      return parseRichText(fallback !== undefined ? fallback : path, customComponents);
    },
    [language]
  );

  const tArray = useCallback(
    (path: string): string[] => {
      const keys = path.split('.');
      let current: unknown = translations[language];

      for (const key of keys) {
        if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
          current = (current as Record<string, unknown>)[key];
        } else {
          return [];
        }
      }

      if (Array.isArray(current)) {
        return current.filter((item): item is string => typeof item === 'string');
      }
      return [];
    },
    [language]
  );

  const contextValue = useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      t,
      tRich,
      tArray,
      dict: translations[language],
      isEn: language === 'en',
    }),
    [language, setLanguage, t, tRich, tArray]
  );
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}
