import {Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage'
import PostsPage from './pages/PostsPage/PostsPage';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/posts' element={<PostsPage/>}/>
      <Route path='/post/:id' element={<SinglePostPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;