'use client';

import React from 'react';

import { useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/features/modal/modalSlices';

import './styles.scss';

type ModalProps = {
  children: React.ReactNode;
};

export function Modal({ children }: ModalProps) {
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
        {children && <div className="children">{children}</div>}
      </div>
    </div>
  );
}

export default Modal;
