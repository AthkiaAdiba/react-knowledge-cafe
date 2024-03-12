import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header></Header>
      <div className='md:flex mx-4 lg:mx-12 mt-10'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
