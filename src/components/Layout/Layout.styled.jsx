import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px 50px;

  display: flex;
  
  list-style: none;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  color: rgb(0, 0, 0);
  height: 100%;
  background: #d2b9e7;
  
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-left: 40px;
  padding-right: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  color: #663c7f;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 40px;
  }

  
  &:hover,
  &:focus {
    color: #392769;
    }
    &.active {
    color: #763337;
    }
`;