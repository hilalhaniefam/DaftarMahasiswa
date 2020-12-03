import React, { Component } from "react";
//import axios from "axios";
import './styles/header.css'
export default class Header extends Component {


    render() {
        return (
            <div className="header">
                <a href="#default" class="logo">Aplikasi Daftar Mahasiswa </a>
                <div className="header-right">
                    <a className="active" href="/myprofile">My Profile</a>
                    <a href="/listmahasiswa">List Mahasiswa</a>
                </div>
            </div>
        );
    }
}