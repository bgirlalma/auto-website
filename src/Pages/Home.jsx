import styled from "styled-components";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const MainTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.2;
  color: #121417;

  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  line-height: 0.9;
  color: #121417;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 0, 7;
  color: #121417;

  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;

const HomePage = () => {
    return (
        <div>
            <div>
                <MainTitle>Auto-Drive company</MainTitle>
                <Title>The leader in the market for the transportation and sale of cars from abroad</Title>
           </div>

            <div>
                <StyledList>
                    <li>
                        <Title>TOP-1: European service</Title>
                        <Desc>We are a team of professionals, who are zealously selected for the most important cars in Europe, and we are interested in the most beautiful variants. Our preritet is your dovira, that we report the maximum zusil u vivchennya dermal autobola before yogo pridbannyam</Desc>
                    </li>
                    <li>
                         <Title>TOP-2: hope and efficiency</Title>
                        <Desc>Our qualification of the automotive industry is ready to provide you with detailed information about the car in our assortment. They will give you information on all your food and advice on the auto, which will help you to see the most beautiful vibir.</Desc>
                    </li>
                    <li>
                         <Title>TOP-3: a wide range of services</Title>
                        <Desc>Auto&Company provides a wide range of services: from the delivery of a car to the first delivery to Ukraine, from the preparation of a package of documents. This is how our company offers such services, such as: auto-copy, Trade-IN and inshi..</Desc>
                    </li>
                </StyledList>
            </div>

            <div>
                <StyledList>
                    <li>
                        <Title>Assistance in registration</Title>
                        <Desc>We will help with the registration of a turnkey car</Desc>
                    </li>
                    <li>
                        <Title>Documentation</Title>
                        <Desc>Preparation of all documentation</Desc>
                    </li>
                    <li>
                        <Title>Full support</Title>
                        <Desc>Full support at all stages of registration</Desc>
                    </li>
                </StyledList>
            </div>
        </div>
    )
}

export default HomePage;