import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    selector: string;
}

const Portal: React.FC<PortalProps> = ({ children, selector }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
        };
    }, []);

    if (!mounted) {
        return null;
    }

    const portalRoot = document.querySelector(selector);
    return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
};

export default Portal;