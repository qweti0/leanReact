import './App.css';
import './components/Form'
import Form from './components/Form';
import NewForm from './components/NewForm';
import { useState, useEffect } from 'react';

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
const [cityOptions, setCityOptions] = useState([]);
const [districtOptions, setDistrictOptions] = useState([]);
const [roadOptions, setRoadOptions] = useState([]);
const [issueByOptions, setIssueByOptions] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>
          Đăng ký nghiệp vụ
        </h1>
      </header>
      <NewForm onChange={handleChange}></NewForm>
      {/* <Form></Form> */}
    </div>
  );
}

export default App;
