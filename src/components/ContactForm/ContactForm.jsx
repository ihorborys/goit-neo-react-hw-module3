import { Field, Form, Formik } from "formik";
import styles from "./ContactForm.module.css";
import { v4 as generatedId } from "uuid";

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (value) => {
    onAddContact({
      id: generatedId(),
      name: value.name,
      number: value.number,
    });
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <Form className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <Field
            className={styles.field}
            id="name"
            type="text"
            name="name"
          ></Field>
          <label className={styles.label} htmlFor="number">
            Number
          </label>
          <Field
            className={styles.field}
            id="number"
            type="text"
            name="number"
          ></Field>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
