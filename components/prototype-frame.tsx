'use client';

import { useState } from 'react';

export function PrototypeFrame() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="app-shell">
      <div className="prototype-status" aria-live="polite">
        <span className="status-dot" />
        <span>{loaded ? 'Prototype siap · hanya data simulasi' : 'Memuat prototype…'}</span>
      </div>
      <iframe
        className="prototype-frame"
        title="Toyota Manufacturing Copilot prototype"
        src="/prototype/index.html"
        onLoad={() => setLoaded(true)}
      />
    </main>
  );
}
