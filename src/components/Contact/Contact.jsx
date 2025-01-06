import { RiDeleteBinLine, RiUserFill, RiPhoneFill } from "react-icons/ri";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactWrapper}>
      <div className={css.contactContainer}>
        <div className={css.contactInfo}>
          <RiUserFill />
          {name}
        </div>
        <div className={css.contactInfo}>
          <RiPhoneFill />
          {number}
        </div>
      </div>
      <button type="button" onClick={() => handleDelete(id)}>
        <RiDeleteBinLine className={css.deleteBtn} size={24} />
      </button>
    </div>
  );
};

export default Contact;
