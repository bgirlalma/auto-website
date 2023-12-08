import styled from "styled-components";

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

export const FlexTitle = styled.div`
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DescMachine = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;