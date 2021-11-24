import styled from 'styled-components';
import { flexColumn } from '../../constants';
import mediaQuery from '../../hooks/mediaQuery';
import { Paper } from '../../components';

export const DibsPageWrapper = styled.div`
  width: 100%;
  padding: 4rem 16rem 20rem 16rem;
  background-color: #f9fbfc;
  ${flexColumn};
  ${mediaQuery({ padding: '2rem 3rem 24rem 3rem' })}
`;

export const ContentsWrapper = styled(Paper)`
    width:100%;
    height:auto;
    ${flexColumn};
    margin-top:5rem;
    padding:4rem 6rem;
    ${mediaQuery({"box-shadow":"none", "background-color":"inherit", "padding":"0", "align-items":"center"})}
`