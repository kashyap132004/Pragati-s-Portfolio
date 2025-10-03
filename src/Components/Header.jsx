import { useState } from "react";
import "./Header.css";

export default function Header({ scrollToRef }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header>
        <button 
          className="toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <h1>Pragati's Portfolio</h1>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><button onClick={() => { scrollToRef("home"); setIsOpen(false); }}>Home</button></li>
          <li><button onClick={() => { scrollToRef("about"); setIsOpen(false); }}>About</button></li>
          <li><button onClick={() => { scrollToRef("skills"); setIsOpen(false); }}>Skills</button></li>
          <li><button onClick={() => { scrollToRef("projects"); setIsOpen(false); }}>Projects</button></li>
          <li><button onClick={() => { scrollToRef("contacts"); setIsOpen(false); }}>Contacts</button></li>
        </ul>
      </div>
    </>
  );
}
