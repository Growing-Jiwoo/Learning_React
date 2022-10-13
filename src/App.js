// import './App.css';
// import State from "./components/State";

// function App() {

//   return (
//     <div>
//       <State />
//     </div>
//   );

// }

// export default App;

/* eslint-disable*/

import { Modal } from '@mui/material';
import { useState } from 'react';
import './App.css';

function ModalUI() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function App() {

  let [title, settitle] = useState('부산 우동 맛집');
  let [제목1, 제목1변경] = useState(['맛있는 우동', '맛없는 우동', '나쁘지않은 우동']);

  let [logo, setlogo] = useState('React Blog');

  let [like, setlike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function likeBtn(i) {
    let copy = [...like];
    copy[i] = like[i] + 1;
    setlike(copy);
  }

  function changeTitle() {
    settitle("서울 우동 맛집")
    seoulNoddles()
  }

  function seoulNoddles() {
    let copy = [...제목1];
    copy = ["맛있는 서울 우동", "맛없는 서울 우동", "나쁘지않은 서울 우동"];
    제목1변경(copy);
  }

  function arraySort() {
    let array_sort = [...제목1].sort()
    제목1변경(array_sort)
  }

  function modalViewControl() {
    if (modal == true) {
      setModal(false)
    }
    else {
      setModal(true)
    }
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <h3 style={{ color: 'black', fontSize: '56px' }} onClick={modalViewControl}>{title}</h3>

      <button style={{ marginBottom: "20px" }} onClick={changeTitle}>서울 우동 추천</button>
      <br></br>
      <button style={{ marginBottom: "20px" }} onClick={arraySort} >가나다순 정렬</button>

      {/* <div className='list'>
        <h4>글 제목, {제목1[0]} <span onClick={likeBtn}>/ 좋아요 👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>글 제목, {제목1[1]} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>글 제목, {제목1[2]} </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        제목1.map(function (value, index) {
          return (
            <div className='list' key={index}>
              <h4 onClick={modalViewControl}>{value}
                <span onClick={() => {likeBtn(index)}}> / 좋아요 👍</span> {like[index]}
                <p>2월 17일 발행</p>
              </h4>
            </div>
          )
        })
      }

      {
        modal == true ? <ModalUI /> : null
      }

    </div>
  );

}


export default App;