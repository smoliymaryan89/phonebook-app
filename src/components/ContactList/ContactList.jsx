import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
            <button onClick={() => dispatch(deleteContact(id))} type="button">
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
