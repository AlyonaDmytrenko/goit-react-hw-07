import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/selectors';
import NameFilter from '../Filter/NameFilter';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Server is dead</h2>;
  }

  return (
    <div>
      <NameFilter />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

// import { useSelector } from 'react-redux';
// import Contact from './Contact/Contact';
// import {
//   selectContacts,
//   selectNameFilter,
//   selectLoading,
//   selectError,
// } from '../../redux/selectors';
// import NameFilter from '../Filter/NameFilter';

// const ContactList = () => {
//   const userContact = useSelector(selectContacts);
//   const filter = useSelector(selectNameFilter) || '';
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   if (!userContact) {
//     return <p>Loading...</p>;
//   }

//   const filteredContact = userContact.filter(contact => {
//     const name = contact.name?.toLowerCase() || '';
//     const number = contact.number?.toLowerCase() || '';
//     const search = filter.toLowerCase();
//     return name.includes(search) || number.includes(search);
//   });

//   return (
//     <div>
//       <NameFilter />
//       <ul>
//         {filteredContact.map(contact => (
//           <li key={contact.id}>
//             <Contact
//               id={contact.id}
//               name={contact.name}
//               number={contact.number}
//             />
//           </li>
//         ))}
//       </ul>
//       {loading && <h2>Loading...</h2>}
//       {error && <h2>Server is dead</h2>}
//     </div>
//   );
// };

// export default ContactList;
