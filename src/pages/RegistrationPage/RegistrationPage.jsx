import { Field, Form, Formik } from "formik";
import styles from "./RegistrationPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
const RegistrationPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className={styles.container_register}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form_register}>
          <label className={styles.label_register}>
            <span>Name:</span>
            <Field name="name" className={styles.input_register} />
          </label>
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
          <p>
            You already have account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
