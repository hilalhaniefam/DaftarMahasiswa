import React, { Component } from "react";
//import axios from "axios";
import '../styles/homepage.css';
export default class Homepage extends Component {


    render() {
        return (
            <div className="page-content page-container" id="page-content">
            <div className="padding">
              <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                  <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                      <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                          <div className="m-b-25">
                               <img src="/Hilal.jpg" alt="User-Profile-Image" /> </div>
                          <h6 className="f-w-600">Hilal Haniefam</h6>
                          <p>Mahasiswa</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="card-block">
                          <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Email</p>
                              <h6 className="text-muted f-w-400">hhaniefam10@gmail.com</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Phone</p>
                              <h6 className="text-muted f-w-400">085229513071</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
