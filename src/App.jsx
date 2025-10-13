import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientReviewsSection from "./components/clientreviews.jsx";
import ProjectStats from './components/ProjectStats.jsx';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import ThumbnailSection from './components/ThumbnailSection'; 
// ✅ ASSUMPTION: assets object containing whatsapp_icon is imported here
import assets from './assets/assets'; 

const getInitialTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
};

const App = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    // Refs for custom cursor position tracking 
    const mouse = useRef({x: 0, y: 0});
    const position = useRef({x: 0, y: 0});

    useEffect(() => {
        const handelMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        document.addEventListener('mousemove', handelMouseMove);

        const animate = () => {
            // Cursor follow animation logic
            position.current.x += (mouse.current.x - position.current.x) * 0.1;
            position.current.y += (mouse.current.y - position.current.y) * 0.1;

            if (dotRef.current && outlineRef.current) {
                dotRef.current.style.transform = `translate3D(${mouse.current.x -6}px, ${mouse.current.y -6}px, 0)`;
                outlineRef.current.style.transform = `translate3D(${position.current.x -20}px, ${position.current.y -20}px, 0)`;
            }
            requestAnimationFrame(animate);
        };
        animate();

        return() => {
            document.removeEventListener('mousemove', handelMouseMove);
        };
    },[]);

    // Define the URL-encoded message for the WhatsApp link
    const whatsappMessage = "Hello%20Adnex!%20I%20saw%20your%20website%20and%20would%20like%20to%20talk%20about%20a%20project.";
    const phoneNumber = "916265279245"; // Define the phone number for clarity

    return (
        <div className="relative bg-white dark:bg-black transition-colors">
            <Toaster />
            
            {/* Main Content Structure */}
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero />
            <TrustedBy />
            <ProjectStats theme={theme} />
            <Services />
            <OurWork />           
            <ThumbnailSection />
            <Teams />
            <ClientReviewsSection />
            <ContactUs />
            <Footer theme={theme} />

            {/* 📞 FIXED WHATSAPP ICON (Ripple Wrapper) 📞 */}
            <div className="fixed bottom-6 right-6 z-50">
                
   {/* 💥 RIPPLE 1: Starts immediately 💥 */}
        <div 
            className="absolute inset-0 
                       bg-[#25D366] 
                       rounded-full 
                       animate-wave-1 /* <-- NEW CUSTOM CLASS 1 */
                       opacity-75 
                       w-full h-full 
                       z-0"
        ></div>

        {/* 💥 RIPPLE 2: Delayed by 600ms 💥 */}
        <div 
            className="absolute inset-0 
                       bg-[#25D366] 
                       rounded-full 
                       animate-wave-2 /* <-- NEW CUSTOM CLASS 2 */
                       opacity-75 
                       w-full h-full 
                       z-0" 
        ></div>

        {/* 💥 RIPPLE 3: Delayed by 1200ms 💥 */}
        <div 
            className="absolute inset-0 
                       bg-[#25D366] 
                       rounded-full 
                       animate-wave-3 /* <-- NEW CUSTOM CLASS 3 */
                       opacity-75 
                       w-full h-full 
                       z-0" 
        ></div>
                
                {/* 🎯 ICON ANCHOR TAG (Relative to sit over the ripple) 🎯 */}
                <a 
                    href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    // Correct classes: relative and z-10 for stacking
                    className="relative z-10 bg-[#25D366] p-0 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                >
                    <img 
                        src={assets.whatsapp_icon} 
                        alt="WhatsApp Contact" 
                        className="w-14 h-14" 
                    />
                </a>
            </div>
            {/* --------------------------- */}

            {/* Custom Cursor Ring */}
            <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" 
            style={{transition: 'transform 0.1s ease-out'}}>
            </div>
            {/* Custom Cursor Dot */}
            <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"></div>
            
        </div>
    );
};

export default App;