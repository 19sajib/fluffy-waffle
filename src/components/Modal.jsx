import React, { useState } from 'react';

const Modal = ({ onClose, onModalChange }) => {
  const [isEvenOnly, setIsEvenOnly] = useState(false);
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'Jane Doe', phone: '123-456-7890' },
    { id: 3, name: 'Bob Smith', phone: '123-456-7890' },
    { id: 4, name: 'Alice Johnson', phone: '123-456-7890' },
    { id: 5, name: 'Tom Jackson', phone: '123-456-7890' },
  ]);

  const handleCheckboxChange = () => {
    setIsEvenOnly(!isEvenOnly);
  };

  const filteredContacts = isEvenOnly ? contacts.filter((contact) => contact.id % 2 === 0) : contacts;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>All Contacts</h2>
          <button className="btn btn-modal" onClick={() => onModalChange('modalB')}>
            US Contacts
          </button>
          <button className="btn btn-close" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modal-body">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="only-even-checkbox" checked={isEvenOnly} onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor="only-even-checkbox">
              Only Even
            </label>
          </div>
          <ul>
            {filteredContacts.map((contact) => (
              <li key={contact.id} onClick={() => onModalChange('modalC')}>
                {contact.name} ({contact.phone})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal