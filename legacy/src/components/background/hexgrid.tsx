import React, { useEffect, useRef } from 'react';

/**
 * TS-Λ3 // HEXAGONAL NODE SUBSTRATE [v1.0.0]
 * RECTIFICATION: GPU-Accelerated Node Mesh
 * IMPACT: Replaces legacy starfield with hexagonal intelligence grid.
 */
const HexGrid: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        window.addEventListener('resize', resize);
        resize();

        // Hexagon settings
        const hexSize = 30;
        const hexWidth = hexSize * Math.sqrt(3);
        const hexHeight = hexSize * 2;
        const horizontalSpacing = hexWidth;
        const verticalSpacing = hexHeight * 0.75;

        const drawHexagon = (x: number, y: number, opacity: number) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i - Math.PI / 6;
                const px = x + hexSize * Math.cos(angle);
                const py = y + hexSize * Math.sin(angle);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = `rgba(139, 92, 255, ${opacity * 0.15})`; // Mothership Purple
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        const animate = (time: number) => {
            ctx.clearRect(0, 0, width, height);

            const rows = Math.ceil(height / verticalSpacing) + 1;
            const cols = Math.ceil(width / horizontalSpacing) + 1;

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * horizontalSpacing + (row % 2 === 0 ? 0 : horizontalSpacing / 2);
                    const y = row * verticalSpacing;

                    // Distance-based pulse effect
                    const dist = Math.sqrt(Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2));
                    const wave = Math.sin(dist * 0.01 - time * 0.002);
                    const opacity = (wave + 1) / 2;

                    if (opacity > 0.1) {
                        drawHexagon(x, y, opacity);
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate(0);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="hex-grid-canvas"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                transform: 'translateZ(0)', // Force GPU acceleration
            }}
        />
    );
};

export default HexGrid;
