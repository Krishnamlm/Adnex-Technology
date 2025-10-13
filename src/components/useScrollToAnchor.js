import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToAnchor = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is an anchor hash (e.g., #our-work) in the URL
        if (hash) {
            // Get the element ID (remove the '#')
            const id = hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                // Use a slight delay to ensure all components (especially Framer Motion) 
                // have finished rendering and the layout is stable.
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); 
            }
        }
        // If it's the homepage root ('/'), ensure smooth scroll from the top
        else if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname, hash]); // Re-run effect whenever the URL changes

    return null;
};

export default useScrollToAnchor;