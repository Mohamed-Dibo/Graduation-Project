import React, { useContext } from 'react';
import userImage from '../../../../assets/images/user-img.png';
import { SecondUserContext } from './../../../../context/SecondUser';

function MessagesUsers({ data }) {
  const { secondUserData, setSecondUserData } = useContext(SecondUserContext);
  return (
    <div
      className={`d-flex messages__secondUser px-3 ${
        data?.firstName === secondUserData?.firstName && 'active'
      }`}
      onClick={() => setSecondUserData(data)}>
      <div className='flex-shrink-0'>
        <figure className='messages__inboxBodyImage'>
          <img src={userImage} className='w-100 rounded-circle' alt='...' />
        </figure>
      </div>
      <div className='flex-grow-1 ms-3'>
        <h4 className='mb-0'>{data.firstName}</h4>
        <span>active now</span>
      </div>
    </div>
  );
}

export default MessagesUsers;