import React, { useState } from 'react';
import './PinkCookieConsent.css';

const PinkCookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="pink-cookie-consent">
      <div className="pink-cookie-content">
        <span className="pink-cookie-title">🍪 Cookie Notice</span>
        <p>We use cookies to ensure you get the best luxury experience on our website. <a href="/privacy" className="pink-cookie-link">Learn more</a>.</p>
        <button className="pink-cookie-btn" onClick={() => setVisible(false)}>Accept</button>
      </div>
    </div>
  );
};

export default PinkCookieConsent;
