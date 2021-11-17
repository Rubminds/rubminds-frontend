import styled from 'styled-components'
import theme from '../../common/theme'
import { flexCenter } from '../../constants'




export const LogInPageLeft = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  width : 50%;
  height: 100vh;
  padding: 350px 150px 270px 150px;
  text-align: center;
  background: linear-gradient(
    to right,
    ${theme.colors.gradientLeft},
    ${theme.colors.gradientRight}
  );
`
export const MainTitle = styled.div`
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`

export const LogInPageRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 150px 150px 150px 150px;
  width : 50%;
  height: 100vh;
  background-color: white;
`

export const LogInPageInnerRight = styled.div`
  margin-top: 100px;
  ${flexCenter}
  justify-content: space-around;
`

export const LogInBox = styled.div`
  border-radius: 30px;
  width: 170px;
  height: 170px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.16);
  text-align: center;
  padding-top: 7.5%;
  cursor: pointer;
`

export const labelWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`

export const loginLabel = styled.div`
  font-size: 30px;
`