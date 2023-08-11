'use client';

import { useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/features/modal/modalSlices';

import './styles.scss';

export function Modal() {
  const dispatch = useDispatch();

  function onClose() {
    dispatch(setModal('none'));
  }

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
        <div>Title</div>
        <div>children</div>
      </div>
    </div>
  );
}

export default Modal;
