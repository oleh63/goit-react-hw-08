import { Field, Form, Formik } from "formik";
import styles from "./RegistrationPage.module.css";
const RegistrationPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div className={styles.container_register}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form_register}>
          <label className={styles.label_register}>
            <span>Email:</span>
            <Field name="email" className={styles.input_register} />
          </label>
          <label className={styles.label_register}>
            <span>Password:</span>
            <Field
              name="password"
              className={styles.input_register}
              type="password"
            />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
