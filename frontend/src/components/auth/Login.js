import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = this.state;

    axios
      .post('http://localhost:5000/tokens', {
        username: loggedInUser.username,
        password: loggedInUser.password,
      })
      .then((res) => {
        const token = res.data.token;
        //Set token to local storage
        localStorage.setItem('token', token);

        alert(`Signed In Successfully!`);
        window.location.href = 'http://localhost:3000/dashboard';
      })
      .catch((err) => {
        alert(`${err.response.data}`);
        //this.setState({ username: '', email: '', password: '' });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter username'
            id='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            id='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        <div className='form-group'>
          <div className='custom-control custom-checkbox '>
            <input
              type='checkbox'
              className='custom-control-input '
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>

        <button type='submit' className='btn btn-block bg-cl'>
          Submit
        </button>
        <p className='forgot-password text-right'>
          Forgot <a href='#'>password?</a>
        </p>
      </form>
    );
  }
}

export default Login;
