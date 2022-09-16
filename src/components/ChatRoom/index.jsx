import { Link, useParams } from "react-router-dom";
import "./styles.css";
import { WaitingList } from "../WaitingList";
import { QueueList } from "../QueueList";
import { db } from "../../services/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useContext, useEffect, useState, createContext } from "react";
import {
  joindList,
  removeJoindList,
  queueList,
  removequeues,
} from "../../utils";
import { MeetingContext } from "../AuthenticatedApp";
import { useAuth } from "../../hooks/useAuth";

function ChatRoom() {
   const { meeting, user } = useContext(MeetingContext);
  const params = useParams();
  const room = meeting.find((x) => x.title === params.title);
  let btn = "Rais Hand";

const found = room && room.queueList.some((x) => x.name === user.displayName);

function handlclick (){
if (!found) {
  queueList(room.id, user.displayName);

}
else{
  removequeues(room.id, user.displayName);
}
}

  if (!room) {
    // TODO: 404
  }


  return (
    <>
      <h2>{room && room.title}</h2>
      <div onClick={() => removeJoindList(room.id, user.displayName)}>
        <Link to="/">⬅️ Back to all Meeting</Link>
      </div>
      <div className="flex flex-row">
        <div className=""></div>
        <button
          onClick={() => handlclick()}
          className={
            found
              ? "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              : "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          }
        >
          {found ? "Hand Down" : "Rais Hand"}
        </button>
      </div>

      <div className="messages-container">
        {room && <QueueList admin={room.admin} meeting={room} user={user} />}

        {room && <WaitingList meeting={room} user={user} />}
      </div>
    </>
  );
}

export { ChatRoom };
