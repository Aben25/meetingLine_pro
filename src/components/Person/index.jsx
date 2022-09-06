import React from "react";
import { joindList, queueList, removeperson } from "../../utils";
import { MeetingContext } from "../../App";
import { useContext } from "react";

export default function Person({ name, id, queueList_bool, index }) {
  const { meeting, user } = useContext(MeetingContext);
  return (
    <div className="border-solid border-2 border-gray-800 radius-2 p-2 rounded-md mb-3 max-w-sm	 ring-offset-2 ring-3">
      <div className="flex flex-row borderd text-center">
        <div
          className="basis-1/1.5 pr-2 "
        >
          {index}
        </div>
        <div className="basis-2/1 mr-5">{name}</div>
      </div>
      <div className="flex flex-row">
        {user.displayName === name ? (
          <button
            onClick={() =>
              queueList_bool ? removeperson(id, name) : queueList(id, name)
            }
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {queueList_bool ? "Hand Down" : "Raise Hand"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
