import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { RiAddCircleLine } from "react-icons/ri";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Phone number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label>
          Name
          <Field type="name" name="name" placeholder="Enter contact`s name" />
          <ErrorMessage className={css.msg} name="name" component="p" />
        </label>
        <label>
          Number
          <Field
            type="text"
            name="number"
            placeholder="Enter contact`s number"
          />
          <ErrorMessage className={css.msg} name="number" component="p" />
        </label>
        <button type="submit">
          <RiAddCircleLine className={css.addBtn} size={24} />
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
