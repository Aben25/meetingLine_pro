import React from "react";
import { joindList, queueList, removeperson } from "../../utils";
import { MeetingContext } from "../AuthenticatedApp";
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
   
    </div>
  );
}
