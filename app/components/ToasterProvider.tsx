'use client';

import { Toaster } from 'react-hot-toast';

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: { background: '#111827', color: '#fff' },
        success: { style: { background: '#065f46' } },
        error: { style: { background: '#7f1d1d' } },
      }}
    />
  );
}
