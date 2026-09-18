import React, { useEffect, useRef } from 'react';

/**
 * InteractiveGridBackground
 * Renders a crisp architectural square box grid where cells touched by the cursor
 * animate and fill with high-contrast black & white illumination and a smooth fade trail.
 */
const InteractiveGridBackground = ({
  gridSize = 48,
  containerRef,
  className = ""
}) => {
  const canvasRef = useRef(null);
  const activeCellsRef = useRef(new Map());
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking on container or parent
    const targetElement = containerRef?.current || canvas.parentElement;

    const handleMouseMove = (e) => {
      if (!targetElement) return;
      const rect = targetElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

      const col = Math.floor(x / gridSize);
      const row = Math.floor(y / gridSize);
      const now = performance.now();

      // Main box touched by cursor
      activeCellsRef.current.set(`${col},${row}`, {
        col,
        row,
        startTime: now,
        maxAlpha: 1.0,
      });

      // Subtle ambient bloom on adjacent cardinal boxes
      const neighbors = [
        [col - 1, row],
        [col + 1, row],
        [col, row - 1],
        [col, row + 1],
      ];

      neighbors.forEach(([nCol, nRow]) => {
        if (nCol >= 0 && nRow >= 0) {
          const key = `${nCol},${nRow}`;
          const existing = activeCellsRef.current.get(key);
          if (!existing || existing.maxAlpha < 0.35) {
            activeCellsRef.current.set(key, {
              col: nCol,
              row: nRow,
              startTime: now,
              maxAlpha: 0.35,
            });
          }
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation configuration
    const FADE_DURATION = 800; // ms for elegant fading trail

    // Smooth vertical fade-out computation: grid gently disappears towards the bottom
    const getVerticalFade = (y) => {
      const startFade = height * 0.45;
      const endFade = height * 0.92;
      if (y <= startFade) return 1.0;
      if (y >= endFade) return 0.0;
      const progress = (y - startFade) / (endFade - startFade);
      return Math.max(0, Math.cos(progress * Math.PI * 0.1));
    };

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');

      // 1. Draw vertical grid lines with smooth vertical fade-out gradient
      const vertGradient = ctx.createLinearGradient(0, 0, 0, height);
      if (isDark) {
        vertGradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
        vertGradient.addColorStop(0.45, 'rgba(255, 255, 255, 0.08)');
        vertGradient.addColorStop(0.70, 'rgba(255, 255, 255, 0.04)');
        vertGradient.addColorStop(0.92, 'rgba(255, 255, 255, 0.0)');
        vertGradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
      } else {
        vertGradient.addColorStop(0, 'rgba(0, 0, 0, 0.07)');
        vertGradient.addColorStop(0.45, 'rgba(0, 0, 0, 0.07)');
        vertGradient.addColorStop(0.70, 'rgba(0, 0, 0, 0.035)');
        vertGradient.addColorStop(0.92, 'rgba(0, 0, 0, 0.0)');
        vertGradient.addColorStop(1, 'rgba(0, 0, 0, 0.0)');
      }

      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = vertGradient;
      for (let x = 0; x <= width + gridSize; x += gridSize) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      ctx.stroke();

      // 2. Draw horizontal grid lines with smooth per-line opacity decay
      for (let y = 0; y <= height + gridSize; y += gridSize) {
        const vFade = getVerticalFade(y);
        if (vFade <= 0.005) continue; // completely transparent

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = isDark
          ? `rgba(255, 255, 255, ${0.08 * vFade})`
          : `rgba(0, 0, 0, ${0.07 * vFade})`;
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
      }

      // 3. Render illuminated filled square boxes with vertical fade
      const cellsToDelete = [];

      activeCellsRef.current.forEach((cell, key) => {
        const elapsed = time - cell.startTime;
        if (elapsed >= FADE_DURATION) {
          cellsToDelete.push(key);
          return;
        }

        const cellY = cell.row * gridSize;
        const vFade = getVerticalFade(cellY + gridSize * 0.5);
        if (vFade <= 0.01) {
          return;
        }

        // Cubic ease-out decay curve combined with vertical fade
        const progress = elapsed / FADE_DURATION;
        const fade = Math.max(0, 1 - progress);
        const currentAlpha = cell.maxAlpha * (fade * fade) * vFade;

        const x = cell.col * gridSize;
        const y = cell.row * gridSize;

        if (isDark) {
          // Dark Theme: Filled with White Glass & Illuminated White Outline
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.22})`;
          ctx.fillRect(x + 1, y + 1, gridSize - 1, gridSize - 1);

          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.55})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 0.5, y + 0.5, gridSize, gridSize);
        } else {
          // Light Theme: Filled with Black & Highlighted Dark Outline
          ctx.fillStyle = `rgba(0, 0, 0, ${currentAlpha * 0.14})`;
          ctx.fillRect(x + 1, y + 1, gridSize - 1, gridSize - 1);

          ctx.strokeStyle = `rgba(0, 0, 0, ${currentAlpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 0.5, y + 0.5, gridSize, gridSize);
        }
      });

      cellsToDelete.forEach(k => activeCellsRef.current.delete(k));

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [gridSize, containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
};

export default InteractiveGridBackground;
