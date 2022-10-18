/* eslint-disable*/

import React, { useState } from 'react';
import './App.css';



function App() {

  let [title, settitle] = useState('부산 우동 맛집');
  let [제목1, 제목1변경] = useState(['맛있는 우동', '맛없는 우동', '나쁘지않은 우동']);

  let [logo, setlogo] = useState('React Blog');

  let [like, setlike] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [putindex, setputIndex] = useState(0)
  let [inputvalue, setInputValue] = useState('')

  function likeBtn(i) {
    let copy = [...like];
    copy[i] = like[i] + 1;
    console.log(copy)
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

  function modalViewControl(index) {
    setputIndex(index)
    if (modal == true) {
      setModal(false)
    }
    else {
      setModal(true)
    }
  }

  function createContent(input) {
    let add_array = [...제목1]
    add_array.push(input)
    제목1변경(add_array)

    let copy = [...like];
    copy.push(0)
    setlike(copy);
  }

  function deleteContent(value) {
    let delete_array = [...제목1]
    let filter_array = delete_array.filter((element) => element !== value);
    제목1변경(filter_array)
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

      {
        제목1.map(function (value, index) {
          return (
            <div className='list' key={index}>
              <h4 onClick={() => modalViewControl(index)}>{value}
                <span onClick={(e) => { e.stopPropagation(); likeBtn(index) }}> / 좋아요 👍</span> {like[index]}
                <button onClick={(e) => { e.stopPropagation(); deleteContent(value) }}> 글 삭제 하기</button>
                <p>2월 17일 발행</p>
              </h4>
            </div>
          )
        })
      }

      <input id="inputTag" onChange={(e) => { setInputValue(e.target.value) }}></input>
      <button onClick={() => { createContent(inputvalue); }}>글 생성</button>
      {
        modal == true ? <ModalUI title_rename={제목1변경} title={제목1[putindex]} color={'skyblue'} modal_title={제목1} content="HI" /> : null
      }
    <Modal2/>

    </div>
  );
}

function ModalUI(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>상세내용</p>
      <button onClick={() => props.title_rename(['수정된 맛있는 우동', '수정된 맛없는 우동', '수정된 나쁘지않은 우동'])}>글 수정 버튼</button>
    </div>
  )
}

class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Kim',
      age: 20
    }
  }
  render(){
    return( 
      <div>안녕 {this.state.name}
      <button onClick={() => {
        this.setState({name: "Park"})
      }}>수정</button>
      </div>

    )
  }
}

export default App;