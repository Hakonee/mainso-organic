import React from 'react';

declare global {
  interface Window {
    VLibras: {
      Widget: new (url: string) => void;
    };
    addEventListener(type: 'VLibrasReady', listener: (event: Event) => void): void;
    removeEventListener(type: 'VLibrasReady', listener: (event: Event) => void): void;
    dispatchEvent(event: Event): boolean;
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    vw?: string | boolean;
    'vw-access-button'?: string | boolean;
    'vw-plugin-wrapper'?: string | boolean;
  }
}