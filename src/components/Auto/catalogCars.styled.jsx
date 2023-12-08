import styled from "styled-components";

export const Containet = styled.div`
padding-left: 115px;
padding-right: 115px;
`

 export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 0.9;
  color: #121417;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const FlexContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
`;

export const ButtonLikeCards = styled.button`
width: 18px;
height: 18px;
  border: none;
  background-color: inherit;
`;

export const FlexTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 270px;
  border-radius: 12px;
  background-size: cover;
`;

export const CardList = styled.li`
max-width: 274px;
`;

export const TitleCar = styled.h2`
  display: flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #121417;
  margin-top: 8px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const Desc = styled.h2`
  justify-content: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #3470ff;
  margin-top: 8px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const TitleTree = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #121417;
  margin-top: 8px;
  margin-bottom: 5px;
  margin-left: auto;
`;

export const FlextTitleBox = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding-right: 15px;
`;

export const DescMachine = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 6px;
`;

export const ButtonCards = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  margin-top: 28px;
`;