import styled from 'styled-components';
import { flexBetween, flexCenter, flexColumn } from '../../../constants';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 60rem;
  height: auto;
  padding: 4rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  ${flexColumn};
  align-items: center;
  border-radius: 5px;
`;

export const ModalLabel = styled.label`
  font-size: 2rem;
  line-height: 4rem;
  font-weight:bold;
  ${flexCenter};
`;

export const BtnsWrapper = styled.div`
    ${flexBetween};
    width:80%;
    margin-top:1rem;
`;

export const StyledButton = styled.button`
  border: none;
  width: 18rem;
  height: 6rem;
  font-size: 2rem;
  ${flexCenter};
  background-color: ${(props) => props.bgColor};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius:50px;
`;
