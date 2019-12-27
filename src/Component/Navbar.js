import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="  ">User Manager</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto">
                            <a className="nav-a href" href="/">Đăng Nhập</a>
                            <li className="nav-item ml-3">
                                <a className="nav-a href" href="/">Đăng Ký</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;