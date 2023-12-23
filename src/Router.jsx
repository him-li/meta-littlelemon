import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/Home/HomePage';
import MenuPage from '../src/pages/Menu/MenuPage';
import BookingPage from '../src/pages/Booking/BookingPage';
import AboutPage from './pages/About/AboutPage';
import UsersPage from './pages/Users/UsersPage';
import Login from './pages/Home/Login';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/menu' element={<MenuPage />}></Route>
                <Route path='/booking' element={<BookingPage />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/users' element={<UsersPage />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}