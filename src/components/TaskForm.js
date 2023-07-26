// TaskForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TaskForm = ({ addTask }) => {
  const initialValues = {
    name: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .required("Este campo es obligatorio"),
  });

  const handleSubmit = (values, { resetForm }) => {
    addTask(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      className="form-background"
    >
      <Form>
        <div>
          <label htmlFor="name">Tarea Nueva:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div className="form-container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>{/* Resto del código del formulario */}</Form>
          </Formik>
        </div>

        <div>
          <label htmlFor="description">Descripción:</label>
          <Field type="text" id="description" name="description" />
        </div>

        <div>
          <button type="submit">Agregar tarea</button>
        </div>
      </Form>
    </Formik>
  );
};

export default TaskForm;
