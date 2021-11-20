import React from 'react';
import userImage from '../../../../assets/images/user-img.png';
import './ChatUserHeader.scss';
import { useContext } from 'react';
import { SecondUserContext } from './../../../../context/SecondUser';

function ChatUserHeader() {
  const { secondUserData } = useContext(SecondUserContext);
  return (
    <div className='d-flex align-items-baseline'>
      {secondUserData && (
        <>
          <div className='flex-shrink-0'>
            <figure className='messages__chatHeaderImage'>
              <img src={userImage} className='w-100 rounded-circle' alt='...' />
            </figure>
          </div>

          <div className='flex-grow-1 ms-3'>
            <h4 className='mb-0'>{secondUserData?.firstName}</h4>
            <span className='online__status'>active now</span>
          </div>
        </>
      )}
    </div>
  );
}

export default ChatUserHeader;