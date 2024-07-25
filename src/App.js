/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';




function App() {
 
 let[글제목,글제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let[modal,setModal] = useState(false);
  let[title,settitle] = useState(0);
  let [입력값,입력값변경] = useState('');
  let[에러메세지,에러메시지변경] = useState('');
  let[날짜시간목록 , set날짜시간목록] = useState([]);
  // let[글제목1,set글제목] = useState(['남자코트 추천'])
  
  let 글제목변경1 =()=>{
    let newTitles = [...글제목];
    newTitles[0] = '여자코트추천';
    글제목변경(newTitles);
  };
 
  const handleAddTitle = () => {
    let errorMessage = '';
  
    if (입력값.trim() === '') {
      errorMessage = '글을 입력하세요';
    } else {
      //현재 날짜와 시간 생성
      const 현재시간 = new Date();
      const 날짜시간문자열 = `${현재시간.getMonth()+1}월 ${현재시간.getDate()}일 발행`;
      
      // 글 추가 로직
      let copy = [...글제목];
      copy.unshift(입력값);
      글제목변경(copy);
  
      let likeCopy = [...따봉];
      likeCopy.unshift(0);
      따봉변경(likeCopy);

      //날짜 및 시간 목록에 추가
      let 날짜시간목록copy = [...날짜시간목록];
      날짜시간목록copy.unshift(날짜시간문자열);
      set날짜시간목록(날짜시간목록copy);
  
      입력값변경('');
    }
  
    // 에러 메시지 설정
    에러메시지변경(errorMessage);
  };

    [1,2,3].map(function(a){
      return '1233211'
    })
function 함수(){
  console.log(1);
}

  return (
<div className="App">
    <div className="black-nav"> 
    <h4>KREAM</h4>
    </div>
    <button onClick={()=>{
      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      글제목변경(copy);
      }} >글수정</button>

      <button onClick={()=>{
        let copy = [...글제목]
        copy.sort();
        console.log(copy == 글제목);
        글제목변경(copy);
      }}>가나다순정렬버튼</button>

    {/* <div className='list'>
      
      <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
      <p>2월 17일 발행</p>1
    </div>
    <div className='list'>
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p>
    </div>
    <div className='list'>
      <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>
      <p>2월 17일 발행</p>
    </div> */}
      {
        글제목.map(function(a,i){
          return (<div className='list' key={i}>
         <h4 onClick={()=>{setModal(!modal); settitle(i)}}>{글제목[i]} 
          <span onClick={(e)=>{
            
            let copy = [...따봉];
            copy[i] = copy[i]+1;
            따봉변경(copy)
            e.stopPropagation();
            }}>👍</span>

             <span onClick={(e)=>{
            let copy = [...따봉];
              copy[i] = copy[i]-1;
              따봉변경(copy)
              e.stopPropagation();
            }}>👎</span>{따봉[i]}
            </h4>

           
          <p>{날짜시간목록[i]}</p>
          <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1);
              글제목변경(copy);
            }}>삭제</button>
        </div>)
        })
      }
      
      <input onChange={(e)=>{입력값변경(e.target.value);}} value={입력값} ></input>
      <button onClick={handleAddTitle}>글등록</button>
      {에러메세지 && <p style={{color: 'red'}}>{에러메세지}</p>}
      
       {modal == true ? <Modal title={title} 글제목={글제목} 글제목변경1={글제목변경1}/> : null}
       <Mddal2></Mddal2>
    
    </div>
    
  );
}



function Modal(props){
  return(
    <div className='modal'>
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={props.글제목변경1}>글수정</button>
    </div>
  )
}

class Mddal2 extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕{this.state.age}
      <button onClick={()=>{
        this.setState({age : 21})
      }}>버튼</button>
      </div>
    )
  }
}


export default App;
