import React, { Component } from 'react';
import styled from 'styled-components';
import config from './config';

const Container = styled.div`
  width:100%;
  display : grid;
  grid-template-columns : 800px 800px;
  grid-gap: 20px 20px;
  min-width : 0;
  min-height : 0;
  font-family: 'Roboto', sans-serif;
`

const Image = styled.img`
  width : 500px;
  min-width : 0;
  min-height : 0;
`

const Image2 = styled.img`
  width : 300px;
  margin-left : 450px;
  margin-top : 50px;
  grid-column :1;
  grid-row : 1;
  text-align : center;
  min-width : 0;
  min-height : 0;
`

const Header = styled.div`
  margin-top: 40px;
  margin-bottom : 30px;
  font-size : 56px;
  grid-column : 1/ span2;
  grid-row : 1;
  text-align : center;
  font-family: 'Pacifico', cursive;
`
const BoxPanel = styled.div`
  grid-column : 1/ span 2;
  grid-row : 2;
  background : rgba(83,166,166,0.5);
  overflow: hidden;
  height : 450px;
  padding :15px;
  img{
    display:inline-block;
    margin : 10px;
  }
`

const Panel = styled.div`
  grid-column : 1/ span 2;
  grid-row : 3;
  background : rgba(166,166,83,0.5);
  overflow: hidden;
  height : 150px;
  padding :15px;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
    margin-left : 20px;
  }
`
const Panel2 = styled.div`
  grid-column : 1;
  grid-row : 4;
  background : rgba(166,166,83,0.5);
  overflow: hidden;
  height : 500px;
  padding :15px;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
    margin-left : 20px;
  }
`
const Panel3 = styled.div`
  grid-column : 2;
  grid-row : 4;
  background : rgba(166,166,83,0.5);
  overflow: hidden;
  height : 500px;
  padding :15px;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
    margin-left : 20px;
  }
`

const Graph = styled.div`
  position : relative;
  grid-column : 1/ span 2;
  grid-row : 5/ span 2;
  background : rgba(105,83,105,0.5);
  text-align : center;
  overflow: hidden;
  padding-bottom : 15px;  
  img{
    position :relative;
  }
`

const Selector = styled.select`
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    font-size:14px;
    padding : 8px;
    width : 250px;
    color :#4b4f5d;
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
    &:hover{
        background-color : #f6f6f7;
        cursor: pointer;
        
    }
`;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Xinput: "",
      Yinput: "",
      firstData: "",
      secondData: "",
      img: "",
      selected_Xinput: "Overall",
      selected_Yinput: "StudentStaff",
      selected_firstData: "Top 500",
      selected_secondData: "None",
      createdGraph: false,
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
    }
    this.handleXinput = this.handleXinput.bind(this)
    this.handleYinput = this.handleYinput.bind(this)
    this.handleFirstData = this.handleFirstData.bind(this)
    this.handleSecondData = this.handleSecondData.bind(this)
  }

  async createGraph(Xinput, Yinput, firstData, secondData) {
    let formData = new FormData();
    formData.append('Xinput', Xinput);
    formData.append('Yinput', Yinput);
    formData.append('firstData', firstData);
    formData.append('secondData', secondData);
    var response = await fetch(`${config.apiPath}/api/medical_staff/2`,
      {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data'
        },
        // method: 'post',
        // body: formData
      })
    var data = await response.json()
    console.log(data)
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
      staffID: data.Staff_ID,
    })

  }

  XinputList() {
    var returnVal = [];
    var gList = ['Overall', 'Teaching', 'Research', 'Citations', 'IndustryIncome', 'InterOutlook', 'StudentStaff', 'InterStudent', 'Female'];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>)
    }
    return returnVal
  }

  YinputList() {
    var returnVal = [];
    var gList = ['Overall', 'Teaching', 'Research', 'Citations', 'IndustryIncome', 'InterOutlook', 'StudentStaff', 'InterStudent', 'Female'];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>)
    }
    return returnVal
  }

  firstDataList() {
    var returnVal = [];
    var gList = ['Top 500', 'Top 200', 'USA', 'China'];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>)
    }
    return returnVal
  }

  secondDataList() {
    var returnVal = [];
    var gList = ['None', 'Top 200', 'USA', 'China'];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>)
    }
    return returnVal
  }

  handleXinput(e) {
    this.setState({
      selected_Xinput: e.target.value
    })
  }
  handleYinput(e) {
    this.setState({
      selected_Yinput: e.target.value
    })
  }
  handleFirstData(e) {
    this.setState({
      selected_firstData: e.target.value
    })
  }
  handleSecondData(e) {
    this.setState({
      selected_secondData: e.target.value
    })
  }
  render() {
    console.log(this.state)
    return (
      <Container>
        {/* <Image2 src="http://static.siuk-thailand.com/assets/images/thelogoforcms.jpg" align="middle" /> */}
        <Header>Hospital Management System</Header>
        <BoxPanel>
          <h1> Score Box Plot </h1>
          <Image src="/img/1.png" />
          <Image src="/img/3.png" />
          <Image src="/img/4.png" />
        </BoxPanel>
        <Panel>
          <h2>What do you want to know?</h2>
          <div class="input1">
            Xinput : &nbsp;
          <Selector value={this.state.selected_Xinput} onChange={this.handleXinput}>
              {this.XinputList()}
            </Selector>
          </div>
          <div class="input2">
            Yinput : &nbsp;
          <Selector value={this.state.selected_Yinput} onChange={this.handleYinput}>
              {this.YinputList()}
            </Selector>
          </div>
          <div class="input3">
            Main Data : &nbsp;
          <Selector value={this.state.selected_firstData} onChange={this.handleFirstData}>
              {this.firstDataList()}
            </Selector>
          </div>
          <div class="input4">
            Second Data : &nbsp;
          <Selector value={this.state.selected_secondData} onChange={this.handleSecondData}>
              {this.secondDataList()}
            </Selector>
          </div>
          <Button onClick={() => this.createGraph(this.state.selected_Xinput, this.state.selected_Yinput, this.state.selected_firstData, this.state.selected_secondData)} > Show Pls</Button>
        </Panel>
        <Panel2>
          <div>
            <h1> Show Medical Staff Data as you requested</h1>
            <div>{"Show " + "Address: " + this.state.address}</div>
            <br /><div>{"Show " + "Birthdate: " + this.state.birthdate}</div>
            <br /><div>{"Show " + "Email: " + this.state.email}</div>
            <br /><div>{"Show " + "First_name: " + this.state.firstName}</div>
            <br /><div>{"Show " + "Home_tel: " + this.state.homeTel}</div>
            <br /><div>{"Show " + "Last_name: " + this.state.lastName}</div>
            <br /><div>{"Show " + "Medical_type:  " + this.state.medicalType}</div>
            <br /><div>{"Show " + "Mobile_tel:  " + this.state.mobileTel}</div>
            <br /><div>{"Show " + "Salary:  " + this.state.salary}</div>
            <br /><div>{"Show " + "Sex:  " + this.state.sex}</div>
            <br /><div>{"Show " + "Staff_ID:  " + this.state.staffID}</div>
          </div>
        </Panel2>
        <Panel3>
          <div>
            {"Show " + this.state.Yinput}
          </div>
        </Panel3>
        <Graph>
          {
            (this.state.createdGraph == false) ? "Wait a Minute" : <div><h1>{"Show " + this.state.Xinput + " with " + this.state.Yinput}</h1>
              <Image src={"http://159.89.197.13:80/" + this.state.img} /><br /></div>
          }

        </Graph>
      </Container>
    );
  }
}

export default App;
