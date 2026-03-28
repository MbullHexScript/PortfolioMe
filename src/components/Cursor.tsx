import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) { dotRef.current.style.left = mx + 'px'; dotRef.current.style.top = my + 'px'; }
    };
    const loop = () => {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px'; }
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a,button,.proj-card,.sk-card,.c-link,.stab,.nav-link')) {
        ringRef.current?.classList.add('cursor-ring--big');
        dotRef.current?.classList.add('cursor-dot--big');
      }
    };
    const onOut = () => {
      ringRef.current?.classList.remove('cursor-ring--big');
      dotRef.current?.classList.remove('cursor-dot--big');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
