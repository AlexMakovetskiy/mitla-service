import { Route,  Routes} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './pages/main/Main';
import Success from './pages/authorization/success/Success';
import SignIn from './pages/authorization/signIn/SignIn';
import SignUp from './pages/authorization/signUp/SignUp';
import Menu from './components/menu/Menu';
import ReviewPage from './pages/postPages/reviewPage/ReviewPage';
import ReviewsPage from './pages/postPages/reviewsPage/ReviewsPage'; 
import SearchPage from './pages/searchPage/SearchPage';
import Favorites from './pages/favorites/Favorites';
import NotFound from './pages/notFound/NotFound';

import './style/reset.scss';
import './style/common.scss';
import './App.scss';

function App () {
    return (
        <div className="mitla-wrapper">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/authorization" element={<SignIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/success" element={<Success/>}></Route>
                <Route path="/allreviews" element={<ReviewsPage/>}></Route>
                <Route path="/review/:id" element={<ReviewPage/>}></Route>
                <Route path="/search" element={<SearchPage searchLine=""/>}></Route>
                <Route path="/favorites" element={<Favorites/>}></Route>
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;