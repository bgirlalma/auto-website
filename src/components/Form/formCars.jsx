import { Formik,Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  price: Yup.number()
    .required('Required'),
  from: Yup.string().required('Required'),
  to: Yup.string()
    .required('Required'),
});

const makesList = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];

const FormCars = () => {
  return (
    <Formik
      initialValues={{
        carBrand: "",
        price: "",
        carMileageFrom: "",
        carMileageTo: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="carBrand">Car brand</label>
        <Field as="select" id="carBrand" name="carBrand">
          {makesList.map((make, index) => (
            <option key={`${make}-${index}`} value={make}>
              {make}
            </option>
          ))}
        </Field>

        <label htmlFor="price">Price/ 1 hour</label>
        <Field as="select" id="price" name="price">
          <option value="" label=""></option>
          <option value="100" label="$100"></option>
          <option value="200" label="$200"></option>
          {/* інші опції */}
        </Field>

        <label htmlFor="carMileage">Car mileage / km</label>
        <div>
          <Field
            as="input"
            type="number"
            id="carMileageFrom"
            name="carMileageFrom"
            placeholder="from"
          />
          <span>-</span>
          <Field
            as="input"
            type="number"
            id="carMileageTo"
            name="carMileageTo"
            placeholder="to"
          />
        </div>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default FormCars;