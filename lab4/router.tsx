import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Artwork from './pages/Artwork';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Education from './pages/Education';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/artwork/:id" element={<Artwork />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/education" element={<Education />} />
  </Routes>
);

export default Router;