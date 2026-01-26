import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * TS-Λ3 // HASH REDIRECT [v5.0.0]
 * Handles navigation to hash anchors (e.g., /#foundations)
 * React Router's Navigate doesn't handle hash fragments properly
 */
interface HashRedirectProps {
  to: string; // e.g., "/#foundations"
}

export const HashRedirect: React.FC<HashRedirectProps> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const [path, hash] = to.split('#');
    navigate(path || '/', { replace: true });
    
    // Scroll to hash after navigation
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [to, navigate]);

  return null;
};
