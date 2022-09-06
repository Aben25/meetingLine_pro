import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import { useAuth } from '../../hooks/useAuth';
import './styles.css';
import {MeetingContext} from '../../App';
import { useContext } from 'react';

function Landing() {
   const {meeting,  user} = useContext(MeetingContext);
//    
    return (
        <>
            <h2>Choose a Chat Room</h2>
            <ul className="chat-room-list">
                {meeting.map((meeting) => (
                    <li key={meeting.id}>
                        <Link to={`/room/${meeting.id}`}  >{meeting.id}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export { Landing };