import { Link, useParams } from "react-router-dom";
import { chatRooms } from "../../data/chatRooms";
import "./styles.css";
import { MessageInput } from "../MessageInput";
import { QueueList } from "../QueueList";
import { WaitingList } from "../WaitingList";
import { MeetingContext } from "../../App";
import { useContext, useEffect, useState, createContext } from "react";
import {
  joindList,
  queueList,
  removeperson,
  removeJoindList,
} from "../../utils";
function ChatRoom() {
  const params = useParams();

  const { meeting, user } = useContext(MeetingContext);
  const room = meeting.find((x) => x.id === params.id);

  if (!room) {
    // TODO: 404
  }
  const found =
    room.joindList.some((el) => el.name === user.displayName) ||
    room.queueList.some((el) => el.name === user.displayName);

  return (
    <>
      <h2>{room.title}</h2>
      <div>
        <Link to="/">⬅️ Back to all Meeting</Link>
      </div>

      <button
        onClick={() =>
          found
            ? removeJoindList(room.id, user.displayName)
            : joindList(room.id, user.displayName)
        }
        type="button"
        className={
          found
            ? "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900:"
            : "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        }
      >
        {found ? "Leave Meeting" : "Join Meeting"}
      </button>

      <div className="messages-container">
        <QueueList meeting={room} user={user} />

        <WaitingList meeting={room} user={user} />
      </div>
    </>
  );
}

export { ChatRoom };
