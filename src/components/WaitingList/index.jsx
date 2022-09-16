import React from 'react';
import './styles.css';
import { joindList, queueList} from '../../utils';
import Person from '../Person';




function WaitingList({meeting, user} ) {

console.log(meeting,user);
    return (
      <>
        <h1 className="text-3xl text-gray-700 font-bold mb-5">Audience</h1>

        {meeting.joindList.map((x) => (
          <Person
            key={meeting.id}
            index={Math.abs(meeting.joindList.indexOf(x) + 1)}
            queueList_bool={false}
            id={meeting.id}
            admin={meeting.admin}
            name={x.name}
          />
        ))}
      </>
    );
}




export { WaitingList };