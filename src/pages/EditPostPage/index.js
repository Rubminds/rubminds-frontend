import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomDropDown } from '../../components';
import File from '../../components/EditPost/File';
import MiddleArea from '../../components/EditPost/MiddleArea';
import Region from '../../components/EditPost/Region';
import Title from '../../components/EditPost/Title';
import Content from '../../components/EditPost/Content';
import * as S from './style';
import { Link } from 'react-router-dom';
import { AreaOptions, SKILL_ID } from '../../constants';
import { editPost } from '../../modules/post';

const EditPostPage = () => {
  const { singlePost } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [headCount, setHeadCount] = useState(null);
  const [meeting, setMeeting] = useState(null);
  const [region, setRegion] = useState(null);
  const [file, setFile] = useState(null);
  const [skillName, setSkillName] = useState([]);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [customOptions, setCustomOptions] = useState([]);
  const [isScout, setIsScout] = useState(false);

  // 이미지 서버 전송용 데이터
  const [fileInfo, setFileInfo] = useState(null);
  // 이미지 미리보기 데이터
  const [attachment, setAttachment] = useState(null);

  useEffect(() => {
    console.log(singlePost.meeting);
    setTitle(singlePost.title);
    setMeeting(singlePost.meeting);
    setHeadCount(singlePost.headcount);
    setRegion(singlePost.region);
    setContent(singlePost.content);
    const array = singlePost.postSkills.map(v => {
      return v;
    });
    setDropDownOptions(array);

    const fetchData = async () => {
      const result = await axios.get('/skills');
      setSkillName(result.data.skills.map(e => e.name));
    };
    fetchData();
  }, []);

  // useCallback ver
  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      const data = {
        title: title,
        content: content,
        headcount: headCount != null ? parseInt(headCount) : null,
        kinds: singlePost.kinds,
        meeting: meeting,
        region: region,
        skillIds: dropDownOptions.map(option => SKILL_ID[option]),
        customSkillName: customOptions,
      };
      const formData = new FormData();
      if (file) {
        formData.append('files', file);
      }
      formData.append(
        'postInfo',
        new Blob([JSON.stringify(data)], { type: 'application/json' })
      );
      dispatch(editPost({ id: singlePost.id, formData }));
      window.location.replace(`/post/${singlePost.id}`);
    },
    [title, content, headCount, meeting, region, dropDownOptions, customOptions]
  );

  return (
    <>
      <S.AllWrapper>
        <S.WrittingInnerForm onSubmit={onSubmitHandler}>
          {/* 제목 */}
          <Title title={title} setTitle={setTitle} />

          {/* 기술 스택 */}
          <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
            기술 스택
          </S.MainTitle>

          <CustomDropDown
            dropDownOptions={dropDownOptions}
            setDropDownOptions={setDropDownOptions}
            customOptions={customOptions}
            setCustomOptions={setCustomOptions}
            style={{ width: '100%' }}
            options={skillName}
          />

          {/* 회의환경 및 모집인원 */}
          {meeting && (
            <MiddleArea
              meeting={meeting}
              setMeeting={setMeeting}
              headCount={headCount}
              setHeadCount={setHeadCount}
              isScout={isScout}
            />
          )}

          {/* 지역 */}
          <Region
            region={region}
            setRegion={setRegion}
            AreaOptions={AreaOptions}
          />

          {/* 참고자료 */}
          <File
            attachment={attachment}
            setAttachment={setAttachment}
            file={file}
            setFile={setFile}
            fileInfo={fileInfo}
            setFileInfo={setFileInfo}
          />

          <Content content={content} setContent={setContent} />

          <S.BtnWrapper>
            <S.BtnLeft>
              <Link to="/">취소</Link>
            </S.BtnLeft>
            <S.BtnRight onClick={onSubmitHandler}>수정하기</S.BtnRight>
          </S.BtnWrapper>
        </S.WrittingInnerForm>
      </S.AllWrapper>
    </>
  );
};

export default EditPostPage;
