import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phanQuyen:1
        }
    }

    
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value });
    }

    isChangeSelect = (event) => {
        var name = event.target.name;
        var value;
        if(event.target.value == "Member"){
            this.setState({phanQuyen:2});
        }
        else{
            this.setState({phanQuyen:1});
        }
        
    }

    resetInput = () => {
        this.refs.someName1.value = ''
        this.refs.someName2.value = ''
        console.log('ham dang chay');
        
    }

    render() {
        const uuidv1 = require('uuid/v1');
        var item = {
            id:uuidv1(),
            name:this.state.name,
            numberPhone:this.state.numberPhone,
            phanQuyen:this.state.phanQuyen
        }
        return (
            <div>
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#myModalAddUser">Add User</button>


                <div className="modal" id="myModalAddUser">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Add User</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="name">Họ Tên</label>
                                    <input ref="someName1" onChange={(event) => this.isChange(event)} type="text" name="name" id className="form-control" placeholder aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="numberPhone">Số Điện Thoại</label>
                                    <input ref="someName2" onChange={(event) => this.isChange(event)} type="number" name="numberPhone" id className="form-control" placeholder aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phanQuyen">Phân Quyền</label>
                                    <select onChange={(event) => this.isChangeSelect(event)} className="form-control" name="phanQuyen" id>
                                        <option>Admin</option>
                                        <option>Member</option>
                                    </select>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button onClick={(dt)=>{this.props.getInfor(item);this.resetInput();}} type="button" className="btn btn-success" data-dismiss="modal">Add</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddUser;