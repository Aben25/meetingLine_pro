import { Link, useParams } from "react-router-dom";
import "./styles.css";
import { WaitingList } from "../WaitingList";
import { QueueList } from "../QueueList";
import { db } from "../../services/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useContext, useEffect, useState, createContext } from "react";
import {
  removeJoindList,
  queueList,
  removequeues,
} from "../../utils";
import { MeetingContext } from "../AuthenticatedApp";
import Profile from "../Profile";
import { Chat } from "../Chat";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ChatRoom() {
   const { meeting, user } = useContext(MeetingContext);
  const params = useParams();
  const room = meeting.find((x) => x.title.toLowerCase().replace(/\s+/g, '') === params.title.toLowerCase().replace(/\s+/g, ''));
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
      <h2> <Link to="/profile">
        <Profile user={user} />
      </Link></h2>
      <div onClick={() => removeJoindList(room.id, user.displayName)}>
        <Link to="/">⬅️ Back ||</Link> {room && room.title}
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
      <Tabs >
        <TabList>
          <Tab>Queue</Tab>
          <Tab>Chat</Tab>
        </TabList>

      
        <TabPanel>
        
        

          <div className="messages-container">
            {room && <QueueList admin={room.admin} meeting={room} user={user} />}

            {room && <WaitingList meeting={room} user={user} />}
          </div>
        </TabPanel>
        <TabPanel>
          <Chat />
        </TabPanel>
      </Tabs>
      
     
    </>
    
  );
}

export { ChatRoom };
