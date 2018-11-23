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
  font-family: "Pacifico", cursive;
`;
const BoxPanel = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2;
  background: rgba(83, 166, 166, 0.5);
  overflow: hidden;
  height: 450px;
  padding: 15px;
  img {
    display: inline-block;
    margin: 10px;
  }
`;

const Panel = styled.div`
  grid-column: 1 / span 2;
  grid-row: 3;
  background: rgba(166, 166, 83, 0.5);
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
  background: rgba(166, 166, 83, 0.5);
  overflow: hidden;
  height: 500px;
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
  background: rgba(166, 166, 83, 0.5);
  overflow: hidden;
  height: 500px;
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
  background: rgba(166, 166, 83, 0.5);
  overflow: hidden;
  height: 540px;
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
  background: rgba(166, 166, 83, 0.5);
  overflow: hidden;
  height: 540px;
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

const Graph = styled.div`
  position: relative;
  grid-column: 1 / span 2;
  grid-row: 6 / span 2;
  background: rgba(105, 83, 105, 0.5);
  text-align: center;
  overflow: hidden;
  padding-bottom: 15px;
  img {
    position: relative;
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

      patch_medical_staffID: "",
      patch_medical_firstName: "",
      patch_medical_lastName: "",
      patch_medical_email: "",
      patch_medical_birthDate: "",
      patch_medical_medicalType: "",
      patch_medical_sex: "",
      patch_medical_address: "",
      patch_medical_salary: 0,
      patch_medical_homeTel: "",
      patch_medical_mobileTel: "",

      delete_medical_staffID: "",
    };
    this.handleSelectedStaffID = this.handleSelectedStaffID.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = field => event => {
    const value = {}
    value[field] = event.target.value
    console.log(value)
    this.setState(value);
  }

  handleSubmit(e) {
    alert("A name was submitted: " + this.state.value);
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
        <Header>Hospital Management System</Header>
        <BoxPanel>
          <h1> *Interseting Data is Coming to Town* </h1>
        </BoxPanel>
        <Panel>
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
        <Graph>
          {/* {
            (this.state.createdGraph == false) ? "Wait a Minute" : <div><h1>{"Show " + this.state.Xinput + " with " + this.state.Yinput}</h1>
              <Image src={"http://159.89.197.13:80/" + this.state.img} /><br /></div>
          } */}
        </Graph>
      </Container>
    );
  }
}

export default App;
