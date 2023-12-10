import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 29px;
`;

export const CardList = styled.div`
  position: relative;
  flex-basis: calc(25% - 29px);
  box-sizing: border-box;
  margin-bottom: 50px;
  max-width: 274px;
`;

export const ButtonLikeCards = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 12px;
  background-size: cover;
`;

export const FlexTitle = styled.div`
  display: flex;
  align-items: center;
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

export const Desc = styled.p`
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

export const DescTwo = styled.p`
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
  flex-wrap: wrap;
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
  cursor: pointer;
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470ff;
  margin-top: 28px;
  border: none;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: var(--White, #fff);
`;

export const RentlaButton = styled.button`
  color: #3470ff;
  margin-top: 20px;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export const FilterButton = styled.button`
  cursor: pointer;
  display: flex;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;

  color: #3470ff;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  border: none;
  background-color: inherit;
`;
