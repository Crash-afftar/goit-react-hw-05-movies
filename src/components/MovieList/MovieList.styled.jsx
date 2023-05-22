import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
  padding-left: 50px;
`;

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

  &:hover,
  &:focus {
    color: #eb9486;
  }`
