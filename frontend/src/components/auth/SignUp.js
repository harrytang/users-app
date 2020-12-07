import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = this.state;

    axios
      .post('http://localhost:5000/users', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      })
      .then((res) => {
        const result = res.data.data;
        alert('Congrats... Your account is created. Log in to continue');
        window.location.href = 'http://localhost:3000/signin';
      })
      .catch((err) => {
        console.log(err.response);
        alert(`${err.response.data.message}`);
        this.setState({ username: '', email: '', password: '' });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className='form-group'>
          <label>User name</label>
          <input
            onChange={this.handleChange}
            id='username'
            type='text'
            className='form-control'
            placeholder='User name'
            value={this.state.username}
          />
        </div>

        <div className='form-group'>
          <label>Email address</label>
          <input
            onChange={this.handleChange}
            type='email'
            className='form-control'
            placeholder='Enter email'
            id='email'
            value={this.state.email}
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            onChange={this.handleChange}
            type='password'
            className='form-control'
            placeholder='Enter password'
            id='password'
            value={this.state.password}
          />
        </div>

        <button type='submit' className='btn btn-block bg-cl'>
          Sign Up
        </button>
        <p className='forgot-password text-right'>
          Already registered <a href='/signin'>Sign In?</a>
        </p>
      </form>
    );
  }
}

export default SignUp;
