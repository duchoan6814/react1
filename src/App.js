
import './App.css';
import Navbar from './Component/Navbar';
import Option from './Component/Option/Option';
import TableUser from './Component/tableUser/TableUser';
import dataUser from './Component/dataUser.json'
import React, { Component } from 'react';
import EditUser from './Component/tableUser/EditUser';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataUser,
      fullList: true,
      trangThaiClickEdit:false
    }
  }

  arraySearch = [];
  getTextSearch = (dt) => {
    this.setState({ searchText: dt, fullList: false });
  }

  editUserCloseOnclick = () => {
    this.setState({trangThaiClickEdit:false});
  }

  editUser = (itemEditUser) => {
    this.setState({trangThaiClickEdit:true});
    this.setState({itemEditUser});
    
  }

  checkFullList = () => {
    if (this.state.fullList) {
      return <TableUser saveInfoUserEdit={(user)=>this.saveInfoUserEdit(user)} closeEditClick={()=>this.editUserCloseOnclick()} trangThaiClickEdit={this.state.trangThaiClickEdit} stateEditUser={this.state.itemEditUser} edit={(item) => this.editUser(item)} remove={(id) => this.removeUser(id)} dataUserProps={this.state.data} />
    } else {
      return <TableUser saveInfoUserEdit={(user)=>this.saveInfoUserEdit(user)} closeEditClick={()=>this.editUserCloseOnclick()} trangThaiClickEdit={this.state.trangThaiClickEdit} stateEditUser={this.state.itemEditUser} edit={(item) => this.editUser(item)} remove={(id) => this.removeUser(id)} dataUserProps={this.arraySearch} />
    }
  }

  getInforAddUser = (dt) => {
    this.state.data.push(dt);
    this.setState({ fullList: true });
    console.log(this.state);

  }

  removeUser = (id) => {
    this.state.data.map((value, key) => {
      if (value.id == id) {
        this.state.data.splice(key, 1);
      }
    })

    var items = this.state.data;
    this.setState({ items });
    console.log(this.state);

  }

  saveInfoUserEdit = (userChange) => {
    var tempData = this.state.data;
    tempData.map((value,key)=>{
      if(value.id == userChange.id){
        value.name = userChange.name;
        value.numberPhone = userChange.numberPhone;
        value.phanQuyen = userChange.phanQuyen;
      }
    })
    this.setState({trangThaiClickEdit:false});
    this.setState({tempData});
    console.log(this.state);
    
  }

  render() {

    this.arraySearch = []
    this.state.data.forEach(element => {
      if (element.name.indexOf(this.state.searchText) !== -1) {
        this.arraySearch.push(element);

      }
    });




    return (
      <div>
        <Navbar />
        <Option getInfor={(dt) => this.getInforAddUser(dt)} getText={(dt) => this.getTextSearch(dt)} />
        {this.checkFullList()}

      </div>
    )

  }
}


export default App;

