import { useEffect } from 'react';

interface UseCanonicalProps {
  path: string;
  baseUrl?: string;
}

export function useCanonical({ path, baseUrl = window.location.origin }: UseCanonicalProps) {
  useEffect(() => {
    // Remove any existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create new canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = `${baseUrl}${path}`;
    
    // Add to document head
    document.head.appendChild(canonicalLink);

    // Cleanup function to remove the canonical link when component unmounts
    return () => {
      const currentCanonical = document.querySelector('link[rel="canonical"]');
      if (currentCanonical && currentCanonical.href === `${baseUrl}${path}`) {
        currentCanonical.remove();
      }
    };
  }, [path, baseUrl]);
}