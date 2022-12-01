import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
 import Courses from './component/Courses';
import Search from './component/Search';
import End from './component/End';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Signup></Signup>
       <Courses></Courses> 
       <Search></Search>
       <End></End>
    </div>
  );
}

export default App;
