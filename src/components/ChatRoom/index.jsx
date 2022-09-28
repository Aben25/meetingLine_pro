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
import styled from 'styled-components';

const STabs = styled(Tabs)`
  font-size: 14px;
  width: 100%;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
  margin-right: 4px;
  border: 1px  solid gray;
  border-radius: 5px 5px 0 0;
   border-bottom-width: 0;
  padding: 4px;
  user-select: none;
  cursor: arrow;

  &.is-selected {
    // color: white;
    // background: black;
    border-bottom: 1px solid white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, .5)
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 4px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';


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
      <STabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
      >
        <STabList>
          <STab>Queue</STab>
          <STab>Chat</STab>
        </STabList>
        <STabPanel>
          <div className="p-2">
            {room && <QueueList admin={room.admin} meeting={room} user={user} />}

            {room && <WaitingList meeting={room} user={user} />}
          </div></STabPanel>
        <STabPanel>          <Chat />
</STabPanel>
      </STabs>
      
     
    </>
    
  );
}

export { ChatRoom };
