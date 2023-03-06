import { useEffect, useState } from "react";

let dummyContacts= [{ id: 1, name: 'Alice Johnson', phone: '123-456-7890' },
{ id: 2, name: 'Tom Jackson', phone: '123-456-7890' },
{ id: 3, name: 'Sam Wilson', phone: '123-456-7890' },
{ id: 4, name: 'Laura Smith', phone: '123-456-7890' },
{ id: 5, name: 'Sarah Davis', phone: '123-456-7890' },]
const ModalB = ({ isOpen, onClose }) => {
    const [showOnlyEvenIds, setShowOnlyEvenIds] = useState(false);
    const [contacts, setContacts] = useState(dummyContacts);
  
    useEffect(() => {
      if (showOnlyEvenIds) {
        const filteredContacts = dummyContacts.filter(
          (contact) => contact.id % 2 === 0
        );
        setContacts(filteredContacts);
      } else {
        setContacts(dummyContacts);
      }
    }, [showOnlyEvenIds]);
  
    const handleToggleOnlyEvenIds = () => {
      setShowOnlyEvenIds(!showOnlyEvenIds);
    };
  
    const handleClose = () => {
      setShowOnlyEvenIds(false);
      onClose();
    };
  
    return (
      <div className={`modal ${isOpen ? "d-block" : "d-none"}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">US Contacts</h5>
              <button type="button" className="btn-close" onClick={handleClose} />
            </div>
            <div className="modal-body">
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="onlyEvenIds"
                  checked={showOnlyEvenIds}
                  onChange={handleToggleOnlyEvenIds}
                />
                <label className="form-check-label" htmlFor="onlyEvenIds">
                  Only even IDs
                </label>
              </div>
              <div className="list-group">
                {contacts.map((contact) => (
                  <button
                    key={contact.id}
                    type="button"
                    className="list-group-item list-group-item-action"
                    data-bs-toggle="modal"
                    data-bs-target="#modalC"
                  >
                    {contact.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#46139f", color: "#fff" }}
                onClick={onAllContacts}
              >
                All Contacts
              </button>
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#ff7f50", color: "#fff" }}
                onClick={onUSContacts}
              >
                US Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ModalB