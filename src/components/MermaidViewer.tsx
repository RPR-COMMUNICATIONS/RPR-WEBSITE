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
  id: propId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Create a stable ID if none provided to prevent re-render loops
  const [id] = useState(() => propId || `mermaid-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    let isMounted = true;
    const timeout = setTimeout(() => {
      if (isMounted && isLoading) {
        setIsLoading(false);
        setError('Diagram render timeout');
      }
    }, 5000); // 5s timeout

    const render = async () => {
      if (!containerRef.current || !definition.trim()) return;
      try {
        setIsLoading(true);
        setError(null);

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
        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        console.error('Mermaid Render Error:', err);
        if (isMounted) setError('Diagram render error - check console');
      } finally {
        if (isMounted) {
          setIsLoading(false);
          clearTimeout(timeout);
        }
      }
    };

    render();
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
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
      {error && !isLoading && (
        <div className="h-80 flex flex-col items-center justify-center bg-red-950/20 border border-red-900/50 rounded-3xl p-6 text-center">
          <span className="material-symbols-outlined text-red-500 text-3xl mb-4">error</span>
          <p className="text-red-400 font-mono text-xs uppercase tracking-widest">{error}</p>
        </div>
      )}
      <div
        ref={containerRef}
        className={(isLoading || error) ? 'hidden' : 'block transition-all duration-1000'}
      />
    </div>
  );
};

