import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { SKILL_ID } from '../../constants';
import { updateUser } from '../../modules/user';
import { DropDown } from '../../components';
import {
  EditPageAvatar,
  EditPageNickname,
  EditPageIntroduce,
} from '../../components';
import { SignUpJob } from '../../components';

const EditProfilePage = () => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [nicknameCheck, setnicknameCheck] = useState(false);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [nickname, setNickname] = useState(null);
  const [job, onChangeJob, setJob] = useInput('');
  const [introduce, onChangeIntroduce, setInroduce] = useInput('');
  const [fileInfo, setFileInfo] = useState(null);
  const [skillName, setSkillName] = useState([]);
  const [avatarChanged, setAvatarChanged] = useState(false);

  //   유저 정보 조회 API
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/user/${me.id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      });
      setNickname(result.data.nickname);
      setJob(result.data.job);
      // state에 배열을 비동기적으로 추가하는 방법
      const array = result.data.userSkills.map(v => {
        return v.name;
      });
      setDropDownOptions(array);
      setInroduce(result.data.introduce);
      setFileInfo(result.data.avatar);
    };
    fetchData();
  }, []);

  //   스킬 목록 조회 API
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/skills', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      });
      setSkillName(result.data.skills.map(e => e.name));
    };
    fetchData();
  }, []);

  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      if (nicknameCheck) {
        const data = {
          nickname: nickname,
          job: job,
          introduce: introduce,
          skillIds: dropDownOptions.map(option => SKILL_ID[option]),
          nicknameChanged: me.nickname === nickname ? false : true,
          avatarChanged: avatarChanged,
        };

        const formData = new FormData();
        if (fileInfo) {
          formData.append('avatar', fileInfo);
        }
        formData.append(
          'userInfo',
          new Blob([JSON.stringify(data)], { type: 'application/json' })
        );

        const submitConfirm = window.confirm('수정된 정보를 저장하시겠습니까?');
        if (submitConfirm) {
          dispatch(updateUser(formData));
          window.location.replace(`/userpage/${me.id}`);
        }
      } else {
        alert('닉네임 중복체크를 해주세요');
      }
    },
    [nickname, job, dropDownOptions, introduce, fileInfo, nicknameCheck]
  );

  return (
    <S.AllWrapper>
      <S.EditProfileWrapper>
        <S.MainTitle fontSize="5rem" fontWeight="bold">
          Edit Profile
        </S.MainTitle>

        <S.EditProfileInnerForm onSubmit={onSubmitHandler}>
          <EditPageAvatar
            setAvatarChanged={setAvatarChanged}
            fileInfo={fileInfo}
            setFileInfo={setFileInfo}
          />
          <EditPageNickname
            nickname={nickname}
            setNickname={setNickname}
            nicknameCheck={nicknameCheck}
            setnicknameCheck={setnicknameCheck}
            required
          />
          <SignUpJob job={job} setJob={setJob} />
          <S.SectionTitle>
            기술스택 ( 선택 )
          </S.SectionTitle>
          <DropDown
            dropDownOptions={dropDownOptions}
            setDropDownOptions={setDropDownOptions}
            style={{ width: '100%' }}
            options={skillName}
          ></DropDown>

          <EditPageIntroduce
            introduce={introduce}
            onChangeIntroduce={onChangeIntroduce}
            required
          />
          <S.SubmitBtn type="submit"> 수정 완료 </S.SubmitBtn>
          <S.Clear></S.Clear>
        </S.EditProfileInnerForm>
      </S.EditProfileWrapper>
    </S.AllWrapper>
  );
};

export default EditProfilePage;
