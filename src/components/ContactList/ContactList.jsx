import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectNameFilter, selectContacts } from "../../redux/selectors";
import Notification from "../Notification/Notification";

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const visibleContacts = useSelector(selectContacts).filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map((contact) => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <Notification message={"There is no contacts"} />
      )}
    </ul>
  );
};

export default ContactList;
