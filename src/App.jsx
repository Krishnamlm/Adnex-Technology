import React, { useEffect, useRef, useState } from 'react';
// 🎯 ADD Router Imports and BlogPage 🎯
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useScrollToAnchor from './components/useScrollToAnchor';
import BlogPage from './components/BlogPage.jsx'; 

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
import assets from './assets/assets'; 

const getInitialTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
};

// 🎯 NEW: Logic and persistent elements are moved to AppContent
const AppContent = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const mouse = useRef({x: 0, y: 0});
    const position = useRef({x: 0, y: 0});
    
    useEffect(() => {
        const handelMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        document.addEventListener('mousemove', handelMouseMove);

        const animate = () => {
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

    useScrollToAnchor();
    
    const whatsappMessage = "Hello%20Adnex!%20I%20saw%20your%20website%20and%20would%20like%20to%20talk%20about%20a%20project.";
    const phoneNumber = "916265279245"; 

    return (
        <div className="relative bg-white dark:bg-black transition-colors">
            <Toaster />
            
            {/* Navbar is OUTSIDE <Routes> (PERSISTENT) */}
            <Navbar theme={theme} setTheme={setTheme} />
            
            <main>
                {/* 🎯 ROUTES: Renders dynamic content here 🎯 */}
                <Routes>
                    {/* HOME PAGE ROUTE: Path '/' renders all existing sections */}
                    <Route path="/" element={
                        <>
                            <Hero />
                            <TrustedBy />
                            <ProjectStats theme={theme} />
                            <Services />
                            <OurWork />           
                            <ThumbnailSection />
                            <Teams />
                            <ClientReviewsSection />
                            <ContactUs />
                        </>
                    } />
                    
                    {/* BLOG PAGE ROUTE: Path '/blog' renders only the BlogPage */}
                    <Route path="/blog" element={<BlogPage />} />
                </Routes>
            </main>
            
            <Footer theme={theme} />

            {/* WhatsApp Icon is OUTSIDE <Routes> (PERSISTENT) */}
            <div className="fixed bottom-6 right-6 z-50">
                {/* ... (All 3 ripple divs) ... */}
                <div 
                    className="absolute inset-0 bg-[#25D366] rounded-full animate-wave-1 opacity-75 w-full h-full z-0"
                ></div>
                <div 
                    className="absolute inset-0 bg-[#25D366] rounded-full animate-wave-2 opacity-75 w-full h-full z-0" 
                ></div>
                <div 
                    className="absolute inset-0 bg-[#25D366] rounded-full animate-wave-3 opacity-75 w-full h-full z-0" 
                ></div>
                
                {/* 🎯 ICON ANCHOR TAG 🎯 */}
                <a 
                    href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 bg-[#25D366] p-0 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                >
                    <img src={assets.whatsapp_icon} alt="WhatsApp Contact" className="w-14 h-14" />
                </a>
            </div>

            {/* ... (Custom Cursor elements) ... */}
            <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" 
            style={{transition: 'transform 0.1s ease-out'}}>
            </div>
            <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"></div>
        </div>
    );
};


// 🎯 FINAL EXPORT: Wrap the application in Router with the basename for GitHub Pages
const App = () => (
    <Router> 
        <AppContent />
    </Router>
);

export default App;