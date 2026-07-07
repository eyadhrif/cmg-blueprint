import type { ReactNode } from 'react';
import styles from './BlueprintFrame.module.css';

const CORNER_MAP: Record<string, string> = {
  tl: styles.crTl,
  tr: styles.crTr,
  bl: styles.crBl,
  br: styles.crBr,
};

interface CrosshairProps {
  corner: 'tl' | 'tr' | 'bl' | 'br';
}

function Crosshair({ corner }: CrosshairProps) {
  return <div className={`${styles.crosshair} ${CORNER_MAP[corner]}`} />;
}

interface BlueprintFrameProps {
  children?: ReactNode;
  crosshairs?: Array<'tl' | 'tr' | 'bl' | 'br'>;
}

export default function BlueprintFrame({
  children,
  crosshairs,
}: BlueprintFrameProps) {
  return (
    <div className="frame">
      {crosshairs?.map((corner) => (
        <Crosshair key={corner} corner={corner} />
      ))}
      {children}
    </div>
  );
}

export { Crosshair };
