import React, { Component } from 'react'
import AgeFormContainer from '../../user/ui/ageform/AgeFormContainer'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }
  componentWillMount() {
    console.log("ispisuje props ovog")
    console.log(this.props)
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <AgeFormContainer/>
            <p><strong>Congratulations {this.props.authData.name} ! {this.props.authData.surname}</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
