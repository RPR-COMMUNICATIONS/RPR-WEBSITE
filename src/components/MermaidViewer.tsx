import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

/**
 * TS-Λ3 // MERMAID VIEWER [v1.8.7]
 * Resolution: Enforced Dark Mode authority and curve basis initialization.
 */
interface MermaidViewerProps {
  definition: string;
  className?: string;
  id?: string;
}

export const MermaidViewer: React.FC<MermaidViewerProps> = ({
  definition,
  className = '',
  id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const render = async () => {
      if (!containerRef.current || !definition.trim()) return;
      try {
        setIsLoading(true);
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            background: '#0a0a0a',
            primaryColor: '#3b82f6',
            textColor: '#f1f5f9',
            fontFamily: 'Inter, sans-serif'
          },
          flowchart: {
            curve: 'basis',
            padding: 20,
            useMaxWidth: true
          }
        });
        const { svg } = await mermaid.render(id, definition);
        if (containerRef.current) containerRef.current.innerHTML = svg;
      } catch (err) {
        console.error('Mermaid Render Error:', err);
      } finally {
        setIsLoading(false);
      }
    };
    render();
  }, [definition, id]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {isLoading && (
        <div className="h-80 flex flex-col items-center justify-center bg-black/20 rounded-3xl">
          <div className="w-8 h-8 border-t-2 border-sky-500 rounded-full animate-spin mb-4"></div>
          <p className="text-sky-500/60 font-mono text-[10px] uppercase tracking-widest animate-pulse">
            Seating Authority...
          </p>
        </div>
      )}
      <div
        ref={containerRef}
        className={isLoading ? 'hidden' : 'block transition-all duration-1000'}
      />
    </div>
  );
};
