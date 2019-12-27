import React, { Component } from 'react';
import InfoUser from './InfoUser';
import dataUser from '../dataUser.json'
import EditUser from './EditUser';

class TableUser extends Component {



    render() {



        return (
            <div>
                <div className="tableOfPage">
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ Tên</th>
                                    <th>Số Điện Thoại</th>
                                    <th>Phân Quyền</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.dataUserProps.map((value, key) => {
                                        if (this.props.trangThaiClickEdit) {
                                            if (this.props.stateEditUser.id == value.id) {
                                                this.propscount++;
                                                return <EditUser id={value.id} saveInfoUserEdit={(user)=>this.props.saveInfoUserEdit(user)} closeEditClick={()=>this.props.closeEditClick()} stt={key+1} name={this.props.stateEditUser.name} numberPhone={this.props.stateEditUser.numberPhone} />
                                            }

                                            else
                                                return <InfoUser edit={(id) => this.props.edit(id)} remove={(id) => this.props.remove(id)} key={value.id} stt={key+1} id={value.id} name={value.name} numberPhone={value.numberPhone} phanQuyen={value.phanQuyen} />
                                        }
                                        else {

                                            return <InfoUser edit={(id) => this.props.edit(id)} remove={(id) => this.props.remove(id)} key={value.id} stt={key+1} id={value.id} name={value.name} numberPhone={value.numberPhone} phanQuyen={value.phanQuyen} />
                                        }

                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>
        );
    }
}

export default TableUser;