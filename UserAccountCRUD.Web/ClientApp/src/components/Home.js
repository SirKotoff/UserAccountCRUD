import React, { Component } from 'react';
import Usertable from './UserTable';

export class Home extends Component {

    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    onCreateUser = () => {
        let userinfo = {
            Id: this.refs.Id.value,
            Name:this.refs.Name.value,
            Years:this.refs.Years.value,
            Car:this.refs.Car.value,
        };    
        fetch(`https://localhost:5001/api/User/Create?Id=${this.refs.Id.value}&Years=${this.refs.Years.value}&Name=${this.refs.Name.value}&Car=${this.refs.Car.value}`, {
            method: 'POST',
            mode:'cors',
            headers: { 'Content-type': 'application/json' },
            body:JSON.stringify(userinfo)
            
        }).then(r => r.json()).then(res => {
            if (res) {
                this.setState({ message: '(-_-)' });
            }
           
        })
    }

  render() {
      const formStyle = {

          height: '416px',
          width: '361px',
          background: '#403762',
          'border-radius': '30px',
          outline: '0',
          position: 'fixed',
          top: '20%',
          left: '40%',
      }
      const inputStyle = {
          width: '307px',
          height: '48px',
          background: '#D9D9D9',
          'border-radius': '40px',
          margin: '20px',
          outline: 'none',
          border: 0,
          'font-size': '20px',
      }
      const BtnStyle = {
          width: '154px',
          height: '48px',
          background: '#2C2644',
          'border-radius': '40px',
          'font- family': 'Inter',
          'font-style': ' normal',
          'font-weight': '700',
          'font-size': '20px',
          color: '#FFFFFF',
          border: '0',
          margin: '0 auto',
          display: 'block',
      }
      return (
          <div>
              <form style={formStyle} className="shadow-lg">
                 <input style={inputStyle} required placeholder="Id" ref="Id" />
                  <input style={inputStyle} required placeholder="Name" ref="Name" />
                  <input type="number" min="1" max="2500" style={inputStyle} required placeholder="Years" ref="Years" />
                  <select style={inputStyle} required aria-label="Cars" ref="Car">       
                      <option value="BMW">BMW</option>
                      <option value="VW">VW</option>
                      <option value="Honda">Honda</option>
                  </select>               
                  <button style={BtnStyle} onClick={this.onCreateUser}>Save</button>
                  <p className="text-white">{this.state.message}</p>              
              </form>
              <Usertable />
          </div>
      );
  }
}
