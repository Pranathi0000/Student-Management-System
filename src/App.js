import './App.css';
import DisplayStudents from './Components/Display/DisplayStudents';
import CreateStudent from './Components/Create/CreateStudent';
import OneStudent from './Components/DisplayOne/OneStudent';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import EditStudent from './Components/update/EditStudent';
import DeleteStudent from './Components/delete/DeleteStudent';
import Home from './Components/Navigation/Home';
import GetStudentDetails from './Components/DisplayOne/GetStudentDetails';
import GetRolNumber from './Components/delete/GetRolNumber';



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/display' element={<DisplayStudents/>}/>
       <Route path='/add' element={<CreateStudent/>}/>
       <Route path='/update' element={<EditStudent/>}/>
       <Route path='/delete/:rollNum' element={<DeleteStudent/>}/>
       <Route path='/get/:rollNum' element={<OneStudent/>}/>
       <Route path='/get/' element={<GetStudentDetails/>}/>
       <Route path ='/delete' element={<GetRolNumber/>}/>
      </Routes>
  </Router>
  );
}

export default App;
