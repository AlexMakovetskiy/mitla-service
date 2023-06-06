import React from 'react';
import { Route,  Routes, BrowserRouter} from 'react-router-dom';

import { ThemeProvider } from './components/Context/ThemeContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Success from './pages/Authorization/Success/Success';
import SignIn from './pages/Authorization/SignIn/SignIn';
import ReviewPage from './pages/PostPages/ReviewPage/ReviewPage';
import ReviewsPage from './pages/PostPages/ReviewsPage/ReviewsPage';
import NotFound from './pages/NotFound/NotFound';


import './style/reset.scss';
import './style/common.scss';
import './App.scss';

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <ThemeProvider>
                    <div className="mitla-wrapper">
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Main/>}></Route>
                            <Route path="/authorization" element={<SignIn/>}></Route>
                            <Route path="/success" element={<Success/>}></Route>
                            <Route path="/allreviews" element={<ReviewsPage/>}></Route>
                            <Route path="/review/:id" element={<ReviewPage/>}></Route>
                            <Route path="/*" element={<NotFound/>}></Route>
                        </Routes>
                        <Footer/>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;