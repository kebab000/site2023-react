#react.js로 사이트 만들기

<img src="https://raw.githubusercontent.com/kebab000/site2023-react/main/src/assets/images/intro/p01.png" />
<br><br>
 
- 이 사이트는 React를 기반으로 만든 사이트로 6개월간 같이 공부한 사람들의 포트폴리오를 모아두었습니다.
- 또한 fetch를 이용해 다양한API(Youtube API, Unsplash API, Movie API 등등)의 정보를 받아오는 방법과 React Hook을 사용해 상태를 관리하는 방법을 학습하였습니다.
<br><br>

- Live Demo : https://2023portfoliosite-react.netlify.app/

## 사용 스택 
- React: JavaScript 라이브러리로 사용자 인터페이스를 구축하기 위해 사용됩니다.
- react-router-dom: React 애플리케이션의 클라이언트 사이드 라우팅을 관리하는 라이브러리입니다.
- Route: react-router-dom에서 제공하는 라우터 구성 요소 중 하나로, 경로에 따라 특정 컴포넌트를 렌더링합니다.
- Routes: react-router-dom에서 제공하는 라우터 구성 요소로, 여러 Route를 그룹화하고, 라우팅 구성을 선언적으로 표현할 수 있도록 도와줍니다.
- fetch: 네트워크 요청을 보내기 위해 사용되는 자바스크립트 함수로, 비동기적으로 데이터를 가져오기 위해 사용됩니다. 해당 코드에서는 영화 데이터를 API로부터 가져오는데 사용되었습니다.
<br><br>
- useState: React 훅 중 하나로, 함수형 컴포넌트에서 상태(state)를 사용할 수 있게 해줍니다. 해당 코드에서는 영화 데이터를 상태로 관리하기 위해 사용되었습니다.
- useEffect: React 훅 중 하나로, 컴포넌트의 렌더링 이후에 실행되는 사이드 이펙트를 처리할 수 있도록 도와줍니다. 해당 코드에서는 초기 렌더링 시에 API를 호출하여 영화 데이터를 가져오는데 사용되었습니다.
- useRef: React 훅 중 하나로, 함수형 컴포넌트에서 DOM 요소에 접근하기 위해 사용됩니다. 해당 코드에서는 검색어 입력란(input 요소)에 접근하기 위해 사용되었습니다.
<br><br>

## 구현 내역

- swiper를 활용한 이미지 슬라이드
- router기능을 활용한 페이지
- 탭 메뉴로 구성된 시대별 유명 작품
- Youtube 검색, 태그 기능
- Unsplash 랜덤 이미지 슬라이드, 검색, 태그 기능
- Movie 이미지 슬라이드, 검색, 태그 기능
<br>