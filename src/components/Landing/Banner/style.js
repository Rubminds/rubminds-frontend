import styled from 'styled-components'
import { flexCenter,flexColumn } from '../../../constants'
export const LandingBanner = styled.div`
    height:560px;
    width:100%;
    background:linear-gradient(to right, #998CF8, #F383DF);
    padding-top: 90px;
    ${flexCenter};
`

export const BannerTextBox = styled.div`
    ${flexColumn};
    align-items:center;
    padding:0 60px;
`

export const BannerText = styled.label`
    font-size:${(props) => props.fontSize && props.fontSize};
    color:#ffffff;
    font-weight:bold;
`

export const RecruitBtn = styled.button`
    margin-top:100px;
    border-radius:50px;
    background-color:#CDF6E8;
    border:none;
    width:200px;
    height:80px;
    font-size:30px;
    font-weight:bold;
`