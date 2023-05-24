import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieSection = styled.section`
   padding: 10px;
`;

export const LinkGoBack = styled(Link)`
    margin-bottom: 30px;
`;

export const MovieCard = styled.div`
    display: flex;
  outline: gray;
`;

export const CardListItem = styled.li`
   list-style-type: none;
`;

export const NavLins = styled.ul`
   display: flex;
  flex-direction: column;
`;

export const Poster = styled.img`
  height: 100%;
  width: 200px;
`;