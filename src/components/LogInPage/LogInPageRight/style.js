import styled from 'styled-components'
import mediaQuery from '../../../hooks/mediaQuery'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'

export const MainTitle = styled.div`
  font-size: ${props => (props.fontSize === 'big' ? '4rem' : '2.5rem')};
  color: ${props => props.color || 'black'};
  font-weight: ${props => props.fontWeight && props.fontWeight};
  margin: ${props =>
    props.margin === 'topBottom' ? '5rem 0 0 0' : '5rem 0 0 0'};
`

export const LogInPageRight = styled.div`
  position: fixed;
  top: -0;
  right: 0;
  z-index: 1;
  padding: 10rem 15rem 15rem 15rem;
  width: 50%;
  height: 100vh;
  background: white;
  ${mediaQuery({
    width: '100%',
    height: '50vh',
    top: 'auto',
    bottom: '0',
    padding: '5rem 5rem 5rem 5rem',
  })}
`

export const LogInPageInnerRight = styled.div`
  /* background: red; */
  margin-top: 10rem;
  display: flex;
  justify-content: space-around;
  ${mediaQuery({ 'margin-top': '7rem' })}

  @media all and (max-width : 1239px) {
    display: block;
  }
`

export const LogInBox = styled.div`
  border-radius: 3rem;
  width: 12.8rem;
  height: 12.8rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.16);
  text-align: center;
  background-color: ${props => props.bgColor || 'white'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 1239px) {
    width: 100%;
    margin: 5rem 0;
  }
`

export const Google = styled(FcGoogle)`
  font-size: 7.5rem;
`

export const KaKaoTalk = styled(RiKakaoTalkFill)`
  font-size: 7.5rem;
`

export const labelWrap = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  ${mediaQuery({ 'margin-top': '0rem' })}
  @media all and (max-width : 1239px) {
    display: none;
  }
`
