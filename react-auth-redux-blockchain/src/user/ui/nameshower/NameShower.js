import React, { Component } from 'react'

class NameShower extends Component {
  constructor(props) {
    super(props)
    this.state = {
      surname: this.props.surname
    }
  }

  onInputChange(event) {
    this.setState({ surname: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.surname.length < 2)
    {
      return alert('Please fill in your name.')
    }
    this.props.onProfileFormSubmit(this.state.surname)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={this.state.surname} onChange={this.onInputChange.bind(this)} placeholder="Surname" />
          <span className="pure-form-message">This is a required field.</span>
          <br />
          <button type="submit" className="pure-button pure-button-primary">Update</button>
        </fieldset>
      </form>
    )
  }
}

export default NameShower