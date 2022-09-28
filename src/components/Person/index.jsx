import React from "react";
import { joindList, queueList, removeperson } from "../../utils";
import { MeetingContext } from "../AuthenticatedApp";
import { useContext } from "react";
import { removequeues } from "../../utils";

export default function Person({
  name,
  id,
  queueList_bool,
  index,
  admin,
  adminUser,
  photo,
}) {
  const { meeting, user } = useContext(MeetingContext);

  // const thisuser = user.find((x) => name === user.displayName);

  return (
    <div className="border-solid border-2 border-gray-800 radius-2 p-2 rounded-md mb-3 max-w-sm	 ring-offset-2 ring-3">
      <div className="flex flex-row borderd text-center">
        <div className="basis-1/1.5 pr-2 ">{index}</div>
        <div className="fill-white basis-1/1.5 pr-2 "></div>

        <div className="basis-2/1 mr-5">{name}</div>
        <div className="basis-2/1 mr-5 muted">
          {adminUser === name ? (
            <p className="text-sky-400/25 text-xs mt-1 border pr-1 pl-1 border-collapse border-r-1 rounded border-gray-600">
              Admin
            </p>
          ) : null}
        </div>
        {queueList_bool && admin ? (
          <div
            onClick={() => removequeues(id, name)}
            className="basis-2/1 mr-0 pl-1 pr-1 text-sky-400/0"
          >
            <img className="opacity-50" src="./x.png" width={20} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
