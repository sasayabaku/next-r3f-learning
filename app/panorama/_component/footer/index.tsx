'use client';

import { useDispatch } from 'react-redux';

import './styles.scss';
import { useState, useRef } from 'react';

import { gsap } from 'gsap';

import { setModal } from '../../../../redux/features/modal/modalSlices';

export function Footer() {
  const dispatch = useDispatch();

  function clickAbout() {
    dispatch(setModal('about'));
  }

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
            <button
              type="button"
              className="menuInteractive"
              onClick={() => {
                clickAbout();
              }}
            >
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

export function AnotherFooter() {
  const containerRef = useRef(null);

  const [isExpand, setExpand] = useState(false);

  const handleExpand = () => {
    const container = containerRef.current;

    gsap.to(container, {
      height: '300px',
      padding: 'auto 30px',
      duration: 0.5,
      ease: 'power2.out',
    });

    setExpand(true);
  };

  const handleShrink = () => {
    const container = containerRef.current;

    gsap.to(container, {
      height: 'auto',
      padding: 'auto 6px',
      duration: 0.5,
      ease: 'power2.out',
    });

    setExpand(false);
  };

  return (
    <div className="footer">
      <div className="menu" ref={containerRef}>
        <ul className="menuNav">
          <li>
            <div className="menuText">Home</div>
          </li>
          <li>
            <button
              type="button"
              className="menuInteractive"
              onClick={() => {
                console.log('dasafjsdfa');
              }}
            >
              dummy
            </button>
          </li>
          <li>
            {isExpand ? (
              <button
                type="button"
                className="menuInteractive"
                onClick={() => {
                  handleShrink();
                }}
              >
                Shrink
              </button>
            ) : (
              <button
                type="button"
                className="menuInteractive"
                onClick={() => {
                  handleExpand();
                }}
              >
                Expand
              </button>
            )}
          </li>
          <li>
            <button type="button" className="menuInteractive">
              TOPIC
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AnotherFooter;
