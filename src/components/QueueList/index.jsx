import React from "react";
import "./styles.css";
import { joindList, queueList,removeperson } from "../../utils";
import Person from "../Person";

function QueueList({ meeting, user }) {
  return (
    <>
      <h1 className="text-3xl text-gray-700 font-bold mb-5">Queued List</h1>
      {meeting.queueList.map((x) => (
        <Person
          key={x.id}
          index={Math.abs(meeting.queueList.indexOf(x) + 1)}
          queueList_bool={true}
          id={meeting.id}
          name={x.name}
          admin={meeting.admin}
        />
      ))}
    </>
  );
}

export { QueueList };
