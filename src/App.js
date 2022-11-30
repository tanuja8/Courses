import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
 import Courses from './component/Courses';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Signup></Signup>
       <Courses></Courses> 
    </div>
  );
}

export default App;
