import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import { useAuth } from '../../hooks/useAuth';
import './styles.css';
import { MeetingContext } from "../AuthenticatedApp";
import { useContext } from 'react';
import { Profiler } from 'react';
import Profile from '../Profile';
import { joindList } from '../../utils';
import Popup from "reactjs-popup";
import Share from '../Share';

function Landing() {
  const { meeting, user } = useContext(MeetingContext);
  return (
    <>
      <Link to="/profile">
        <Profile user={user} />
      </Link>
      <h2>Choose Meeting</h2>
      <ul className="container min-w-full mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-0">
        {meeting.map((meeting) => (
          <div className="min-w-full " key={meeting.id}>
            {" "}
            <></>
            <div className="	p-6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {meeting.title}{" "}
                  <Popup
                    modal
                    nested
                    trigger={
                      <img
                        src="./share.png"
                        width={30}
                        className="float-right"
                      />
                    }
                    position="right center"
                  >
                    {(close) => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header"> Share Meeting </div>
                        <div className="content">
                          {" "}
                          <Share url={meeting.title} />{" "}
                        </div>
                      </div>
                    )}
                  </Popup>
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {meeting.joindList.length + meeting.queueList.length} people
                are joind
              </p>
              <Link to={meeting.title}>
                <a
                  onClick={() => joindList(meeting.id, user.displayName)}
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Join
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export { Landing };