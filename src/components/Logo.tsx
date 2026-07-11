import React from 'react';

export default function Logo({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M40 10 L75 90 H55 L40 40 L25 90 H5 Z" fill="currentColor" />
      <path d="M70 30 L95 90 H80 L70 55 L60 90 H45 Z" fill="currentColor" />
    </svg>
  );
}
