import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:""
        }
    }
    
    saveTextInTemp = (event)=>{
        this.setState({tempValue:event.target.value});
    }
    render() {
        return (
            <form className="form-inline">
                <input onChange={(event)=>this.saveTextInTemp(event)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <div onClick={(dt)=>this.props.getText(this.state.tempValue)} className="btn btn-outline-success my-2 my-sm-0" >Search</div>
            </form>
        );
    }
}

export default Search;