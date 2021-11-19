import styled from 'styled-components';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

export const CarouselContainer = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  overflow: hidden;
  position: relative;
`;

export const CarouselWrapper = styled.div`
  display: flex;
`;

export const CarouselImg = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
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
