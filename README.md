# Rubminds Project

---
<img width="300" alt="Rubminds" src="https://user-images.githubusercontent.com/63600953/153740861-373b4d56-9000-4ea3-bc53-e737587f8187.PNG">

### 목차
1. Project 진행 기간 및 참고 문서
2. Front-End 개발 참여자
3. Rubminds 기획 의도
4. Rubminds 란?
5. Product Design
6. Front-End 역할 분담 및 개발 기여분야
7. Front-End Skill Stack
8. Git Convention


### Project 진행 기간 및 참고 문서

---
* 진행 기간 : 2021.10 ~ 2022.2 ( 4개월 + 추가 1개월 )
  * 10월 : 기획 및 Product Design
  * 11월 : Product Design에 따른 UI 개발
  * 12월 : UI 개발에 맞게, API 연결 작업
  * 1월 : UI 개발에 맞게, API 연결 작업 및 리팩토링
  * 2월 : 쪽지 개발 기능 추가 (한윤석님이 개발 진행)
  

* 매주 주 2회 종로 스터디룸에서 대면 스터디 진행 </br>
  `=>` 코로나 상황에 유연하게 대처하여 온라인 스터디 병행


* 참고 페이지 
  * [Rubminds Project Notion Page](https://www.notion.so/Rubminds-75134c48b3de409fa067247430f1e6e3)
  * [Rubminds Back-End Repository](https://github.com/Rubminds/rubminds-backend)
  * [Rubminds API Document](https://dev.rubminds.site/docs/index.html)  
  


### 👩‍💻 Front-End 개발 참여자

---

  | [<img src="https://avatars.githubusercontent.com/u/28249948?v=4" width="100">](https://github.com/hanyoonseok)| [<img src="https://avatars.githubusercontent.com/u/63600953?v=4" width="100">](https://github.com/colo1211) |
  | :-----------------------------------: | :---------------------------------------: |
  |[한윤석](https://github.com/hanyoonseok) (Front-Leader)|[김경원](https://github.com/colo1211) (팀장, Prodect-Design, Front-Sub)|



### Rubminds 기획 의도 

---
컴퓨터공학을 전공하는 학생들, 혹은 주니어 개발자들은 본인의 실력을 성장시키기 위해서 다양한 방법으로 개별적인 학습을 진행하고 있습니다. </br></br>
가장 실력을 성장시킬 수 있는 빠른 방안은 다양한 포지션에 있는 개발자들과 협업 및 프로젝트를 진행하는 것이 좋은 방안이라고 생각합니다. </br></br>
저희 또한 프로젝트 팀원을 구하기 위해서 많은 시간을 할애해야 했고 이러한 과정에서 발생하는 불편한 사안들을 개선하여 프로젝트 팀원을 구할 수 있는 플랫폼을 기획하게 되었습니다. </br></br>

### Rubminds 란?

---
1. 기존 프로젝트를 구하는 게시판 방식을 넘어, `프로젝트 이후 팀원을 평가`할 수 있습니다.  
- 협업을 진행하기 위해 팀원을 구할 수 있을 뿐만 아니라, 협업이 끝난 이후에 팀원들을 평가할 수 있고 이 평가 수치는 다른 유저들에게도 공개되어 신뢰할 만한 
팀원들을 구할 수 있도록 도움을 줍니다. </br></br>

2. `모집 유형을 구체화` 하여 본인에게 필요한 모임을 만들 수 있습니다.  
- 협업의 유형은 총 3가지로 나누었습니다. 
  1. `스터디 (n명)` : 주로 개인적인 공부를 진행하기 어려울 때 팀원을 구하는 방식입니다. 
  2. `스카웃 (1명)` : 본인이 하고 싶은 프로젝트를 올리면 다른 프로젝트를 위해 새로운 인원을 모집하고 있는 팀장이 이들에게 접근하여 스카웃 할 수 있습니다.  
  3. `프로젝트 (n명)` : 본인이 하고 싶은 프로젝트를 올리면 다른 사람들이 지원을 하는 방식입니다.
  
💡 스터디와 프로젝트는 팀원을 구하는 로직은 동일합니다.

3. 해당 게시물에 관심이 있는 사람들이 모두 공개적인 채팅을 사용함으로써 방장 또는 다른 유저와 대화를 할 수 있는 창구를 마련하였습니다. 
- 해당 게시물에 관심이 있는 사람들은 `모집자와 채팅하기` 라는 버튼을 클릭하면 본인의 채팅 방에 해당 게시물에 대한 대화방이 추가됩니다. 
채팅방은 방장과 1:1 대화가 아닌, 해당 게시물에 관심이 많은 여러 사람들과 대화를 할 수 있는 창구이므로, 다양한 사람들과 대화를 통해서 팀장은 이들 중, 유저를 선택하여 
  프로젝트에 초대를 할 수 있습니다. 만약, 유저는 방장이 보낸 초대를 수락하면 게시글에는 모집인원이 +1 됩니다. 
  

### Product Design 

---
💻 [PC Version](https://xd.adobe.com/view/e188c4b5-0a45-431f-bb9c-1daacf8e3e98-b4db/?fullscreen) </br>
📱 [Mobile Version](https://xd.adobe.com/view/1ba0c7e2-c8f8-4e8d-80fc-4ed30cbd85af-4ef3/)


### Front-End 역할 분담 및 개발 기여분야

---
#### 한윤석 (Front-Leader)
`UI제작`
- 랜딩페이지
- 헤더 바
- 게시글 상세 페이지
- 유저페이지
- 프로젝트 상세 페이지
- 팀원 평가 페이지
- 쪽지
- 찜목록 페이지
- 기타 재사용 컴포넌트(캐루셀, 드롬다운, 포스트카드)

`기능 개발`
- 회원 정보 조회
- 게시글 상세 조회
- 게시글 목록 조회 (+필터링)
- 게시글 찜목록 조회
- 게시글 찜 생성 및 삭제
- 완료게시글 작성
- 게시글 상태 변경
- 회원 프로젝트 현황 조회
- 게시글 삭제
- 팀원 초대 수락
- 팀원 목록 조회
- 팀원 평가
- 팀원 추방
- 쪽지 보내기
- 쪽지 리스트 조회
- 쪽지 게시물 조회
- 게시글 파일 핸들링
- 팀원 평가도를 별로 시각화

#### 김경원 (팀장, Front-Sub, Product Design)

`Product Design`
- Adobe XD를 활용한 모바일 및 PC View Product Design </br> (진행기간 2주)

`UI 개발` (PC ver , Mobile ver `=>` 반응형)
- 소셜 로그인 페이지 
- 소셜 로그인 이후 회원가입 페이지
- 회원 정보 수정 페이지 
- 글 생성 페이지 
- 글 업데이트 페이지

`기능 개발`
* 로그인 ( User / Social LogIn )
  - 소셜 로그인을 위한 Back-End 에서 전달해준 URL 로 Redirect
  - Redirect 를 통해 얻은 정보를 Login Process 컴포넌트에서 가입이 되어 있다면 accessToken을 LocalStorage에 담기
      * 가입이 되어 있다면 CallBack URL을 통해 얻은 User 정보를 Redux stare에 me 객체에 저장
  - Redirect 를 통해 얻은 정보를 Login Process 컴포넌트에서 가입이 되어 있지 않다면 accessToken을 LocalStorage에 담고, 회원가입 페이지로 이동 시키기

* 회원가입 ( User / SignUp )
  - 회원가입 페이지에서 avatar(프로필 사진) / 닉네임 / 직업 / 기술스택 / 자기소개 등의 정보를 받아서 서버에 요청을 보내 회원가입 기능 구현
    * avartar 자료는 img(png, jpeg, jpg, bmp, gif, svg) 확장자만 받을 수 있도록 제한  
    * avartar 는 유저가 사진을 올리면 바로 확인할 수 있도록 fileReader Web API를 활용 
    * 미리보기를 통해 얻은 avartar(img)를 유저가 삭제하고 싶다면 해당 사진을 다시 클릭하게끔 구현
    * 기술스택은 팀원 한윤석이 개발한 SkillComponent를 활용하여 사용
    

  - 닉네임 중복 체크 API를 연결하여 기존에 있는 닉네임이 아닌지 확인
    * 만약 기존에 있는 닉네임이라면 폼 데이터를 제출해도 막힘
    * 기존에 없는 닉네임이라면 승인 후, 닉네임을 입력하는 input 칸이 작성 못하게 변경됨
  
* 유저 정보 수정 페이지 (User / Update)
  * user 데이터를 읽어와서 기존에 입력했었던 유저의 정보를 가져와서 Form에 띄움
  * 기존의 정보에서 수정한 정보들을 다시 API 로 전송
  * 미리보기를 통해 얻은 avartar(img)를 유저가 삭제하고 싶다면 해당 사진을 다시 클릭하게끔 구현
  

* 글 생성 페이지 (Post / Create) 
  * 모집 유형에 따른 글 유형을 선택할 수 있게 설정
  * 제목 / 기술스택 / 회의환경 / 모집인원 / 지역 / 참고자료 / 모집내용 등의 내용을 받아, 백엔드 API 에 연결하여 글을 생성하면 글 목록에 추가
  * 기술스택은 한윤석님이 개발한 컴포넌트를 재활용

  
* 글 수정 페이지 (Post / Update)
  * 모집 유형을 수정할 수 없게 설정
  * post 데이터를 읽어와서 기존에 입력했었던 글의 정보를 가져와서 Form에 띄움 
  * 기존에 모집했던 인원보다 적은 인원을 제출하게 되면 경고창을 띄우고 이를 막음

  
* 로그아웃 Process (User / LogOut)
  * Back-End에서 발급한 accessToken의 유효시간은 1시간이다. 해당 토큰이 기간이 만료된다면 API에 요청할 때 모든 API 가 작동하지 않게된다. 
  * 따라서, 1시간이 지나면 자동으로 LogOut되도록 모든 컴포넌트들의 가장 부모 컴포넌트인 App.js 파일에서 setTimeout을 활용하여 1시간이 지나면 자동으로 로그아웃 되도록
  설정 
    * 자동으로 로그아웃 되는 로직은 리덕스에서 me 객체를 null로 만들고, API 에 로그아웃요청을 보내는 방식을 택함


### Front-End Skill Stack

---
**Product Design Tool**
- Adobe XD

**IDE**
- VSC

**Framework**
- React (Functional Component)
- React Hooks

**Routing**
- React-router-dom

**Social Login**
- Google Login API
- Kakao Login API

**State 관리 툴**
- Redux
- Redux Saga 
- Redux Persist 
- react-redux
- redux-devtools-extension
- immer

**Request Library**
- Axios

**Styling**
- Styled-Components
- react-icons


### 💻 Git Convention

---

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmJ7X1%2FbtqNIFmYqnq%2FA5umcZufzgkAKeepJVTpm0%2Ftfile.svg)

#### 1. main(master) branch <br>

: 배포를 위한 branch

#### 2. develop branch <br>

- feature 들을 개발한 이후 PR 요청 이후 merge 되면 다음 branch에서 pull을 받기 위한 branch
- 항상 develop branch 는 최신 버전으로 유지

#### 3. feat branch <br>

: 하나의 기능을 개발하기 위한 branch

`feat/number` 을 만들기 위한 방법 : `issue를 활용`


#### 💻 커밋메시지

---
| 타입 | 설명                                 |
| --------- | ------------------------------------ |
| feat | 새로운 기능 추가 (중요한 기능 개발 할 때 마다) |
| chore | 빌드 업무 수정, 패키지 매니저 수정 (잡다한 것, 의미없는 것..?) |
| fix | 버그 수정 |
| style | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| refactor | 코드 리팩토링 |
| design | css등 UI 변경  |
| comment | 주석 추가, 변경|
| docs | 문서 수정 ex) README.md |
| test | 테스트 추가 |
| rename | 파일 or 폴더명 수정하거나 옮기는 작업만 수행할 경우 |
| remove | 파일 삭제만 수행 |