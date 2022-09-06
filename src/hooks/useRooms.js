import React from "react";
import { getMessages, getRooms } from "../services/firebase";

function useRooms(roomId) {
  const [romms, setRooms] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = getRooms(roomId, setRooms);
    return unsubscribe;
  }, [roomId]);

  return romms;
}

export { useRooms };
