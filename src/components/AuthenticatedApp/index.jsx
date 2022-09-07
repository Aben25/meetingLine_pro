import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';
import Account from '../Account';

function AuthenticatedApp() {
  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing  />} />
                <Route path="/room/:id" element={<ChatRoom />} />
                <Route path="/profile" element={<Account />} />
            </Routes>
        </BrowserRouter>
    );
}

export { AuthenticatedApp };