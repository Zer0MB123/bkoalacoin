import React from "react";
import './App.css';
import logo from './photos/logo.webp';
import x from './photos/x.webp';
import telegram from './photos/t.webp';
import discord from './photos/d.webp';
import insta from './photos/i.webp';

export default function Home() {
  return (
    <div className="fullpage">
      <div className="nav">
        <div className="logo-text">
          <img src={logo} alt="Koala coin logo image" />
          <h1>Business Koala Coin (BKC)</h1>
        </div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#roadmap">Road Map</a>
          <a href="#community">Community</a>
        </div>
      </div>
      
      {/* Home Section */}
      <div id="features" className="homesection">
        <img src={logo} alt="Koala coin logo image" />
        <h1>Business Koala Coin (BKC)</h1>
        <p className="paracolor">
          Business Koala Coin (BKC) is a revolutionary cryptocurrency designed to
          empower businesses and investors. It aims to streamline transactions,
          enhance financial operations, and offer a secure platform for growth.
        </p>
        <h3>Token Address</h3>
        <p className="paracolor">Test</p>
        <button>Buy Token (BKC)</button>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div id="roadmap" className="roadmapsection">
        <h2>Road Map</h2>
        <p className="paracolor">Explore the future of Business Koala Coin (BKC). Here's what we have planned:</p>
        <ul>
          <li>Launch and Community Building</li>
          <li>Partnership Announcements</li>
          <li>Expansion to Global Markets</li>
          <li>Advanced Features and Updates</li>
        </ul>
      </div>

      {/* Community Section */}
      <div id="community" className="communitysection">
        <h2>Our Community</h2>
        <p>Join the Business Koala Coin community and be part of a thriving ecosystem that supports growth and innovation.</p>
        <div className="cards-container">
          <div className="card">
            <img src={x} alt="X" />
            <h3>X</h3>
            <p>Stay connected with our latest updates and news through X (formerly Twitter). Follow us for real-time announcements and join the conversation.</p>
            <button onClick={() => window.open('https://x.com/bkoalacoin', '_blank')}>Open Link</button>
          </div>
          <div className="card">
            <img src={telegram} alt="Telegram" />
            <h3>Telegram</h3>
            <p>Join our Telegram community to get direct updates, interact with fellow members, and receive exclusive offers and news about Business Koala Coin.</p>
            <button onClick={() => window.open('https://t.me/+-hj5MUhS1HczN2Jk', '_blank')}>Open Link</button>
          </div>
          <div className="card">
            <img src={insta} alt="Instagram" />
            <h3>Instagram</h3>
            <p>Follow us on Instagram for a visual journey of Business Koala Coin, including announcements, events, and behind-the-scenes content.</p>
            <button onClick={() => window.open('https://www.instagram.com/bkoalacoin/', '_blank')}>Open Link</button>
          </div>
          <div className="card">
            <img src={discord} alt="Discord" />
            <h3>Discord</h3>
            <p>Join our Discord server to engage in live discussions, get support, participate in community events, and stay up-to-date with all things BKC.</p>
            <button>Soon</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2024 Business Koala Coin (BKC). All rights reserved.</p>
      </div>
    </div>
  );
}
