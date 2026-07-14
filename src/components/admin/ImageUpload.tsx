'use client';

import { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(value);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('L\'image ne doit pas dépasser 2 Mo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setPreview(dataUrl);
      onChange(dataUrl);
    };
    reader.readAsDataURL(file);
  }

  function handleRemove() {
    setPreview('');
    onChange('');
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />

      {preview ? (
        <div className="relative inline-block">
          <img
            src={preview}
            alt="Aperçu"
            className="max-h-48 rounded object-cover"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-dark/80 p-1 rounded hover:bg-dark transition-colors"
          >
            <X size={16} className="text-text-primary" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-3 border border-dashed border-card-border px-6 py-8 text-text-muted hover:border-accent hover:text-accent transition-colors w-full"
        >
          <Upload size={20} />
          <span className="text-sm">Cliquer pour uploader une image (optionnel, max 2 Mo)</span>
        </button>
      )}

      <input type="hidden" name="coverImage" value={preview} />
    </div>
  );
}
