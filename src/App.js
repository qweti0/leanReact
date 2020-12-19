import "./App.css";
import NewForm from "./components/NewForm";
import { useState, useEffect } from "react";
import React, { useContext, createContex } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import Login from "./containers/Login";
import AntForm from "./containers/AntForm";
function App() {
    const [data, setData] = useState({
        owner: "",
        nation: "Việt Nam",
        city: "",
        district: "",
        road: "",
        address: "",
        phoneNumber: "",
        paperType: "",
        paperNo: "",
        issueBy: "",
        issueDate: "",
        vehicleType: "",
        branchName: "",
        typeNumber: "",
        signDate: "",
        soKhung: "",
        soMay: "",
        dauBienTinh: "",
        dauBienQg: "",
        seriChu: "",
        plateColor: "",
        approveBy: "",
        purposeUse: "",
        approveDate: "",
        approvePerson: "",
    });
    const handleChange = (event) => {
        setData({ ...data, [event.target.id]: event.target.value });
        console.log(data);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(data));
    };

    return (
        <div className="App">
            <header>
    <h1>Đăng ký nghiệp vụ</h1>
            </header>
            {/* <AuthExample></AuthExample> */}
            <Router>
            <div>
                <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        </nav>
                <Switch>
                    <Route exact path ="/">
                        <Login />
                    </Route>
                    <Route path="/dangkynv">
                        {/* <NewForm
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            data={data}
                        ></NewForm> */}
                        <AntForm />
                    </Route>
                </Switch>
            </div>
            </Router>
        </div>
    );
}

export default App;
