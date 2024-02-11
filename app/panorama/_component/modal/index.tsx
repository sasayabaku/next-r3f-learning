'use client';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/features/modal/modalSlices';

import './styles.scss';

export function Modal() {
  const dispatch = useDispatch();

  function onClose() {
    dispatch(setModal('none'));
  }

  function closeIFrame() {
    dispatch(setModal('none'));
  }

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.data === 'close') {
        closeIFrame(); // Iframe or モーダルを閉じる処理
      }
    });
  }, []);

  return (
    <div className="modalBody">
      <div className="modalObject">
        <div className="buttonWrapper">
          <button
            type="button"
            className="closeModal"
            aria-label="closeModal"
            onClick={() => {
              onClose();
            }}
          />
        </div>
        <iframe
          src="http://localhost:8080"
          id="chatbot"
          title="chatbot"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
}

export default Modal;
