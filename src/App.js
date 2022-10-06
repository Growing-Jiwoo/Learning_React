import { useState } from 'react';
import './App.css';

function App() {

  let post = '부산 우동 맛집';
  let [제목1] = useState(['맛있는 우동', '맛없는 우동', '나쁘지않은 우동']);


  let [logo] = useState('React Blog');

  return (
    <div className="App">
      <div className="black-nav"> 
        <h4>{logo}</h4>
      </div>
      <h3 style={{color:'black', fontSize : '56px'}}>{post}</h3>

      <div className='list'>
        <h4>글 제목, {제목1[0]} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>글 제목, {제목1[1]} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>글 제목,123 {제목1[2]} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
  
}

export default App;
