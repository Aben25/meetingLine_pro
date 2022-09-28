import React from 'react';
import './styles.css';
import { joindList, queueList} from '../../utils';
import Person from '../Person';




function WaitingList({meeting, user} ) {

  const list =meeting.joindList;
  //remove duplicates from list
  const uniqueList = [...new Set(list)]
  console.log(uniqueList)
    return (
      <>
        <h1 className="text-3xl text-gray-700 font-bold mb-5">Audience</h1>

        {uniqueList.sort(function (a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }).map((x) => (
          <Person
            key={meeting.id}
            index={Math.abs(meeting.joindList.indexOf(x) + 1)}
            queueList_bool={false}
            id={meeting.id}
            admin={meeting.admin}
            name={x.name}
            photo={x.photoURL}
          />
        ))}
      </>
    );
}




export { WaitingList };