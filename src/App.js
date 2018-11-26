import React, { Component } from "react";
import styled from "styled-components";
import config from "./config";
import $ from "jquery";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 800px 800px;
  grid-gap: 20px 20px;
  min-width: 0;
  min-height: 0;
  font-family: "Roboto", sans-serif;
  color: rgb(105,105,105);
`;

const Image = styled.img`
  width: 500px;
  min-width: 0;
  min-height: 0;
`;

const Image2 = styled.img`
  width: 300px;
  margin-left: 450px;
  margin-top: 50px;
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  min-width: 0;
  min-height: 0;
`;

const Header = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 56px;
  grid-column: 1 / span2;
  grid-row: 1;
  text-align: center;
  font-family: Impact, Charcoal, sans-serif;
`;

const NavBar = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2;
  overflow: hidden;
  img {
    display: inline-block;
    margin: 10px;
  }
`;

const Panel = styled.div`
  grid-column: 1 / span 2;
  grid-row: 3;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 150px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel2 = styled.div`
  grid-column: 1;
  grid-row: 4;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 550px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel3 = styled.div`
  grid-column: 2;
  grid-row: 4;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 550px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;

const Panel4 = styled.div`
  grid-column: 1;
  grid-row: 5;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 550px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel5 = styled.div`
  grid-column: 2;
  grid-row: 5;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 550px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;


const Selector = styled.select`
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  font-size: 14px;
  padding: 8px;
  width: 250px;
  color: #4b4f5d;
`;

