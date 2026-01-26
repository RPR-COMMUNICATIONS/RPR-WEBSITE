import React, { useEffect, useRef, useState } from 'react';

interface MermaidViewerProps {
  definition: string;
  className?: string;
}

/**
 * TS-Λ3 // MERMAID VIEWER [v6.7.0]
 * Renders Mermaid.js diagrams with dark theme support
 * Enhanced error handling and initialization
 */
export const MermaidViewer: React.FC<MermaidViewerProps> = ({ 
  definition, 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    const renderMermaid = async () => {
      if (!containerRef.current) return;

      try {
        // Dynamically import mermaid
        const mermaid = await import('mermaid');
        
        // Initialize mermaid only once (singleton pattern)
        if (!initializedRef.current) {
          mermaid.default.initialize({
            startOnLoad: false,
            theme: 'dark',
            themeVariables: {
              primaryColor: '#00E0FF',
              primaryTextColor: '#FFFFFF',
              primaryBorderColor: '#1A1A1A',
              lineColor: '#64748B',
              secondaryColor: '#0A0A0A',
              tertiaryColor: '#050505',
              background: '#0A0A0A',
              mainBkg: '#0A0A0A',
              secondBkg: '#050505',
              textColor: '#FFFFFF',
              secondaryTextColor: '#64748B',
              tertiaryTextColor: '#71717a',
              secondaryBorderColor: '#27272a',
              tertiaryBorderColor: '#3f3f46',
              noteBkgColor: '#0A0A0A',
              noteTextColor: '#FFFFFF',
              noteBorderColor: '#1A1A1A',
              actorBorder: '#1A1A1A',
              actorBkg: '#0A0A0A',
              actorTextColor: '#FFFFFF',
              actorLineColor: '#64748B',
              signalColor: '#FFFFFF',
              signalTextColor: '#FFFFFF',
              labelBoxBkgColor: '#0A0A0A',
              labelBoxBorderColor: '#1A1A1A',
              labelTextColor: '#FFFFFF',
              loopTextColor: '#FFFFFF',
              activationBorderColor: '#00E0FF',
              activationBkgColor: '#0A0A0A',
              sequenceNumberColor: '#FFFFFF',
            },
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
              curve: 'basis',
              padding: 20,
            },
            // RECTIFIED: Removed invalid 'graph' property
            // The 'graph TB' syntax in the definition string is handled automatically by Mermaid
          });
          initializedRef.current = true;
        }

        // Generate unique ID for this diagram
        const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        containerRef.current.id = id;
        
        // Mermaid requires the content to be in a pre.mermaid or div.mermaid element
        containerRef.current.className = 'mermaid';
        containerRef.current.textContent = definition;

        // Render the diagram
        await mermaid.default.run({
          nodes: [containerRef.current],
          suppressErrors: false,
        });

        setIsLoading(false);
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError(err instanceof Error ? err.message : 'Failed to render diagram');
        setIsLoading(false);
      }
    };

    renderMermaid();
  }, [definition]);

  if (error) {
    return (
      <div className={`text-center py-8 text-zinc-500 ${className}`}>
        <p className="text-sm font-mono uppercase tracking-wider">Diagram unavailable</p>
        <p className="text-xs mt-2 text-zinc-600">{error}</p>
        <p className="text-xs mt-2 text-zinc-700">Ensure mermaid package is installed: yarn add mermaid</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-pulse text-cyan-400 font-mono text-sm uppercase tracking-wider">
            Loading diagram...
          </div>
        </div>
      )}
      <div 
        ref={containerRef} 
        style={{ minHeight: isLoading ? '200px' : 'auto' }}
      >
        {/* Mermaid will inject the SVG here */}
      </div>
    </div>
  );
};