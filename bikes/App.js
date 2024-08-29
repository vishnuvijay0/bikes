
import {Routes,Route} from 'react-router-dom';
import './App.css';
import DataBase from './admin';
import SignIn from './signin';
import SignUp from './details';
import Register from './add';
import EditUser from './edit';

function App() {
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<DataBase/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/details" element={<SignUp/>}></Route>
            <Route path="/admin" element={<DataBase/>}></Route>
            <Route path="/add" element={<Register/>}></Route>
            <Route path="/edit/:bikeid" element={<EditUser/>}></Route>
          </Routes>
        </div>
      )
    }
    
    export default App;
