import React from 'react'

export default function Profile({user}) {
   
  return (
    <>
      <div className="place-items-center flex flex-row items-center justify-center">
        {user.photoURL ? <img
          src={user.photoURL}
          onError={(e) => { e.target.onerror = null; e.target.src = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" }}
          alt="Avatar"
          className="profimg shadow rounded-full w-10 h-10   border-none"
        /> : <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Avatar"
          className="profimg shadow rounded-full w-10 h-10  align-middle border-none mr-3"
        />}
        <span className="text-sm text-gray-400 font-semibold pl-2" > {user.displayName}</span>

      </div>
    </>
    

  );
}
