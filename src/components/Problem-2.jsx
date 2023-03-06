import React, { useState } from "react";
import Modal from "./Modal";
import ModalB from "./ModalB";

const Problem2 = () => {
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalBOpen, setModalBOpen] = useState(false);
  const [onlyEvenIds, setOnlyEvenIds] = useState(false);

  const toggleModalA = () => {
    setModalAOpen(!modalAOpen);
    setOnlyEvenIds(false);
  };

  const toggleModalB = () => {
    setModalBOpen(!modalBOpen);
    setOnlyEvenIds(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={toggleModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={toggleModalB}
          >
            US Contacts
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalAOpen}
        onClose={toggleModalA}
        onShowModalB={toggleModalB}
        onlyEvenIds={onlyEvenIds}
        onToggleOnlyEvenIds={() => setOnlyEvenIds(!onlyEvenIds)}
      />

      {/* <ModalB
        isOpen={modalBOpen}
        onClose={toggleModalB}
        onShowModalA={toggleModalA}
        onlyEvenIds={onlyEvenIds}
        onToggleOnlyEvenIds={() => setOnlyEvenIds(!onlyEvenIds)}
      /> */}
    </div>
  );
};

export default Problem2;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from './Modal';

// const Problem2 = () => {
//   const [contacts, setContacts] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalType, setModalType] = useState('');
//   const [usContacts, setUsContacts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [page, setPage] = useState(1);
//   const [onlyEven, setOnlyEven] = useState(false);

//   const fetchContacts = async (url) => {
//     try {
//       const response = await axios.get(url);
//       const { data } = response;
//       return data;
//     } catch (error) {
//       console.log('Error fetching contacts:', error);
//     }
//   };

//   const handleAllContactsClick = () => {
//     setModalType('all');
//     setModalVisible(true);
//   };

//   const handleUsContactsClick = () => {
//     setModalType('us');
//     setModalVisible(true);
//   };

//   const handleModalAClick = () => {
//     setModalType('all');
//   };

//   const handleModalBClick = () => {
//     setModalType('us');
//   };

//   const handleCloseModalClick = () => {
//     setModalVisible(false);
//     setModalType('');
//   };

//   const handleCheckboxChange = (event) => {
//     setOnlyEven(event.target.checked);
//   };

//   const handleSearchTermChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleModalCClick = (contact) => {
//     console.log('Contact details:', contact);
//   };

//   const filteredContacts = onlyEven
//     ? contacts.filter((contact) => contact.id % 2 === 0)
//     : contacts.filter((contact) =>
//         contact.first_name.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//   const handleScroll = (event) => {
//     const bottom =
//       event.target.scrollHeight - event.target.scrollTop ===
//       event.target.clientHeight;
//     if (bottom) {
//       setPage(page + 1);
//     }
//   };

//   useEffect(() => {
//     const fetchAllContacts = async () => {
//       const allContacts = await fetchContacts(
//         'https://contact.mediusware.com/api/contacts/&page=1'
//       );
//       setContacts(allContacts);
//     };
//     fetchAllContacts();
//   }, []);

//   useEffect(() => {
//     const fetchUsContacts = async () => {
//       const usContacts = await fetchContacts(
//         'https://contact.mediusware.com/api/country-contacts/united%20states/&page=1'
//       );
//       setUsContacts(usContacts);
//     };
//     fetchUsContacts();
//   }, []);

//     return (

//         <div className="container">
//             <div className="row justify-content-center mt-5">
//                 <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
//                 <div className="d-flex justify-content-center gap-3">
//                 <button className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
//                 <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
//                 </div>
                
//             </div>

            
//         </div>
//     );
// };

// export default Problem2;