import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

//App() 함수의 리턴 문 안에 html 태그(JSX)를 작성하면
//해당 내용이 화면에 출력
//return 안의 내용은 반드시 하나의 태그에 감싸여 있어야 한다
//그래서 의미없는 태그로 모든 내용을 감싸는 것은 불편하기 때문에
//하나의 기능을 제공! : <> (아무것도 없는 태그)
function App() {
  const name = '홍길동';
  const age = 20;

  return (
    <>
      <div>
        헤더 {name}
      </div>
      <MainContent name={name} age={age}/>
      <Footer />
    </>
  );
}

//본문 영역 컴포넌트
function MainContent(props){
  return (
    <div>
      본문 영역 {props.name} {props.age}
    </div>
  );
}

export default App;
