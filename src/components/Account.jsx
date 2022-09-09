import React from 'react'
import Profile from './Profile';
import { useContext } from 'react';
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { removeMeeting } from "../utils";
import { MeetingContext } from "./AuthenticatedApp";

export default function Account() {
  const {logout} =useAuth()
 const { meeting, user } = useContext(MeetingContext);
const domain = window.location.hostname
  let navigate = useNavigate();

  
  function handleClick(title) {
    navigate("../"+title);
  }

  const mymeeting = meeting.filter((meet) => meet.admin === user.displayName);
  console.log(mymeeting)

  return (
    <>
      {" "}
      <div className="flex">
        <Profile user={user} />
      </div>
      <div className="flex flex-2">
        <div className="flex flex-1">
          <button
            onClick={logout}
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-0 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Logout
          </button>
        </div>
        <Link to="/form">
          <div className="flex flex-1">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Creat Meeting
            </button>
          </div>
        </Link>
      </div>
      <div className="">
        {mymeeting.map((meet) => (
          <div key={meet.id} className=" container">
            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href={meeting.title}>
                <p className="mb-2 text-3 tracking-tight text-gray-900 dark:text-white">
                  {meet.title}
                </p>
              </a>

              <a
                onClick={(() => handleClick(meet.title))}
                className="mr-2 inline-flex items-center py-1 px-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Join{" "}
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                onClick={() => removeMeeting(meet.id)}
                href="#"
                className="inline-flex items-center py-1 px-2  text-sm text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Delete
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}