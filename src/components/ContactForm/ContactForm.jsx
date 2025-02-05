import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "мінімальна кількість символів - 3")
    .max(50, "максимальна кількість символів - 50")
    .required("поля повинні бути обов'язковими для заповнення"),
  number: Yup.number().required(
    "поля повинні бути обов'язковими для заповнення"
  ),
});
const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.form_input}>
          <label className={styles.label_form}>
            Name
            <Field className={styles.input_form} name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="div"
            />
          </label>
          <label className={styles.label_form}>
            Number
            <Field className={styles.input_form} name="number" />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="div"
            />
          </label>
        </div>
        <button className={styles.btn_form} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
