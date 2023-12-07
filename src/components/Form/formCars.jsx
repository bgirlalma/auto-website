import { Formik,Form, Field } from 'formik';
// import * as Yup from 'yup';
// import Notiflix from 'notiflix';

// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .required('Required'),
//   price: Yup.number()
//     .required('Required'),
//   from: Yup.string().required('Required'),
//   to: Yup.string()
//     .required('Required'),
// });

const FormCars= () => {

    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="carBrand">Car brand</label>
          <select id="carBrand" name="carBrand" placeholder="Enter the text">
            <option value="" label=""></option>
            <option value="" label=""></option>
          </select>

          <label htmlFor="price">Price/ 1 hour</label>
            <select id="price" name="price" placeholder="To $">
            <option value="" label=""></option>
            <option value="" label=""></option>
          </select>

          <label htmlFor="carMileage">Сar mileage / km</label>
          <Field id="carMileage" name="carMileage" placeholder="from" />
          <Field id="carMileage" name="carMileage" placeholder="to" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    );
}

export default FormCars;