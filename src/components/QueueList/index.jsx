import React from "react";
import "./styles.css";
import { joindList, queueList, removeperson } from "../../utils";
import Person from "../Person";


import { clearlist } from '../../utils';

function QueueList({ meeting, user, admin }) {
  return (
    <>
      <div>
        <div className="flex flex-row borderd text-center">
          <div className="basis-2/1 mr-5">
            {" "}
            <h1 className="text-3xl text-gray-700 font-bold mb-5">
              Raised Hands
            </h1>
          </div>
          <div className="basis-2/1 mr-5">
            {" "}
            {admin === user.displayName ? (
              <p
                onClick={() => clearlist(meeting.id)}
                className="text-sky-400/100 text-xs mt-2 border pr-1 pl-1 border-collapse border-r-1 rounded border-gray-600"
              >
                Clear
              </p>
            ) : null}
          </div>
        </div>
      </div>
      {meeting.queueList.map((x) => (
        <Person
          key={x.id}
          index={Math.abs(meeting.queueList.indexOf(x) + 1)}
          queueList_bool={true}
          id={meeting.id}
          name={x.name}
          adminUser={meeting.admin}
          admin={meeting.admin === user.displayName}
        />
      ))}
    </>
  );
}

export { QueueList };
