import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const board_list = [
    {
      'boardNo' : 1,
      'title' : '1번 글',
      'content' : '1번 글 내용',
      'writer' : '김자바',
      'regDate' : '2024-02-01'
    },
    {
      'boardNo' : 2,
      'title' : '2번 글',
      'content' : '2번 글 내용',
      'writer' : '홍길동',
      'regDate' : '2024-02-05'
    },
    {
      'boardNo' : 3,
      'title' : '3번 글',
      'content' : '3번 글 내용',
      'writer' : '임꺽정',
      'regDate' : '2024-02-10'
    },
    {
      'boardNo' : 4,
      'title' : '4번 글',
      'content' : '4번 글 내용',
      'writer' : '유관순',
      'regDate' : '2024-02-15'
    },
    {
      'boardNo' : 5,
      'title' : '5번 글',
      'content' : '5번 글 내용',
      'writer' : '세종대왕',
      'regDate' : '2024-02-20'
    }
  ];

  let [isShow, setIsShow] = useState(false);
  let [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <div className="App">
      
      <div className='header'>
        게시글
      </div>

      <div>
        <table>
          <colgroup>
            <col width="10%"></col>
            <col width="*"></col>
            <col width="10%"></col>
            <col width="30%"></col>
          </colgroup>
          <thead>
            <tr>
              <td>글번호</td>
              <td>제목</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {
              board_list.map((board, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {board['boardNo']}
                    </td>
                    <td>
                      <span onClick={() => {
                        setSelectedBoard(board_list[i])
                        setIsShow(true)
                        }}>{board.title}</span>
                    </td>
                    <td>
                      {board['writer']}
                    </td>
                    <td>
                      {board.regDate}
                    </td>
                  </tr>
                )
                
              })
            }
          </tbody>
        </table>
      </div>
      <div>
        {
          isShow ? <Detail board={selectedBoard}/> : ''
        }
      </div>
    </div>
  );
}

function Detail(props){
  return (
    <table>
      <tr>
        글번호: {props.board.boardNo}
      </tr>
      <tr>
        제목: {props.board.title}
      </tr>
      <tr>
        내용: {props.board.content}
      </tr>
      <tr>
        작성자: {props.board.writer}
      </tr>
      <tr>
        작성일: {props.board.regDate}
      </tr>
    </table>
  )
}



export default App;
