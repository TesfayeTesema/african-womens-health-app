import React, {useState} from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../assets/styles/RegistrationModal.css';

Modal.setAppElement('#root');

const RegistrationModal = ({ isOpen, onRequestClose, webinarTitle }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required')
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {

      try {
        axios.post('http://localhost:5000/pages/registrations', {
          ...values,
          webinarTitle
        });
        setIsSubmitted(true);
        setSubmitting(false);
        resetForm();
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
        onRequestClose();
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitting(false);
    }
    }
  });

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      {isSubmitted ? (
        <div className="confirmation-message">
          <h2>Registration Successful!</h2>
          <p>Thank you for registering for {webinarTitle}. We will send you a confirmation email shortly.</p>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <h2>Register for {webinarTitle}</h2>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          <button type="submit" disabled={formik.isSubmitting}>Submit</button>
        </form>
      )}
    </Modal>
  );
};

export default RegistrationModal;
