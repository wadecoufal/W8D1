import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange (type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    }
  }

  render () {
    const { formType, errors } = this.props;

    const header = formType === 'login' ?
      <h1>Log In!</h1>
      :
      <h1>Sign Up!</h1>

    const link = this.props.match.path === '/signup' ?
      <Link to='/login'>Login!</Link>
      :
      <Link to='/signup'>Sign Up!</Link>

    return (

      <div>
        {header}
        {link}
        {errors.map( error => {
          return error
        })}

        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input onChange={this.handleChange('username')} type="text" value={this.state.username}></input>
          </label>

          <label>
            Password:
            <input onChange={this.handleChange('password')} type="password" value={this.state.password}></input>
          </label>

          <button>Submit</button>
        </form>
      </div>
    )
  }

}

export default withRouter(SessionForm);
