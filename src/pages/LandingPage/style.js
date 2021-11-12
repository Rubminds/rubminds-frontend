import styled from 'styled-components'
import { flexCenter,flexColumn } from '../../constants'

export const LandingWrapper = styled.div`
    ${flexColumn};
    position:relative;
`

export const LandingDetailWrapper = styled.div`
    width:100%;
    padding:140px 70px;
    ${flexColumn};
`

export const TitleWrapper = styled.div`
    width:100%;
    ${flexCenter};
    position:relative;
`

export const DetailTitle = styled.label`
    font-size:30px;
`
export const DetailShowAll = styled.div`
position:absolute;
right:30%;
`