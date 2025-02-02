import { Field, Form, Formik } from "formik";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div className={styles.container_login}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form_login}>
          <label className={styles.label_login}>
            <span>Email:</span>
            <Field name="email" className={styles.input_login} />
          </label>
          <label className={styles.label_login}>
            <span>Password:</span>
            <Field
              name="password"
              className={styles.input_login}
              type="password"
            />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
