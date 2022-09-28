import React from "react";
import Profile from "./Profile";
import { useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { addmeeting } from "../utils";
import { MeetingContext } from "./AuthenticatedApp";
import { useNavigate } from "react-router-dom";
export default function Account() {
  const [title, setTitle] = React.useState("");
  const [number, setNumber] = React.useState(20)

  const { meeting, user } = useContext(MeetingContext);
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="flex">
        <Profile user={user} />
      </div>
      <div className="flex">
        <button
        onClick={logout}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Logout
        </button>
      </div> */}
      <div className="flex">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Weekly Meeting"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Participant Limit{" "}
              </label>
              <input
                onChange={(e) => setNumber(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="Number"
                placeholder="20"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3 mt-3">
              <button
                onClick={() => { addmeeting(title, number, user.displayName); navigate("/") }}
                className="shadow bg-gray-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
                type="button"
              >
                Add Meeting
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
