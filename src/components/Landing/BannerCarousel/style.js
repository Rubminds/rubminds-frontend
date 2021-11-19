import styled from 'styled-components';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import mediaQuery from '../../../hooks/mediaQuery';
export const CarouselContainer = styled.div`
  width: 36rem;
  height: 100%;
  overflow: hidden;
  position: relative;
  display:flex;
  align-items:center;
  ${mediaQuery({width:"280px", "margin-top":"5rem"})}
`;

export const CarouselWrapper = styled.div`
  display: flex;
`;

export const CarouselPrev = styled(GrFormPrevious)`
  border: none;
  position: absolute;
  top: 50%;
  left: 1%;
  font-size: 3rem;
  background-color: #fff;
  z-index: 10;
  cursor: pointer;
  border-radius: 50%;
`;
export const CarouselNext = styled(GrFormNext)`
  border: none;
  position: absolute;
  top: 50%;
  right: 1%;
  font-size: 3rem;
  background-color: #fff;
  z-index: 10;
  cursor: pointer;
  border-radius: 50%;
`;
