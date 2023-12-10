import Favorite from "components/Favorites/favorites";
import styled from "styled-components";

 const Containet = styled.div`
  padding-left: 115px;
  padding-right: 115px;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 0.9;
  color: #121417;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const FavoritePages = () => {

  return (
    <Containet>
      <Title>Избранные автомобили</Title>
      <Favorite/>
    </Containet>
  );
};

export default FavoritePages;
