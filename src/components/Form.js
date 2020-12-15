import React from 'react'

function Form() {

    return (
        <div>
            <form>
                <label>Thông tin sở hữu </label>
                <br></br>
                <label>Chủ sở hữu </label>
                <input type="text"></input>
                <br></br>
                <label>Quốc gia </label>
                <select name="nation">
                    <option value="empty"> </option>
                    <option value="VN">VN</option>
                </select>
                <br></br>
                <label>Tỉnh thành phố </label>
                <select name="city">
                    <option value="empty"> </option>
                    <option value="HN">HN</option>
                </select>
                <br></br>
                <label>Quận huyện </label>
                <select name="city">
                    <option value="empty"> </option>
                    <option value="HK">HK</option>
                </select>
                <br></br>
                <label>Phường xã </label>
                <select name="District">
                    <option value="empty"> </option>
                    <option value="HB">HB</option>
                </select>
                <br></br>
                <label>Địa chỉ </label>
                <input type="text"></input>
                <br></br>
                <label>Số điện thoại </label>
                <input type="text"></input>
                <br></br>
                <label>Loại giấy tờ </label>
                <select name="paper">
                    <option value="empty"> </option>
                    <option value="GPLX">ĐKX</option>
                </select>
                <br></br>
                <label>Số giấy tờ </label>
                <input type="text"></input>
                <br></br>
                <label>Nơi cấp </label>
                <select name="issuer">
                    <option value="empty"> </option>
                    <option value="issuer">BCA</option>
                </select>
                <br></br>
                <label>Ngày cấp </label>
                <input type="date" id="issueDate" name="issueDate"></input>
                <br></br>
                <label>Thông tin xe </label>
                <br></br>
                <label>Loại xe </label>
                <select name="carType">
                    <option value="empty"> </option>
                    <option value="sedan">Sedan</option>
                </select>
                <br></br>
                <label>Nhãn hiệu </label>
                <select name="brandName">
                    <option value="empty"> </option>
                    <option value="vin">Vin</option>
                </select>
                <br></br>
                <label>Số loại </label>
                <input type="text"></input>
                <br></br>
                <label>Ngày đăng ký </label>
                <input type="date" id="issueDate" name="issueDate"></input>
                <br></br>
                <label>Số khung </label>
                <input type="text"></input>
                <br></br>
                <label>Số máy </label>
                <input type="text"></input>
                <br></br>
                <label>Thông tin biển số xe </label>
                <br></br>
                <label>Đầu biển theo tỉnh </label>
                <select name="cityPrefix">
                    <option value="empty"> </option>
                    <option value="hanoi">30</option>
                </select>
                <br></br>
                <label>Đầu biển quốc gia </label>
                <select name="nationPrefix">
                    <option value="empty"> </option>
                    <option value="vn">84</option>
                </select>
                <br></br>
                <label>Seri chữ </label>
                <select name="prefix">
                    <option value="empty"> </option>
                    <option value="vn">G</option>
                </select>
                <br></br>
                <label>Màu biển </label>
                <input type="text"></input>
                <br></br>
                <label>Cơ quan phê duyệt </label>
                <input type="text"></input>
                <br></br>
                <label>Mục đích sử dụng </label>
                <select name="purpose">
                    <option value="empty"> </option>
                    <option value="work">Làm việc</option>
                </select>
                <br></br>
                <label>Ngày phê duyệt </label>
                <input type="date" id="approveDate" name="approveDate"></input>
                <br></br>
                <label>Người phê duyệt </label>
                <input type="text"></input>
                <br></br>
                <input type="submit" value="Lưu"></input>
                <button>Làm mới</button>
            </form>
        </div>
    );

}

export default Form