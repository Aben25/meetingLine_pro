import React from 'react'

export default function Profile({user}) {
   
  return (
    <div className="grid grid-cols-2 border-2 p-2 radius-4 rounded-lg	">
      <div className="">
        <img
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
          class="align-middle shadow rounded-full max-w-full h-10 align-middle border-none"
        />
      </div>
      <div className="inline-block align-bottom">
        <p className="text-muted align-middle mt-2">{user.displayName}</p>
      </div>
    </div>
  );
}
