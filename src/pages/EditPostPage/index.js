import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CustomDropDown } from '../../components';
import {
  EditPostFile,
  EditPostMiddleArea,
  EditPostRegion,
  EditPostTitle,
  EditPostContent,
} from '../../components';
import * as S from './style';
import { Link, useParams } from 'react-router-dom';
import { AreaOptions, SKILL_ID } from '../../constants';
import { editPost } from '../../modules/post';
import { configure } from '@testing-library/react';

const EditPostPage = () => {
  const { id } = useParams();
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
  const [kinds, setKinds] = useState();
  const [teamId, setTeamId] = useState();
  const [teamHead, setTeamHead] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const responsePost = await axios.get(`post/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setTitle(responsePost.data.title);
      setMeeting(responsePost.data.meeting);
      setHeadCount(responsePost.data.headcount);
      setRegion(responsePost.data.region);
      setContent(responsePost.data.content);
      setFile(responsePost.data.files[0]);
      const array = responsePost.data.postSkills.map(v => {
        return v;
      });
      setDropDownOptions(array);
      setKinds(responsePost.data.kinds);
      setTeamId(responsePost.data.teamId);

      const responseSkill = await axios.get('/skills');
      setSkillName(responseSkill.data.skills.map(e => e.name));

      const teamAPI = await axios.get(`/team/${responsePost.data.teamId}/teamUsers`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setTeamHead(teamAPI.data.length);
    };
    fetchData();
  }, []);

  // useCallback ver
  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      if (teamHead > parseInt(headCount)) {
        alert('????????? ???????????? ?????? ????????? ??? ????????????.');
        return;
      }
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
      if (file) {
        formData.append('files', file);
      }
      formData.append('postInfo', new Blob([JSON.stringify(data)], { type: 'application/json' }));
      const confirm = window.confirm('????????? ????????? ?????????????????????????');
      if (confirm) {
        dispatch(editPost({ id, formData }));
        alert('????????? ?????????????????????');
        window.location.replace(`/post/${id}`);
      }
    },
    [title, content, headCount, meeting, region, dropDownOptions, customOptions],
  );

  return (
    <>
      <S.AllWrapper>
        <S.WrittingInnerForm onSubmit={onSubmitHandler}>
          {/* ?????? */}
          <EditPostTitle title={title} setTitle={setTitle} />

          {/* ?????? ?????? */}
          <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
            ?????? ??????
          </S.MainTitle>

          <CustomDropDown
            dropDownOptions={dropDownOptions}
            setDropDownOptions={setDropDownOptions}
            customOptions={customOptions}
            setCustomOptions={setCustomOptions}
            style={{ width: '100%' }}
            options={skillName}
          />

          {/* ???????????? ??? ???????????? */}
          {meeting && (
            <EditPostMiddleArea
              meeting={meeting}
              setMeeting={setMeeting}
              headCount={headCount}
              setHeadCount={setHeadCount}
              isScout={isScout}
              teamId={teamId}
            />
          )}

          {/* ?????? */}
          <EditPostRegion region={region} setRegion={setRegion} AreaOptions={AreaOptions} />

          {/* ???????????? */}
          <EditPostFile file={file} setFile={setFile} />

          <EditPostContent content={content} setContent={setContent} />

          <S.BtnWrapper>
            <S.BtnLeft>
              <Link to="/">??????</Link>
            </S.BtnLeft>
            <S.BtnRight type="submit">????????????</S.BtnRight>
          </S.BtnWrapper>
        </S.WrittingInnerForm>
      </S.AllWrapper>
    </>
  );
};

export default EditPostPage;
