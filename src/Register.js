import React from 'react';
import 'tachyons/css/tachyons.min.css'; // Import Tachyons CSS

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., sending data to a server)
  };

  render() {
    return (
      <div className="pa4">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="measure">
            <label className="db fw6 lh-copy f6" htmlFor="name">
              Name
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="name"
              id="name"
              onChange={this.handleInputChange}
              value={this.state.name}
              required
            />
          </div>
          <div className="measure">
            <label className="db fw6 lh-copy f6" htmlFor="email">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email"
              id="email"
              onChange={this.handleInputChange}
              value={this.state.email}
              required
            />
          </div>
          <div className="measure">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
            </label>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              id="password"
              onChange={this.handleInputChange}
              value={this.state.password}
              required
            />
          </div>
          <div className="mt3">
            <button
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt3">
          <p>Or sign up with:</p>
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            onClick={() => alert('Sign up with Google')}
          >
            Google
          </button>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
