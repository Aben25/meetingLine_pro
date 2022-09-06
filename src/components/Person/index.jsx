import React from "react";
import { joindList, queueList, removeperson } from "../../utils";
import { MeetingContext } from "../../App";
import { useContext } from "react";

export default function Person({ name, id, queueList_bool, index }) {
  const { meeting, user } = useContext(MeetingContext);
  return (
    <div class="flex flex-row">
      <div class="basis-1/4">{name}</div>
      <div class="basis-2/4">{index}</div>
      {user.displayName === name ? (
        <button
          onClick={() =>
            queueList_bool ? removeperson(id, name) : queueList(id, name)
          }
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {queueList_bool ? "Hand Down" : "Raise Hand"}
        </button>
      ) : null}
    </div>
  );
}
