import React, { Component } from 'react';
import '../style/App.scss';
import UserInfo from "../components/UserInfo";
import CompareUser from "../components/CompareUser"

class App extends Component{
  constructor() {
    super();
    this.state = {
      userData: [],
      comapareData: []
    }
  }
  componentWillMount = () => {
    fetch(`https://gist.githubusercontent.com/SiddharthShringi/e2ff958eb9a6fa2f8c2d412e3613fae7/raw/f336d8a27a46a5f0094d0796d326eaf1b1f86c0a/compareProfile.json`).then(res => res.json()).then(d => this.setState({userData: d.users}))
  }

  handleClick = (e) => {
    let id = e.target.id;
    let validId;
    if (this.state.comapareData.includes(this.state.userData[id])) {return}
    else {validId = [...this.state.comapareData, this.state.userData[id]]}

    this.setState({
      comapareData: validId
    })

    let data = document.querySelector('.table-data');
    data.style.display = "grid";
  }

  handleDelete = (e) => {
    let id = e.target.id;
    this.setState((state, props) => {
      return {
        state: [...this.state.comapareData, this.state.comapareData.splice(id, 1)]
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <UserInfo user={this.state.userData} click={this.handleClick} />
        <div className="compare">Compare User</div>
        <div className="table-data"> 
          <div className="table-body">
            <div className="user-tr">Name: </div>
            <div className="user-tr">Public Repos: </div>
            <div className="user-tr">Followers: </div>
          </div>  
          <div>
            <CompareUser user={this.state.comapareData} click={this.handleDelete} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
