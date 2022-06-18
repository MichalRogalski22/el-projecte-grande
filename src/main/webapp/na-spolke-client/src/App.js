// import React from 'react'
// import './App.css';
// import Registration from "./components/registration/Registration";
// import AddCompany from "./components/addCompany/AddCompany";
// import MainPage from "./components/mainPage/mainPage";
// import Nav from 'react-bootstrap/Nav'
// import {useState} from "react";
// import Login from "./components/login/Login";
//
// function App() {
//
//     const [active, setActive] = useState("MainPage")
//
//     const getMainPage = ()=> {
//         setActive("MainPage")
//     }
//
//     const getRegistration = () => {
//       setActive("Registration")
//     }
//
//     const getLogin = () => {
//         setActive("Login")
//     }
//
//     const addCompany = () => {
//       setActive("addCompany")
//     }
//
//   return (
//     <div className="App">
//         <Nav variant="pills" defaultActiveKey="MainPage">
//             <Nav.Item>
//                 <Nav.Link onClick={getMainPage} >Strona główna</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link onClick={getRegistration} >Rejestracja</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link onClick={getLogin} >Logowanie</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link onClick={addCompany} >Dodaj spółkę</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//             </Nav.Item>
//         </Nav>
//
//         {active === "MainPage" && <MainPage title={"MainPage"}/>}
//         {active === "Registration" && <Registration title={"Registration"}/>}
//         {active === "Login" && <Login title={"Login"}/>}
//         {active === "addCompany" && <AddCompany title={"addCompany"}/>}
//
//     </div>
//   );
// }
//
// export default App;
import './App.css';
import Layout from './components/Layout';
import Login from './components/login/Login';
import HelloWorld from "./components/HelloWorld";
import MainPage from "./components/MainPage";
import {Route, Routes} from "react-router-dom";
import Registration from "./components/registration/Registration";
import AddMember from "./components/ownerPanel/AddMember";
import DeleteMember from "./components/ownerPanel/DeleteMember";
import ChangeRole from "./components/ownerPanel/ChangeRole";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/* public routes */}
                <Route path="/" element={<MainPage/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Registration/>}/>
                {/*<Route path="add-member" element={<AddMember/>}/>*/}
                {/*<Route path="delete-member" element={<DeleteMember/>}/>*/}
                {/*<Route path="change-role" element={<ChangeRole/>}/>*/}
            </Route>
        </Routes>);
}

export default App;