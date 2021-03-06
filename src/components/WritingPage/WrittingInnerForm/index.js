import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import * as S from './style';
import { Link } from 'react-router-dom';

import {
  WriteKinds,
  WriteTitle,
  WriteMiddleArea,
  WriteRegion,
  WriteFile,
  WriteContent,
} from '../../../components';

import { CustomDropDown } from '../../../components';
import { AreaOptions, SKILL_ID } from '../../../constants';
import { createPost } from '../../../modules/post';

const WrittingInnerForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState('');
  const [headCount, setHeadCount] = useState(null);
  const [kinds, setKinds] = useState('STUDY');
  const [meeting, setMeeting] = useState(null);
  const [region, setRegion] = useState('서울특별시');
  const [file, setFile] = useState(null);
  const [skillName, setSkillName] = useState([]);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [customOptions, setCustomOptions] = useState([]);
  const [btnColor, setBtnColor] = useState(['#FBEAFF', 'white', 'white']);
  const [isScout, setIsScout] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/skills');
      setSkillName(result.data.skills.map(e => e.name));
    };
    fetchData();
  }, []);

  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();

      const data = {
        title: title,
        content: content,
        headcount: headCount != null ? parseInt(headCount) : null,
        kinds: kinds,
        meeting: meeting,
        region: region,
        skillIds: dropDownOptions.map(option => SKILL_ID[option]),
        customSkillName: customOptions,
      };

      const formData = new FormData();

      if (file) formData.append('files', file);
      

      formData.append(
        'postInfo',
        new Blob([JSON.stringify(data)], { type: 'application/json' })
      );

      dispatch(createPost(formData));
      alert("게시글이 등록되었습니다.")
      window.location.replace(`/`);
    },
    [
      title,
      content,
      headCount,
      kinds,
      meeting,
      region,
      dropDownOptions,
      customOptions,
      file,
      dispatch,
    ]
  );

  return (
    <S.WrittingInnerForm onSubmit={onSubmitHandler}>
      {/* 모집 유형 */}
      <WriteKinds
        kinds={kinds}
        setKinds={setKinds}
        setIsScout={setIsScout}
        btnColor={btnColor}
        setBtnColor={setBtnColor}
      />

      {/* 제목 */}
      <WriteTitle title={title} setTitle={setTitle} />

      {/* 기술 스택 */}
      <S.SectionTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
        기술 스택
      </S.SectionTitle>

      <CustomDropDown
        dropDownOptions={dropDownOptions}
        setDropDownOptions={setDropDownOptions}
        customOptions={customOptions}
        setCustomOptions={setCustomOptions}
        style={{ width: '100%' }}
        options={skillName}
      />

      {/* 회의환경 및 모집인원 */}
      <WriteMiddleArea
        meeting={meeting}
        setMeeting={setMeeting}
        headCount={headCount}
        setHeadCount={setHeadCount}
        isScout={isScout}
      />

      {/* 지역 */}
      <WriteRegion
        region={region}
        setRegion={setRegion}
        AreaOptions={AreaOptions}
      />

      {/* 참고자료 */}
      <WriteFile file={file} setFile={setFile} />

      <WriteContent content={content} setContent={setContent} />

      <S.BtnWrapper>
        <S.BtnLeft>
          <Link to="/">취소</Link>
        </S.BtnLeft>
        <S.BtnRight type="submit"> 등록하기 </S.BtnRight>
      </S.BtnWrapper>
    </S.WrittingInnerForm>
  );
};

export default WrittingInnerForm;
