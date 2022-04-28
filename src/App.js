// import logo from './logo.svg';
import './App.css';
// import Home from './Home';
// import Home2 from './Home2'
import Catering from './Catering';
// import Button from 'react-bootstrap/Button';
// import {Button} from 'react-bootstrap';

// import Table from 'react-bootstrap/Table';
// import image from 'react-bootstrap/Image';
// import Dropdown from 'react-bootstrap/Dropdown';

// import {Button, Table, CloseButton, Dropdown} from 'react-bootstrap' // 귀찮으니까 한번에 다 이렇게 import 해줄 수 있다.
//import BSTest1 from './BStest1';
// import BSTest2 from './BSTest2';

// react용 bootstrap 사용하기
// react용 bootstrap 설치
// 기본 설치 방식
// > yarn add react-bootstrap bootstrap

// CDN을 통해서 설치하는 방식
// index.html에 bootstrap 파일을 로딩(css, js)

// 주의 사항
// bootstrap.min.css를 index.js에 import해서 사용해야 함 
// CDN 방식으로 사용할 경우에는 index.js에 import를 생략

// import 'bootstrap/dist/css/bootstrap.min.css'; 이게 꼭 들어가야 됨

// react용 bootstrap 로드
// import Button from 'react-bootstrap/Button';
// import {Button} from 'react-bootstarp';

// 리액트용 부트스트랩 태그 사용
//<Button>부트스트랩 버튼</Button>
function App() {
  return (
    <div className="App">
      <br/>
       {/* <BSTest1/> */}
       {/* <BSTest2 /> */}
       {/* <Home/> */}
       {/* <Home2 /> */}
       <Catering/>
    </div>
  );
}

export default App;
