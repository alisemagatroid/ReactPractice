import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {

  let posts = '강남 고기 맛집';
  
  let [글제목, 글제목변경] = useState(['하츠네미쿠 이뻐', '하트네미쿠 귀엽지', '하츠네미쿠 아름다워']); //변수 대신 쓸 수 있는 데이터 저장공간
  //왜 쓸까: 새로 고침 없이 재 랜더링이 가능하기 때문 즉, 변경이 자주되는 요소들은 모두 useState로 만들기
  let [따봉, 따봉변경] = useState(0);

  //따봉변경(10); state변수는 상수를 이용해야 제대로 작동된다

  function 제목변경() {
    // var newData = 글제목; //이건 값 공유
    var newData = [...글제목]; //deepcopy 하는 방법 1. copy본 만들기 2. copy본의 바꿀 state 변수 데이터 바꾸기 3. state변경 함수에 집어넣기 
    newData[0] = '하춘회미쿠 이뻐';
    글제목변경( newData );
  }

  function getHun() {
    return 100;
  }

  function plusOne(){
    return 
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div style = { {color : '#483D8B', fontSize : '30px', margin :'auto', fontWeight : '800'} }>블로그 이고 싶은 것</div>  
      </div>
      <button onClick={ 제목변경 }>Tlqkf<img src={logo} /></button>

      <div className='list'>
      <h3> {글제목[0]} <span onClick={() => {따봉변경(따봉 + 1)}}>👌{따봉}</span></h3>
      <p>6월 11일</p>
      <hr/>
      </div>   

      <div className='list'>
      <h3> {글제목[1]}</h3>
      <p>6월 11일</p>
      <hr/>
      </div>  

      <div className='list'>
      <h3> {글제목[2]}</h3>
      <p>6월 11일</p>
      <hr/>
      </div>  
        
    </div>
  );
}

export default App;
