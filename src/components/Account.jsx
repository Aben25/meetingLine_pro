import React from 'react'
import Profile from './Profile';
import { useContext } from 'react';
import { MeetingContext } from "../App";
import { useAuth } from "../hooks/useAuth";

export default function Account() {
  const {logout} =useAuth()
 const { meeting, user } = useContext(MeetingContext);
  return (
    <>
      <div class="flex">
        <Profile user={user} />
      </div>
      <div class="flex">
        <button
        onClick={logout}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Logout
        </button>
      </div>
    </>
  )
}