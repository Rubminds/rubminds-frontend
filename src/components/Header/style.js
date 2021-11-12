import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
  position: fixed;
  top: 0;
  background-color: inherit;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index:9999;
  padding:0 70px;
`;

export const HeaderContent = styled.label`
  font-size: 26px;
  color: #ffffff;
  font-weight: bold;
`;
