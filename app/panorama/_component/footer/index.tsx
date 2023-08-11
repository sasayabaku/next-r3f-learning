'use client';

import { useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/features/modal/modalSlices';

import './styles.scss';

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

export default Footer;
