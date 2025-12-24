import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:text-red-400 text-xl font-bold">SCS Services</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-red-400">Home</Link>
          <Link to="/services" className="text-white hover:text-red-400">Services</Link>
          <Link to="/admin" className="text-white hover:text-red-400">Admin</Link>
          <Link to="/contact" className="text-white hover:text-red-400">Contact</Link>
          <button onClick={() => setChatOpen(true)} className="text-white hover:text-red-400">Help</button>
        </div>
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link to="/" className="block text-white py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="block text-white py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/admin" className="block text-white py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>Admin</Link>
          <Link to="/contact" className="block text-white py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
          <button onClick={() => { setChatOpen(true); setIsOpen(false); }} className="block text-white py-2 hover:text-gray-200 text-left">Help</button>
        </div>
      )}
      <Chat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </nav>
  );
};

export default Navbar;
