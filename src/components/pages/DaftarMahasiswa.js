import React, { Component } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default class DaftarMahasiswa extends Component {
  constructor(props) {
    super(props);
    this.loadDetail=this.loadDetail.bind(this)
    this.state = {
      listData: JSON.parse(localStorage.getItem('mahasiswa')),
      visible: false,
    };
  }

  loadDetail() {
    var list = [
      {
        nim: '21120118130078',
        nama: 'Steven',
        ttl: 'Jakarta, 4 september 2000',
        asal: 'Jakarta',
        hobi: 'Futsal',
        foto: '/steven.jpg'
      },
      {
        nim: '21120118130055',
        nama: 'Mark',
        ttl: 'Banten, 20 Januari 2000',
        asal: 'Banten',
        hobi: 'Futsal',
        foto: '/mark.jpg'
      },
      {
      nim: '21120118140092',
      nama: 'Jhonson',
      ttl: 'Depok, 17 Januari 2000',
      asal: 'Depok',
      hobi: 'Bermain Game',
      foto: '/jhonson.jpg'
    },
    {
    nim: '21120118130047',
    nama: 'Hilal Haniefam',
    ttl:  'Cilacap, 2 September 2000',
    asal: 'Cilacap',
    hobi: 'Bermusik',
    foto: '/Hilal.jpg'
    },
    {
    nim: '21120118130100',
    nama: 'Sujono',
    ttl:  'Bogor, 7 September 2000',
    asal: 'Bogor',
    hobi: 'Bermusik',
    foto: '/sujono.jpg'
    }
    ]

    localStorage.setItem('mahasiswa', JSON.stringify(list))
    return dispatch => {
      dispatch({
        type: 'LOADING_MAHASISWA'
      })
    }
  }

handleButton = (first_name) => {
    alert(first_name);
  };
  handleModal = (results) => {
    this.setState({
      visible: true,
    nama : results.nama,
    nim  : results.nim,
    ttl  : results.ttl,
    asal : results.asal,
    hobi : results.hobi,
    foto : results.foto
    });
  };

  render() {
    this.loadDetail()
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="boxWhite" style={{ backgroundColor: "black" }}>
          <center>
            <h1 style={{ color: "white" }}> Daftar Mahasiswa</h1>
          </center>
          <Modal
            title="Detail Mahasiswa"
            centered
            visible={this.state.visible}
            onOk={() => this.setState({ visible: false })}
            onCancel={() => this.setState({ visible: false })}
            width={500}
          >
            <div style={{ textAlign: "left" }}>
              <p style= {{ fontSize: 13}}>Nama Lengkap : {this.state.nama}</p>
              <p style= {{ fontSize: 13}}>NIM          : {this.state.nim}</p>
              <p style= {{ fontSize: 13}}>TTL          : {this.state.ttl}</p>
              <p style= {{ fontSize: 13}}>asal         : {this.state.asal}</p>
              <img src={this.state.foto}></img>
            </div>
          </Modal>

          {this.state.listData.map((results) => {
            return (
              <div className="card" key={results.id} style={{ backgroundColor: "white" }}>
                <div className="card-body">
                  <h6 className="card-title" style={{ color: "black", fontSize: 16, fontWeight: 'bold', fontFamily: 'monospace' }}>Nama : {results.nama}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                  </h6>
                </div>
                <button
                  className="button"
                  onClick={() => this.handleModal(results)}
                  style={{ color: "white", backgroundColor: "gray" }}
                >
                  {" "}
                    Lihat Detail Mahasiswa
                  </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}