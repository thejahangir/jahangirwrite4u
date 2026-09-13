import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function TopProgressBar() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      const next = scrollable <= 0 ? 0 : Math.min(100, (window.scrollY / scrollable) * 100);
      setProgress(next);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [location.pathname]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <div
        className="relative h-full bg-[#e62117] transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute right-0 top-0 h-full w-24 translate-x-1/2 bg-[#e62117] blur-[4px] opacity-80" />
      </div>
    </div>
  );
}
