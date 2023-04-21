import {Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage';
import PostsPage from './pages/PostsPage/PostsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/posts' element={<PostsPage/>}/>
      <Route path='/post/:id' element={<SinglePostPage/>}/>
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;