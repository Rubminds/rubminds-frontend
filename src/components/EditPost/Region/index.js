import React, { useCallback } from 'react';
import * as S from '../../../pages/EditPostPage/style';

const Region = ({ region, setRegion, AreaOptions }) => {
  const onRegionChange = useCallback(
    e => {
      setRegion(e.target.value);
    },
    [region]
  );
  return (
    <>
      <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
        지역
      </S.MainTitle>
      <S.AreaSelect name="region" onChange={onRegionChange} required>
        {AreaOptions.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </S.AreaSelect>
    </>
  );
};

export default Region;
