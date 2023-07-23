'use client';

import './styles.scss';

export function Footer() {
  return (
    <div className="footer">
      <div className="menu">
        <ul className="menuNav">
          <li>
            <div className="menuText">Home</div>
          </li>
          <li>
            <button type="button" className="menuInteractive">
              MAP
            </button>
          </li>
          <li>
            <button type="button" className="menuInteractive">
              ABOUT
            </button>
          </li>
          <li>
            <button type="button" className="menuInteractive">
              NEWS
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
