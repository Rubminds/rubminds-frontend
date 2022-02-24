import React, { useCallback } from 'react';
import * as S from '../WrittingInnerForm/style';

const Region = ({ region, setRegion, AreaOptions }) => {
  const onRegionChange = useCallback(
    e => {
      setRegion(e.target.value);
    },
    [region]
  );
  return (
    <>
      <S.SectionTitle>
        지역
      </S.SectionTitle>
      <S.AreaSelect
        name="region"
        onChange={onRegionChange}
        required
      >
        {AreaOptions.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </S.AreaSelect>
    </>
  );
};

export default Region;
