import React from 'react'

export default function Profile({user}) {
  console.log(user.photoURL)
   
  return (
    <div className="grid place-items-center">
        <img
          src={user.photoURL}
          alt="Avatar"
          className=" shadow rounded-full w-10 h-10  align-middle border-none mr-3"
        />
        <span className="text-sm text-gray-400 font-semibold"> {user.displayName}</span>
      </div>
  );
}
