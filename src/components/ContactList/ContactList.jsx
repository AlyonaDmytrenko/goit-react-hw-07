import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';

const ContactList = () => {
  const userContact = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name) || '';
  // const error = useSelector(state => state.error.contactList.error);

  if (!userContact) {
    return <p>Loading...</p>;
  }

  const filteredContact = userContact.filter(contact => {
    const name = contact.name?.toLowerCase() || '';
    const number = contact.number?.toLowerCase() || '';
    const search = filter.toLowerCase();
    return name.includes(search) || number.includes(search);
  });

  return (
    <ul>
      {filteredContact.map(contact => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
    // {error && <h2>server is dead</h2>}
  );
};

export default ContactList;
