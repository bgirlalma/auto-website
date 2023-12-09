import { Formik,Form, Field } from 'formik';
import * as Yup from 'yup';

import styled from 'styled-components';

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
 
`;

const Wrapp = styled.div`
display: flex;
flex-direction: column;
`;

const FlexDiv = styled.div`
display: flex;
`;

const StyledField = styled(Field)`
  width: 224px;
  display: flex;
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 14px;
  background-color: #a8dcef;
  margin-right: 18px;
  border: none;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
`;

const StyledFieldPrice = styled(Field)`
  width: 125px;
  display: flex;
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 14px;
  background-color: #a8dcef;
  margin-right: 18px;
  border: none;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
`;

const StyledFromTo = styled(Field)`
  width: 160px;
  display: flex;
  height: 48px;
  padding-left: 20px;
  border-radius: 14px 0 14px 14px;
  background-color: #a8dcef;
  border: none;
  margin-right: -12px;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
`;

const StyledFromToTwo = styled(Field)`
  width: 160px;
  display: flex;
  height: 48px;
  padding-left: 20px;
  border-radius: 0 14px 14px 0;
  background-color: #a8dcef;
  border: none;
  margin-right: 20px;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
  border-left: 3px solid rgba(138, 138, 137, 0.2);
`;

const StyledButton = styled.button`
  display: flex;
  width: 136px;
 height: 48px;
 margin-top: auto;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470ff;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: var(--White, #fff);
  border: none;
`;

const CarsLabel = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;
  margin-bottom: 10px;
`;

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
        <Container>
          <Wrapp>
            <CarsLabel htmlFor="carBrand">Car brand</CarsLabel>
            <StyledField
              as="select"
              id="carBrand"
              name="carBrand"
              placeholder="Enter the text"
            >
              {makesList.map((make, index) => (
                <option key={`${make}-${index}`} value={make}>
                  {make}
                </option>
              ))}
            </StyledField>
          </Wrapp>

          <Wrapp>
            <CarsLabel htmlFor="price">Price/ 1 hour</CarsLabel>
            <StyledFieldPrice as="select" id="price" name="price">
              <option value="To $" label="To $"></option>
              <option value="100" label="$100"></option>
              <option value="200" label="$200"></option>
              <option value="300" label="$300"></option>
              <option value="400" label="$400"></option>
              <option value="500" label="$500"></option>
              <option value="600" label="$600"></option>
              <option value="800" label="$800"></option>
              <option value="1000" label="$1000"></option>
              {/* інші опції */}
            </StyledFieldPrice>
          </Wrapp>
          <Wrapp>
            <CarsLabel htmlFor="carMileage">Car mileage / km</CarsLabel>
            <FlexDiv>
              <StyledFromTo
                as="input"
                type="number"
                id="carMileageFrom"
                name="carMileageFrom"
                placeholder="from"
              />
              <StyledFromToTwo
                as="input"
                type="number"
                id="carMileageTo"
                name="carMileageTo"
                placeholder="to"
              />
            </FlexDiv>
          </Wrapp>
          <StyledButton type="submit">Search</StyledButton>
        </Container>
      </Form>
    </Formik>
  );
};

export default FormCars;