import styled from 'styled-components';

export const ConteinerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  background-color: #e84a5f;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #c23848;
  }
`;
