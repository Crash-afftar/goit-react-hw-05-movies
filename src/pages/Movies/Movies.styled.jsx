import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkGoBack = styled(Link)`
    margin-bottom: 30px;
`;

export const SearchTitle = styled.h2`
display: flex;
  justify-content: center;
  align-items: center;
  color: #663c7f;
`;

export const SearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  
  gap: 15px;
  color: #000;

  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
`;

export const SearchItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
    &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SearchLink = styled(Link)`
   font-size: 20px;
  color: #000;
  transition: all 0.3s ease;
  text-decoration: none;
  
  cursor: pointer;

  &:hover,
  &:focus {
    color: #eb9486;
  }
`;