import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 25px;
  list-style-type: none;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 10px;`

export const SectionTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
align-items: center;
  color: #763337;
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  color: #000;

  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
 
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #000;
  transition: all 0.3s ease;
  text-decoration: none;
  

  cursor: pointer;
  transition: transform 0.65s;


  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 0px 89px 1px rgba(209, 181, 71, 0.62);
    -moz-box-shadow: 0px 0px 89px 1px rgba(209, 181, 71, 0.62);
    box-shadow: 0px 0px 89px 1px rgba(209, 181, 71, 0.62);
  }

  > a {
    text-decoration: none;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 75;
  border-radius: 10px;
`;
export const ProductName = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
