import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Banner from "./component/Banner/Banner"
import FollowersPage from "./Pages/FollowersPage/FollowersPage"
import TodoPage from "./Pages/TodoPage/TodoPage"


const App = () => {
  return (
   
    <>
      <Banner/>
    <Router>
      <Routes>
        <Route path='/' element={ <TodoPage/>} />
        <Route path='/followers' element={ <FollowersPage/>} />
       </Routes>
      </Router>
      </>
      
  )
}

export default App
// import Book from "./Book"
// import { BrowserRouter as Router,Routes,Route,NavLink } from "react-router-dom"
// import Login from "./Login"

// const App = () => {
//   return (
   
   
//     <Router>
//       <Routes>
//         <Route path="/book" element={<Book/> } />
//         <Route path="/login" element={<Login/> } />
//       </Routes>
//       </Router>
      
//   )
// }

// export default App
