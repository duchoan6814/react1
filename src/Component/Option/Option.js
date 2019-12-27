import React, { Component } from 'react';
import AddUser from './AddUser';
import Search from './Search';

class Option extends Component {
    render() {
        return (
            <div className="searchAndAdd my-5">
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-12 col-xs-12 col-md-6 mb-3">
                            <Search getText={(dt)=>this.props.getText(dt)}/>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                                <AddUser getInfor={(dt)=>this.props.getInfor(dt)} />
                            </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
        
export default Option;