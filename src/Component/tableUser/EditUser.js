import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phanQuyen:1,
            name: this.props.name,
            numberPhone: this.props.numberPhone
        }
    }
    

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value});

        
    }
    render() {
        var item = {
            id : this.props.id,
            name: this.state.name,
            numberPhone: this.state.numberPhone,
            phanQuyen: this.state.phanQuyen
        }
        
        return (
            <tr>
                <td scope="row">{this.props.stt}</td>
                <td>
                    <div class="form-group">
                        <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="name" id aria-describedby="helpId" placeholder={this.props.name} />
                    </div>
                </td>
                <td>
                    <div class="form-group">
                        <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="numberPhone" id aria-describedby="helpId" placeholder={this.props.numberPhone} />
                    </div>
                </td>
                <td>
                    <div class="form-group">
                      <label for=""></label>
                      <select onChange={(event)=>this.isChange(event)} className="form-control" name="phanQuyen" id="">
                        <option>Admin</option>
                        <option>Member</option>
                      </select>
                    </div>
                </td>
                <td className="btn-group btn-block">
                    <button onClick={()=>this.props.closeEditClick()}  type="button" className="btn btn-danger ">Close</button>
                    <button onClick={(user)=>this.props.saveInfoUserEdit(item)} type="button" className="btn btn-warning">Save</button>
                </td>
            </tr>
        );
    }
}

export default EditUser;