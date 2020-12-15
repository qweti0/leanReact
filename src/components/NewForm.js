import React from 'react'
import './Textbox'
import Textbox from './Textbox';
import Dropdown from './Dropdown';
import Date from './Date';

function NewForm(props) {
    const nationOptions = [
        {id:0, title: ''}, {id:1, title:'VN'}
      ];
      const onChange = props.onChange;
      function handleOnSubmit (event) {
        event.preventDefault();
        // var elements = document.getElementById("newForm").elements;
        // console.log(elements);
        // // var obj ={};
        // for(var i = 0 ; i < elements.length ; i++){
        //     var item = elements.item(i);
        //     // obj[item.name] = item.value;
        //     console.log(item.name +" : "+item.value);
        // }
      }
      function handleClearInput(event) {
        // event.target.reset();
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        // alert(JSON.stringify(data));
      }

    return (
        <div>
            <form name="newForm" id="newForm" onSubmit={handleSubmit}>
                <label>Thông tin sở hữu </label>
                <br></br>
                <Textbox name="Chủ sở hữu " id ="owner" onChange={onChange}></Textbox>
                <br></br>
                <Dropdown name="Quốc gia " id= "nation" options ={nationOptions} onChange={onChange}>
                </Dropdown>
                <br></br>
                <Dropdown name="Tỉnh thành phố " id="city" options ={nationOptions} onChange={onChange}>
                </Dropdown>
                <br></br>
                <Dropdown name="Quận huyện " id ="district" options ={nationOptions} onChange={onChange}>
                </Dropdown>
                <br></br>
                <Dropdown name="Phường xã " id ="road" options ={nationOptions} onChange={onChange}>
                </Dropdown>
                <br></br>
                <Textbox name="Địa chỉ " id ="address" onChange={onChange}></Textbox>
                <br></br>
                <Textbox name="Số điện thoại " id="phoneNumber" onChange={onChange}></Textbox>
                <br></br>
                <Dropdown name="Loại giấy tờ " id="paperType" options ={nationOptions} onChange={onChange}>
                </Dropdown>
                <br></br>
                <Textbox name="Số giấy tờ " id="paperNo" onChange={onChange}></Textbox>
                <br></br>
                <Dropdown name="Nơi cấp " id="issueBy" options ={nationOptions} onChange={onChange}>
                </Dropdown>
                <br></br>
                <Date name="Ngày cấp " id="issueDate" onChange={onChange}></Date>
                <br></br>
                <label>Thông tin xe </label>
                <br></br>
                <Dropdown name="Loại xe " id= "vehicleType" options ={nationOptions} onChange={onChange}>
                </Dropdown>
                <br></br>
                <Dropdown name="Nhãn hiệu " id="branchName" options ={nationOptions} onChange={onChange}>
                </Dropdown>
                <br></br>
                <Textbox name="Số loại " id="typeNumber"></Textbox>
                <br></br>
                <Date name="Ngày đăng ký " id="signDate"></Date>
                <br></br>
                <Textbox name="Số khung " id ="soKhung"></Textbox>
                <br></br>
                <Textbox name="Số máy " id="soMay"></Textbox>
                <br></br>
                <label>Thông tin biển số xe </label>
                <br></br>
                <Dropdown name="Đầu biển theo tỉnh " id="dauBienTinh"
                 options ={nationOptions}> </Dropdown>
                <br></br>
                <Dropdown name="Đầu biển quốc gia " id="dauBienQg" 
                options ={nationOptions}> </Dropdown>
                <br></br>
                <Dropdown name="Seri chữ " id="seriChu"
                 options ={nationOptions}> </Dropdown>
                <br></br>
                <Textbox name="Màu biển " id="plateColor"></Textbox>
                <br></br>
                <Textbox name="Cơ quan phê duyệt " id="approveBy"></Textbox>
                <br></br>
                <Dropdown name="Mục đích sử dụng " id="purposeUse"
                options ={nationOptions}></Dropdown>
                <br></br>
                <Date name="Ngày phê duyệt " id="approveDate"></Date>
                <br></br>
                <Textbox name="Người phê duyệt " id="approvePerson"></Textbox>
                <br></br>
                <input type="submit" value="Lưu" onClick={handleOnSubmit}></input>
                <button value="clear" onClick={handleClearInput}>Làm mới</button>
            </form>
        </div>
    );

}

export default NewForm