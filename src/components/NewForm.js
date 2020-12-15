import React from "react";
import "./Textbox";
import Textbox from "./Textbox";
import Dropdown from "./Dropdown";
import Date from "./Date";
import { useState, useEffect } from "react";

function NewForm(props) {
    const nationOptions = [
        { id: 0, title: "VN" },
        { id: 1, title: "VN" },
    ];
    const { onChange, onSubmit, data } = props;
    function handleClearInput(event) {}
    const [cityOptions, setCityOptions] = useState([
        {
            province_id: "92",
            province_name: "Thành phố Hà Nội",
            province_type: "Thành phố Trung ương",
        },
    ]);
    const [districtOptions, setDistrictOptions] = useState([]);
    const [roadOptions, setRoadOptions] = useState([]);
    const [issueByOptions, setIssueByOptions] = useState([]);

    useEffect(() => {
        fetch("https://vapi.vnappmob.com//api/province")
            .then(async (response) => {
                const data = await response.json();
                setCityOptions(data);
            })
            .catch((error) => {});
    }, []);

    return (
        <div>
            <form name="newForm" id="newForm" onChange={onChange}>
                <label>Thông tin sở hữu </label>
                <br></br>
                <Textbox
                    name="Chủ sở hữu "
                    id="owner"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <Dropdown
                    name="Quốc gia "
                    id="nation"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Dropdown
                    label="Tỉnh thành phố "
                    name="city"
                    id="city"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Dropdown
                    name="Quận huyện "
                    id="district"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Dropdown
                    name="Phường xã "
                    id="road"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Textbox
                    name="Địa chỉ "
                    id="address"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <Textbox
                    name="Số điện thoại "
                    id="phoneNumber"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <Dropdown
                    name="Loại giấy tờ "
                    id="paperType"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Textbox
                    name="Số giấy tờ "
                    id="paperNo"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <Dropdown
                    name="Nơi cấp "
                    id="issueBy"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Date
                    name="Ngày cấp "
                    id="issueDate"
                    onChange={onChange}
                ></Date>
                <br></br>
                <label>Thông tin xe </label>
                <br></br>
                <Dropdown
                    name="Loại xe "
                    id="vehicleType"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Dropdown
                    name="Nhãn hiệu "
                    id="branchName"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Textbox
                    name="Số loại "
                    id="typeNumber"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <Date
                    name="Ngày đăng ký "
                    id="signDate"
                    onChange={onChange}
                ></Date>
                <br></br>
                <Textbox
                    name="Số khung "
                    id="soKhung"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <Textbox
                    name="Số máy "
                    id="soMay"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <label>Thông tin biển số xe </label>
                <br></br>
                <Dropdown
                    name="Đầu biển theo tỉnh "
                    id="dauBienTinh"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Dropdown
                    name="Đầu biển quốc gia "
                    id="dauBienQg"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Dropdown
                    name="Seri chữ "
                    id="seriChu"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Textbox
                    name="Màu biển "
                    id="plateColor"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <Textbox
                    name="Cơ quan phê duyệt "
                    id="approveBy"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <Dropdown
                    name="Mục đích sử dụng "
                    id="purposeUse"
                    options={nationOptions}
                    onChange={onChange}
                ></Dropdown>
                <br></br>
                <Date
                    name="Ngày phê duyệt "
                    id="approveDate"
                    onChange={onChange}
                ></Date>
                <br></br>
                <Textbox
                    name="Người phê duyệt "
                    id="approvePerson"
                    onChange={onChange}
                ></Textbox>
                <br></br>
                <input type="submit" value="Lưu" onClick={onSubmit}></input>
                <button value="clear" onClick={handleClearInput}>
                    Làm mới
                </button>
            </form>
        </div>
    );
}

export default NewForm;
