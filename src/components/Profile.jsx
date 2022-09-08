import React from 'react'

export default function Profile({user}) {
   
  return (
    <div className="grid grid-cols-2 border-2 p-2 radius-4 rounded-lg	">
      <div className="">
        <img
          src="https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png"
          alt="Avatar"
          className=" shadow rounded-full w-10 h-10  align-middle border-none mr-3"
        />
      </div>
      <div className="inline-block align-bottom">
        <p className="text-muted align-middle mt-2">{user.displayName}</p>
      </div>
    </div>
  );
}
