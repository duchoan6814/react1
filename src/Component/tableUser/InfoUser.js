import React, { Component } from 'react';
import dataUser from '../dataUser.json'
class InfoUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            numberPhone: this.props.numberPhone,
            phanQuyen: this.props.phanQuyen
        }
    }


    xuLiPhanQuyen = () => {
        if (this.props.phanQuyen == 1) {
            return "Admin"
        }
        else {
            return "Member"
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value });
    }

    render() {

        var item = {
            id: this.props.id,
            name: this.state.name,
            numberPhone: this.state.numberPhone,
            phanQuyen: this.state.phanQuyen
        }
        return (

            <tr>
                <td scope="row">{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.numberPhone}</td>
                <td>{this.xuLiPhanQuyen()}</td>
                <td className="btn-group btn-block">
                    <button onClick={(id) => this.props.remove(this.props.id)} type="button" className="btn btn-danger ">Delete</button>
                    <button onClick={(dt)=>this.props.edit(item)} type="button" className="btn btn-warning">Edit</button>
                </td>



                
            </tr>


        );
    }
}

export default InfoUser;