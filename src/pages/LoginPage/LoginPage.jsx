import { Field, Form, Formik } from "formik";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values));
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
          <p>
            You do not have account? <Link to="/register">Registration</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
