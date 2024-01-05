import React, { useState } from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';



const GusetbookPage = () => {
 
  const [commentPass, setCommentPass] = useState('');
  const [commentName, setCommentName] = useState('');
  const [commentWrite, setCommentWrite] = useState('');

  const handleCommentWrite = () => {
    console.log('Comment submitted:', {
      commentPass,
      commentName,
      commentWrite,
    });

    setCommentPass('');
    setCommentName('');
    setCommentWrite('');
  };

  // const [isDeleteVisible, setDeleteVisible] = useState(false);
  // const [isModifyVisible, setModifyVisible] = useState(false);
  // const [commentDeletePass, setCommentDeletePass] = useState('');
  // const [commentModifyPass, setCommentModifyPass] = useState('');
  // const [modifiedMessage, setModifiedMessage] = useState('');

  // const handleDeleteClick = () => {
  //   setDeleteVisible(true);
  // };

  // const handleModifyClick = () => {
  //   setModifyVisible(true);
  // };

  // const handleCancelDelete = () => {
  //   setDeleteVisible(false);
  // };

  // const handleCancelModify = () => {
  //   setModifyVisible(false);
  //   setModifiedMessage(''); // Reset the modified message when canceling modification
  // };

  // const handleDeleteConfirm = () => {
  //   // Add your logic here to handle the comment deletion
  //   console.log('Comment deleted');
  //   setDeleteVisible(false);
  // };

  // const handleModifyConfirm = () => {
  //   // Add your logic here to handle the comment modification
  //   console.log('Comment modified:', modifiedMessage);
  //   setModifyVisible(false);
  //   setModifiedMessage('');
  // };
  return (
    <Contents>
        <ContTitle title="GuestBook"/>
        <p className='cont__desc'>자유롭게 방명록을 남겨주세요</p>
        {/* 방명록 작성 */}
        <div class="guestbook__write container">
          <form>
            <legend className="blind">방명록 쓰기</legend>
            <label htmlFor="commentWrite"></label>
            <textarea
              id="commentWrite"
              name="commentWrite"
              rows="4"
              placeholder="방명록을 작성해주세요!"
              maxLength="255"
              required
              value={commentWrite}
              onChange={(e) => setCommentWrite(e.target.value)}
            />
            <label htmlFor="commentPass">비밀번호</label>
            <input
              type="password"
              id="commentPass"
              name="commentPass"
              placeholder="비밀번호"
              required
              value={commentPass}
              onChange={(e) => setCommentPass(e.target.value)}
            />
            <label htmlFor="commentName">이름</label>
            <input
              type="text"
              id="commentName"
              name="commentName"
              placeholder="이름"
              required
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
            />
            
            <button type="button" onClick={handleCommentWrite} className="commentWriteBtn">
              댓글쓰기
            </button>
          </form>
        </div>
        {/* 방명록 내용 */}
        {/* <div className='guestbook__view container'>
          <span className="nickname">익명</span>
          <span className="date">2023년12월26일</span>
          <p className="msg">잘만드셨네요</p>
          <div className="comment__delete" style={{ display: isDeleteVisible ? 'block' : 'none' }}>
            <label htmlFor="commentDeletePass" className="blind">
              비밀번호
            </label>
            <input
              type="password"
              id="commentDeletePass"
              name="commentDeletePass"
              placeholder="비밀번호"
              value={commentDeletePass}
              onChange={(e) => setCommentDeletePass(e.target.value)}
            />
            <button onClick={handleCancelDelete} id="commentDeleteCancel">
              취소
            </button>
            <button onClick={handleDeleteConfirm} id="commentDeleteButton">
              삭제
            </button>
          </div>
          <div className="comment__modify" style={{ display: isModifyVisible ? 'block' : 'none' }}>
            <label htmlFor="msg__modify" className="blind">
              수정 내용
            </label>
            <textarea
              name="msg__modify"
              id="msg__modify"
              cols="30"
              rows="4"
              placeholder="수정할 내용을 적어주세요!"
              value={modifiedMessage}
              onChange={(e) => setModifiedMessage(e.target.value)}
            ></textarea>
            <label htmlFor="commentModifyPass" className="blind">
              비밀번호
            </label>
            <input
              type="password"
              id="commentModifyPass"
              name="commentModifyPass"
              placeholder="비밀번호"
              value={commentModifyPass}
              onChange={(e) => setCommentModifyPass(e.target.value)}
            />
            <button onClick={handleCancelModify} id="commentModifyCancel">
              취소
            </button>
            <button onClick={handleModifyConfirm} id="commentModifyButton">
              수정
            </button>
          </div>
          <div className="del">
            <button onClick={handleDeleteClick} className="comment__del__del" >
              삭제
            </button>
            <button onClick={handleModifyClick} className="comment__del__mod">
              수정
            </button>
          </div>
        </div> */}
    </Contents>
  )
}

export default GusetbookPage