const Button = styled.button`
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 2px;
  color: #757575;
  font-size: 14px;
  background: #ffffff;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  &:hover {
    background-color: #f6f6f7;
    cursor: pointer;
  }
`;
const Panel_Dept = styled.div`
  grid-column: 1 / span 2;
  grid-row: 6 ;
  background: rgba(238, 223, 204, 1);
  overflow: hidden;
  height: 250px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Dept1 = styled.div`
  grid-column: 1 ;
  grid-row: 6;
  background: rgba(	205, 183, 158, 1);
  overflow: hidden;
  height: 100px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Dept2 = styled.div`
  grid-column: 2 ;
  grid-row: 6;
  background: rgba(205, 183, 158, 1);
  overflow: hidden;
  height: 100px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;

const Panel_Patient1 = styled.div`
  grid-column: 1 ;
  grid-row: 7;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 550px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Patient2 = styled.div`
  grid-column: 2 ;
  grid-row: 7;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 550px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;

const Panel_Appoint1 = styled.div`
  grid-column: 1;
  grid-row: 8;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 350px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Appoint2 = styled.div`
  grid-column: 2;
  grid-row: 8;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 350px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Appoint3 = styled.div`
  grid-column: 1;
  grid-row: 9;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 250px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Appoint4 = styled.div`
  grid-column: 2;
  grid-row: 9;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 250px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Appoint5 = styled.div`
  grid-column: 1;
  grid-row: 10;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 250px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Panel_Appoint6 = styled.div`
  grid-column: 2;
  grid-row: 10;
  background: rgba(205, 192, 176, 1);
  overflow: hidden;
  height: 250px;
  padding: 15px;
  div {
    display: inline-block;
    margin: 10px;
  }
  button {
    display: inline-block;
    margin-left: 20px;
  }
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaffID: "1",
      address: "",
      email: "",
      birthdate: "",
      firstName: "",
      lastName: "",
      homeTel: "",
      medicalType: "",
      mobileTel: "",
      salary: "",
      sex: "",
      staffID: "",
      value: "",
      value2: "",

      post_medical_firstName: "",
      post_medical_lastName: "",
      post_medical_email: "",
      post_medical_birthDate: "",
      post_medical_medicalType: "",
      post_medical_sex: "",
      post_medical_address: "",
      post_medical_salary: 0,
      post_medical_homeTel: "",
      post_medical_mobileTel: "",

      departmentName: "",
      location: "",
      manager_ID: "",
      manager_first_name: "",
      manager_last_name: "",
      manager_sex: "",
      manager_tel: "",
      showDLocation: "",
      selectedDeptName: "",
      showDeptName: "",
      selectedManagerID: "",

      patient_Address: "",
      patient_Birthdate: "",
      parent_first_name: "",
      parent_last_name: "",
      parent_phone_number: "",
      patient_ID: "",
      patient_first_name: "",
      patient_last_name: "",
      patient_phone_number: "",
      patient_sex: "",
      allergy_name: "",
      selectedPatientID: "",

      post_Patient_Address: "",
      post_Patient_Birthdate: "",
      post_Parent_first_name: "",
      post_Parent_last_name: "",
      post_Parent_phone_number: "",
      post_Patient_first_name: "",
      post_Patient_last_name: "",
      post_Patient_phone_number: "",
      post_Patient_sex: "",
      post_Allergy_name: "",

      selectedPatientIDAppointment: "",
      selectedAppointmentQueue: "",
      get_appointment_date: "",
      get_appointment_doctorID: "",
      get_appointment_doctorEmail: "",
      get_appointment_doctorFirstName: "",
      get_appointment_doctorLastName: "",
      get_appointment_doctorSex: "",

      post_appointment_date: "",
      post_appointment_doctorID: "",
      post_appointment_patientID: "",

      isActive: 0
    };
    this.handleSelectedStaffID = this.handleSelectedStaffID.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = field => event => {
    const value = {}
    value[field] = event.target.value
    this.setState(value);
  }

  handleSubmit(e) {
    // alert("Submit");
    this.setState({
      value2: this.state.value
    });

    e.preventDefault();
  }
  async postDoctor(value2) {
    const res = await $.post(`${config.apiPath}/api/medical_staff/doctor`, {
      firstname: this.state.post_medical_firstName,
      lastname: this.state.post_medical_lastName,
      sex: this.state.post_medical_sex,
      salary: this.state.post_medical_salary,
      mobile_tel: this.state.post_medical_mobileTel,
      home_tel: this.state.post_medical_homeTel,
      address: this.state.post_medical_address,
      email: this.state.post_medical_email,
      doctor_type: "Doctor",
      birthdate: new Date("05 October 2011 14:48 UTC").toISOString()
    });
  }
  async patchMedicalStaff(value2) {
    await $.ajax({
      url: `${config.apiPath}/api/medical_staff/` + this.state.patch_medical_staffID, type: "PATCH", data: {
        firstname: this.state.patch_medical_firstName,
        lastname: this.state.patch_medical_lastName,
        sex: this.state.patch_medical_sex,
        salary: this.state.patch_medical_salary,
        mobile_tel: this.state.patch_medical_mobileTel,
        home_tel: this.state.patch_medical_homeTel,
        address: this.state.patch_medical_address,
        email: this.state.patch_medical_email,
        doctor_type: "Doctor",
        birthdate: new Date("05 October 2011 14:48 UTC").toISOString()
      }
    });
  }
  async deleteMedicalStaff(value2) {
    await $.ajax({
      url: `${config.apiPath}/api/medical_staff/` + this.state.delete_medical_staffID, type: "DELETE"
    });
  }

  handleSelectedStaffID(e) {
    this.setState({
      selectedStaffID: e.target.value
    });
  }

  async getMedicalStaffbyID(selectedStaffID) {
    // var data = (await axios.get(`${config.apiPath}/api/medical_staff/` + selectedStaffID)).data;
    const data = await $.get(
      `${config.apiPath}/api/medical_staff/` + selectedStaffID
    );
    try {
      this.setState({
        address: data.Address,
        birthdate: data.Birthdate,
        email: data.Email,
        firstName: data.First_name,
        lastName: data.Last_name,
        homeTel: data.Home_tel,
        medicalType: data.Medical_type,
        mobileTel: data.Mobile_tel,
        salary: data.Salary,
        sex: data.Sex,
        staffID: data.Staff_ID
      });
    } catch (error) {

    }
  }

  async getAppointmentbyID(selectedID, i) {
    // var data = (await axios.get(`${config.apiPath}/api/medical_staff/` + selectedStaffID)).data;
    const data = await $.get(
      `${config.apiPath}/api/appoint`, { patient_id: selectedID }
    );
    console.log(data)
    try {
      i = parseInt(i) - 1
      this.setState({
        get_appointment_date: data[i].Appointment_date,
        get_appointment_doctorID: data[i].Doctor_ID,
        get_appointment_doctorEmail: data[i].Doctor_email,
        get_appointment_doctorFirstName: data[i].Doctor_first_name,
        get_appointment_doctorLastName: data[i].Doctor_last_name,
        get_appointment_doctorSex: data[i].Doctor_sex,
      });
    } catch (error) {

    }
  }
  async postAppointment(value2) {
    console.log("WTF")
    const res = await $.post(`${config.apiPath}/api/appoint`, {
      doctor_id: this.state.post_appointment_doctorID,
      patient_id: this.state.post_appointment_patientID,
      appoint_date: new Date("05 October 2011 14:48 UTC").toISOString(),
    });
  }

  async getLocationbyDeptName(Dept_Name) {
    const data = await $.get(
      `${config.apiPath}/api/department`
    );
    console.log("555");
    for (let i = 0; i < data.length; i++) {
      if (data[i].DepartmentName == Dept_Name) {
        this.setState({
          showDLocation: data[i].Location
        });
        break
      }
    }
  }

  async getDeptNamebyMID(Maneger_ID2) {
    const data = await $.get(
      `${config.apiPath}/api/department`
    );
    for (let i = 0; i < data.length; i++) {
      if (data[i].Manager_ID == Maneger_ID2) {
        this.setState({
          showDeptName: data[i].DepartmentName
        });
        break
      }
    }
  }

  async getInformbyPatientID(selectedPatientID) {
    const data = await $.get(
      `${config.apiPath}/api/patient/` + selectedPatientID
    );
    console.log("55555");
    this.setState({
      patient_Address: data.Address,
      patient_Birthdate: data.Birthdate,
      patient_first_name: data.Patient_first_name,
      patient_last_name: data.Patient_last_name,
      parent_first_name: data.Parent_first_name,
      parent_last_name: data.Parent_last_name,
      parent_phone_number: data.Parent_phone_number,
      patient_phone_number: data.Phone_number,
      patient_sex: data.Sex,
      allergy_name: data.Allergy_name
    });
  }

  async postPatient(value2) {
    const res = await $.post(`${config.apiPath}/api/patient`, {
      address: this.state.post_Patient_Address,
      birthdate: this.state.post_Patient_Birthdate,
      firstname: this.state.post_Patient_first_name,
      lastname: this.state.post_Patient_last_name,
      parent_firstname: this.state.post_Parent_first_name,
      parent_lastname: this.state.post_Parent_last_name,
      parent_phone: this.state.post_Parent_phone_number,
      phone: this.state.post_Patient_phone_number,
      sex: this.state.post_Patient_sex,
      allergy: this.state.post_Allergy_name
    });
  }

  XinputList() {
    var returnVal = [];
    var gList = ["1", "2", "3", "4", "5", "6", "7"];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>);
    }
    return returnVal;
  }



  render() {
    console.log(this.state);
    return (
      <Container>
        {/* <Image2 src="http://static.siuk-thailand.com/assets/images/thelogoforcms.jpg" align="middle" /> */}
        <Header id="home">Hospital Management System</Header>
        <NavBar>
          <ul>
            <li><a href="#home" className={this.state.isActive==0 ? 'active': ''} onClick={()=>{this.setState({isActive : 0})}}>Home</a></li>
            <li><a href="#MedicalStaff" className={this.state.isActive==1 ? 'active': ''} onClick={()=>{this.setState({isActive : 1})}}>MedicalStaff</a></li>
            <li><a href="#department" className={this.state.isActive==2 ? 'active': ''} onClick={()=>{this.setState({isActive : 2})}}>Department</a></li>
            <li><a href="#patient" className={this.state.isActive==3 ? 'active': ''} onClick={()=>{this.setState({isActive : 3})}}>Patient</a></li>
            <li><a href="#appointment" className={this.state.isActive==4 ? 'active': ''} onClick={()=>{this.setState({isActive : 4})}}>Appointment</a></li>
            <li><a href="#treatment" className={this.state.isActive==5 ? 'active': ''} onClick={()=>{this.setState({isActive : 5})}}>Treatment</a></li>
          </ul>
        </NavBar>
        <Panel id="MedicalStaff">
          <h2>What do you want to know?</h2>
          {/* <div class="input1">
            selectedStaffID : &nbsp;
            <Selector
              value={this.state.selectedStaffID}
              onChange={this.handleSelectedStaffID}
            >
              {this.XinputList()}
            </Selector>
          </div> */}
          <label>
            selectedStaffID :
                <input
              type="text"
              value={this.state.selectedStaffID}
              onChange={this.handleChange('selectedStaffID')}
            />
          </label>
          <Button
            onClick={() => this.getMedicalStaffbyID(this.state.selectedStaffID)}
          >
            {/* <Button
            onClick={() => this.getAppointmentbyID(this.state.selectedStaffID)}
          > */}
            {" "}
            Show Pls
          </Button>
        </Panel>
        <Panel2>
          <h1> Show Medical Staff Data as you requested</h1>
          <div>
            <div>{"Show " + "Address: " + this.state.address}</div>
            <br />
            <div>{"Show " + "Birthdate: " + this.state.birthdate}</div>
            <br />
            <div>{"Show " + "Email: " + this.state.email}</div>
            <br />
            <div>{"Show " + "First_name: " + this.state.firstName}</div>
            <br />
            <div>{"Show " + "Home_tel: " + this.state.homeTel}</div>
            <br />
            <div>{"Show " + "Last_name: " + this.state.lastName}</div>
            <br />
            <div>{"Show " + "Medical_type:  " + this.state.medicalType}</div>
            <br />
            <div>{"Show " + "Mobile_tel:  " + this.state.mobileTel}</div>
            <br />
            <div>{"Show " + "Salary:  " + this.state.salary}</div>
            <br />
            <div>{"Show " + "Sex:  " + this.state.sex}</div>
            <br />
            <div>{"Show " + "Staff_ID:  " + this.state.staffID}</div>
          </div>
        </Panel2>
        <Panel3>
          <h1>Submit Medical Staff Data to Server</h1>
          <form onSubmit={this.handleSubmit}>
            {/* <div>
              <label>
                Staff_ID:
                <input
                  type="text"
                  value={this.state.post_medical_}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br /> */}
            <div>
              <label>
                First_name:
                <input
                  type="text"
                  value={this.state.post_medical_firstName}
                  onChange={this.handleChange('post_medical_firstName')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Last_name:
                <input
                  type="text"
                  value={this.state.post_medical_lastName}
                  onChange={this.handleChange('post_medical_lastName')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Email:
                <input
                  type="text"
                  value={this.state.post_medical_email}
                  onChange={this.handleChange('post_medical_email')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Birthdate:
                <input
                  type="text"
                  value={this.state.post_medical_birthDate}
                  onChange={this.handleChange('post_medical_birthDate')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Address:
                <input
                  type="text"
                  value={this.state.post_medical_address}
                  onChange={this.handleChange('post_medical_address')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Medical_type:
                <input
                  type="text"
                  value={this.state.post_medical_medicalType}
                  onChange={this.handleChange('post_medical_medicalType')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Home_tel:
                <input
                  type="text"
                  value={this.state.post_medical_homeTel}
                  onChange={this.handleChange('post_medical_homeTel')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Mobile_tel:
                <input
                  type="text"
                  value={this.state.post_medical_mobileTel}
                  onChange={this.handleChange('post_medical_mobileTel')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Sex:
                <input
                  type="text"
                  value={this.state.post_medical_sex}
                  onChange={this.handleChange('post_medical_sex')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Salary:
                <input
                  type="number"
                  value={this.state.post_medical_salary}
                  onChange={this.handleChange('post_medical_salary')}
                />
              </label>
            </div>
            <br />
            <div>
              <input
                type="submit"
                value="Submit"
                onClick={() => this.postDoctor(this.state.value)}
              />
            </div>
          </form>
        </Panel3>
        <Panel4>
          <h1>Edit Medical Staff Data as you want</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Staff_ID:
                <input
                  type="text"
                  value={this.state.patch_medical_staffID}
                  onChange={this.handleChange('patch_medical_staffID')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                First_name:
                <input
                  type="text"
                  value={this.state.patch_medical_firstName}
                  onChange={this.handleChange('patch_medical_firstName')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Last_name:
                <input
                  type="text"
                  value={this.state.patch_medical_lastName}
                  onChange={this.handleChange('patch_medical_lastName')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Email:
                <input
                  type="text"
                  value={this.state.patch_medical_email}
                  onChange={this.handleChange('patch_medical_email')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Birthdate:
                <input
                  type="text"
                  value={this.state.patch_medical_birthDate}
                  onChange={this.handleChange('patch_medical_birthDate')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Address:
                <input
                  type="text"
                  value={this.state.patch_medical_address}
                  onChange={this.handleChange('patch_medical_address')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Medical_type:
                <input
                  type="text"
                  value={this.state.patch_medical_medicalType}
                  onChange={this.handleChange('patch_medical_medicalType')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Home_tel:
                <input
                  type="text"
                  value={this.state.patch_medical_homeTel}
                  onChange={this.handleChange('patch_medical_homeTel')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Mobile_tel:
                <input
                  type="text"
                  value={this.state.patch_medical_mobileTel}
                  onChange={this.handleChange('patch_medical_mobileTel')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Sex:
                <input
                  type="text"
                  value={this.state.patch_medical_sex}
                  onChange={this.handleChange('patch_medical_sex')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Salary:
                <input
                  type="number"
                  value={this.state.patch_medical_salary}
                  onChange={this.handleChange('patch_medical_salary')}
                />
              </label>
            </div>
            <br />
            <div>
              <input
                type="submit"
                value="Submit"
                onClick={() => this.patchMedicalStaff(this.state.value)}
              />
            </div>
          </form>
        </Panel4>
        <Panel5>
          <h1> Show Medical Staff Data that you Deleted</h1>
          <div>
            <div>
              <label>
                Staff_ID:
                <input
                  type="text"
                  value={this.state.delete_medical_staffID}
                  onChange={this.handleChange('delete_medical_staffID')}
                />
              </label>
              <input
                type="submit"
                value="Submit"
                onClick={() => this.deleteMedicalStaff(this.state.value)}
              />
            </div>
            {/* <div> */}
            <br />
            <div>{"Show " + "Address: " + this.state.address}</div>
            <br />
            <div>{"Show " + "Birthdate: " + this.state.birthdate}</div>
            <br />
            <div>{"Show " + "Email: " + this.state.email}</div>
            <br />
            <div>{"Show " + "First_name: " + this.state.firstName}</div>
            <br />
            <div>{"Show " + "Home_tel: " + this.state.homeTel}</div>
            <br />
            <div>{"Show " + "Last_name: " + this.state.lastName}</div>
            <br />
            <div>{"Show " + "Medical_type:  " + this.state.medicalType}</div>
            <br />
            <div>{"Show " + "Mobile_tel:  " + this.state.mobileTel}</div>
            <br />
            <div>{"Show " + "Salary:  " + this.state.salary}</div>
            <br />
            <div>{"Show " + "Sex:  " + this.state.sex}</div>
            <br />
            {/* </div> */}
          </div>
        </Panel5>
        <Panel_Dept id="department">
          <div>
            < h2>Department Session</h2>
            <Panel_Dept1>
              <div class="input1">
                Put the depratment's name : &nbsp;
              <label>
                  <input
                    type="text"
                    value={this.state.selectedDeptName}
                    onChange={this.handleChange('selectedDeptName')}
                  />
                </label>
              </div>
              <Button
                onClick={() => this.getLocationbyDeptName(this.state.selectedDeptName)}
              >
                {" "}
                Search
            </Button>
              <br />
              <div>{"Location: " + this.state.showDLocation}</div>
            </Panel_Dept1>
            <Panel_Dept2>
              <div class="input1">
                Put the maneger's ID : &nbsp;
              <label>
                  <input
                    type="text"
                    value={this.state.selectedManagerID}
                    onChange={this.handleChange('selectedManagerID')}
                  />
                </label>
              </div>
              <Button
                onClick={() => this.getDeptNamebyMID(this.state.selectedManagerID)}
              >
                {" "}
                Search
            </Button>
              <br />
              <div>{"Department: " + this.state.showDeptName}</div>
            </Panel_Dept2>
          </div>
        </Panel_Dept>
        <Panel_Patient1 id="patient">
          <div class="input1">
            Please key patient ID : &nbsp;
              <label>
              <input
                type="text"
                value={this.state.selectedPatientID}
                onChange={this.handleChange('selectedPatientID')}
              />
            </label>
          </div>
          <Button
            onClick={() => this.getInformbyPatientID(this.state.selectedPatientID)}
          >
            {" "}
            Search
            </Button>
          <br />
          <h3>Information</h3>
          <div>
            <div>{"First Name: " + this.state.patient_first_name}</div>
            <br />
            <div>{"Last Name: " + this.state.patient_last_name}</div>
            <br />
            <div>{"Sex:  " + this.state.patient_sex}</div>
            <br />
            <div>{"Address: " + this.state.patient_Address}</div>
            <br />
            <div>{"Birth Date: " + this.state.patient_Birthdate}</div>
            <br />
            <div>{"Phone Number: " + this.state.patient_phone_number}</div>
            <br />
            <div>{"Parent Name: " + this.state.parent_first_name + " " + this.state.parent_last_name}</div>
            <br />
            <div>{"Parent Phone Number:  " + this.state.parent_phone_number}</div>
            <br />
            <div>{"Allergy Name:  " + this.state.allergy_name}</div>
          </div>
        </Panel_Patient1>
        <Panel_Patient2>
          <h2>Add New Patient</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                First_name:
                <input
                  type="text"
                  value={this.state.post_Patient_first_name}
                  onChange={this.handleChange('post_Patient_first_name')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Last_name:
                <input
                  type="text"
                  value={this.state.post_Patient_last_name}
                  onChange={this.handleChange('post_Patient_last_name')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Sex:
                <input
                  type="text"
                  value={this.state.post_Patient_sex}
                  onChange={this.handleChange('post_Patient_sex')}
                />
                <div>(eg. Male,Female )</div>
              </label>
            </div>
            <br />
            <div>
              <label>
                Birthdate:
                <input
                  type="text"
                  value={this.state.post_Patient_Birthdate}
                  onChange={this.handleChange('post_Patient_Birthdate')}
                />
                <div>(eg. yyyy-mm-dd)</div>
              </label>
            </div>
            <br />
            <div>
              <label>
                Phone Number:
                <input
                  type="text"
                  value={this.state.post_Patient_phone_number}
                  onChange={this.handleChange('post_Patient_phone_number')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Parent First Name:
                <input
                  type="text"
                  value={this.state.post_Parent_first_name}
                  onChange={this.handleChange('post_Parent_first_name')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Parent Last Name:
                <input
                  type="text"
                  value={this.state.post_Parent_last_name}
                  onChange={this.handleChange('post_Parent_last_name')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Parent Phone Number:
                <input
                  type="text"
                  value={this.state.post_Parent_phone_number}
                  onChange={this.handleChange('post_Parent_phone_number')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Allergy Name:
                <input
                  type="text"
                  value={this.state.post_Allergy_name}
                  onChange={this.handleChange('post_Allergy_name')}
                />
              </label>
            </div>
            <be />
            <div> (eg. 'Peanut allergy,Shrimp') </div>
            <br />
            <div>
              <input
                type="submit"
                value="Add"
                onClick={() => this.postPatient(this.state.value)}
              />
            </div>
          </form>
        </Panel_Patient2>
        <Panel_Appoint1 id="appointment">
          <h1> Show Appointment</h1>
          <div>
            <div>
              <label>
                Patient_ID:
                <input
                  type="text"
                  value={this.state.selectedPatientIDAppointment}
                  onChange={this.handleChange('selectedPatientIDAppointment')}
                />
              </label>
              <label>
                Queue:
                <input
                  type="text"
                  value={this.state.selectedAppointmentQueue}
                  onChange={this.handleChange('selectedAppointmentQueue')}
                />
              </label>
              <input
                type="submit"
                value="Submit"
                onClick={() => this.getAppointmentbyID(this.state.selectedPatientIDAppointment, this.state.selectedAppointmentQueue)}
              />
            </div>
            {/* <div> */}
            <br />
            <div>{"Show " + "Date: " + this.state.get_appointment_date}</div>
            <br />
            <div>{"Show " + "Doctor ID: " + this.state.get_appointment_doctorID}</div>
            <br />
            <div>{"Show " + "Doctor Email: " + this.state.get_appointment_doctorEmail}</div>
            <br />
            <div>{"Show " + "Doctor First_name: " + this.state.get_appointment_doctorFirstName}</div>
            <br />
            <div>{"Show " + "Doctor Last_name: " + this.state.get_appointment_doctorLastName}</div>
            <br />
            <div>{"Show " + "Doctor Sex:  " + this.state.get_appointment_doctorSex}</div>
            <br />
            {/* </div> */}
          </div>
        </Panel_Appoint1>
        <Panel_Appoint2>
          <h1> Add Appointment for that Patient</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Patient ID:
                <input
                  type="text"
                  value={this.state.post_appointment_patientID}
                  onChange={this.handleChange('post_appointment_patientID')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Doctor ID:
                <input
                  type="text"
                  value={this.state.post_appointment_doctorID}
                  onChange={this.handleChange('post_appointment_doctorID')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Date And Time:
                <input
                  type="number"
                  value={this.state.post_appointment_date}
                  onChange={this.handleChange('post_appointment_date')}
                />
              </label>
            </div>
            <br />
            <div>
              <input
                type="submit"
                value="Submit"
                onClick={() => this.postAppointment(this.state.value)}
              />
            </div>
          </form>
        </Panel_Appoint2>
        <Panel_Appoint3>
          <h1> Update Appointment for that Patient</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Appoint ID:
                <input
                  type="text"
                  value={this.state.post_appointment_patientID}
                  onChange={this.handleChange('post_appointment_patientID')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Patient ID:
                <input
                  type="text"
                  value={this.state.post_appointment_patientID}
                  onChange={this.handleChange('post_appointment_patientID')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Doctor ID:
                <input
                  type="text"
                  value={this.state.post_appointment_doctorID}
                  onChange={this.handleChange('post_appointment_doctorID')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Date And Time:
                <input
                  type="number"
                  value={this.state.post_appointment_date}
                  onChange={this.handleChange('post_appointment_date')}
                />
              </label>
            </div>
            <br />
            <div>
              <input
                type="submit"
                value="Submit"
                onClick={() => this.postAppointment(this.state.value)}
              />
            </div>
          </form>
        </Panel_Appoint3>
        <Panel_Appoint4>
          <h1> Delete Appointment</h1>
          <div>
            <div>
              <label>
                Patient_ID:
                <input
                  type="text"
                  value={this.state.selectedPatientIDAppointment}
                  onChange={this.handleChange('selectedPatientIDAppointment')}
                />
              </label>
              <label>
                Queue:
                <input
                  type="text"
                  value={this.state.selectedAppointmentQueue}
                  onChange={this.handleChange('selectedAppointmentQueue')}
                />
              </label>
              <input
                type="submit"
                value="Submit"
                onClick={() => this.getAppointmentbyID(this.state.selectedPatientIDAppointment, this.state.selectedAppointmentQueue)}
              />
            </div>
          </div>
        </Panel_Appoint4>
        <Panel_Appoint5 id="treatment">
          <h1> Show Treatment</h1>
          <div>
            <div>
              <label>
                Patient_ID:
                <input
                  type="text"
                  value={this.state.selectedPatientIDAppointment}
                  onChange={this.handleChange('selectedPatientIDAppointment')}
                />
              </label>
              <label>
                Queue:
                <input
                  type="text"
                  value={this.state.selectedAppointmentQueue}
                  onChange={this.handleChange('selectedAppointmentQueue')}
                />
              </label>
              <input
                type="submit"
                value="Submit"
                onClick={() => this.getAppointmentbyID(this.state.selectedPatientIDAppointment, this.state.selectedAppointmentQueue)}
              />
            </div>
            {/* <div> */}
            <br />
            <div>{"Show " + "Doctor ID: " + this.state.get_appointment_doctorID}</div>
            <br />
            <div>{"Show " + "Cost: " + this.state.get_appointment_doctorEmail}</div>
            <br />
            <div>{"Show " + "Symptom: " + this.state.get_appointment_doctorFirstName}</div>
            {/* </div> */}
          </div>
        </Panel_Appoint5>
        <Panel_Appoint6>
          <h1> Prescribe Medicine</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Patient ID:
                <input
                  type="text"
                  value={this.state.post_appointment_patientID}
                  onChange={this.handleChange('post_appointment_patientID')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Doctor ID:
                <input
                  type="text"
                  value={this.state.post_appointment_doctorID}
                  onChange={this.handleChange('post_appointment_doctorID')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Medicine ID:
                <input
                  type="number"
                  value={this.state.post_appointment_date}
                  onChange={this.handleChange('post_appointment_date')}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Quantity:
                <input
                  type="number"
                  value={this.state.post_appointment_date}
                  onChange={this.handleChange('post_appointment_date')}
                />
              </label>
            </div>
            <br />
            <div>
              <input
                type="submit"
                value="Submit"
                onClick={() => this.postAppointment(this.state.value)}
              />
            </div>
          </form>
        </Panel_Appoint6>
      </Container>
    );
  }
}

export default App;
