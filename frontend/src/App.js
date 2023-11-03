import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
//import Login from './Login';
//import Logout from './Logout';
//import Register from './Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import ViewProducts from './Components/ViewProducts';
import Header from './Components/Header';
import Footer from './Components/FooterN';
import SignUp from './Components/SignUp';
import CreateProduct from './Components/CreateProduct';
import Table from './Components/Table';
import ArtTable from './ArtTable';

const App = () => {
  //const user = useSelector(selectUser);
  //console.log(user);

  return (

      <div className="app">
          <Router>
            <header></header>
            
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/signin" element={<Register></Register>}/>
                <Route path="/signup" element={<SignUp></SignUp>}/>
                <Route path="/myarts" element={<ArtTable></ArtTable>}/>
                <Route path="/arts" element={<ViewProducts></ViewProducts>}/>
                <Route path="/addart" element={<CreateProduct></CreateProduct>}/>
                <Route path = "/createproduct" element={
                  <CreateProduct></CreateProduct>

                }/>
                


                
                  {/* <Route path="/" element={
                      //only show the logout component if the user is logged in
                      user ? <Logout /> :
                          <Login />

                  } />
                  <Route path="/logout" element={
                      //only show the logout component if the user is logged in
                      user ? <Logout /> : <Login />
                  } />

                  <Route path="/register" element={
                      //only show the logout component if the user is logged in
                      user ? <Logout /> : <Register />
                  } /> */}
              </Routes>
             <footer></footer>
          </Router>
      </div>

  );
};

export default App;
