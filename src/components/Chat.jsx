import { Link, useParams } from 'react-router-dom';
import { MeetingContext } from "./AuthenticatedApp";
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';
import { useContext } from 'react';

function Chat() {
    const { meeting, user } = useContext(MeetingContext);
    const params = useParams();
    const room = meeting.find((x) => x.title.toLowerCase().replace(/\s+/g, '') === params.title.toLowerCase().replace(/\s+/g, ''));



    if (!room) {
        // TODO: 404
    }
    return (
        <>
        
            <div className="messages-container">
                {room && <MessageList roomId={room.id} />}
                {room && <MessageInput roomId={room.id} />}
            </div>
        </>
    );
}

export { Chat };