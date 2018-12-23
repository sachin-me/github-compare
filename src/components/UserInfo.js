import React from 'react';

export default function UserInfo(props) {
  var {user} = props;
  if (user.length === 0) {return 'Loading...'}
  return (
    <div className="hero-wrapper">
    {
      user && user.map((v, i) => {
      return (
        <div className="main-container" key={i}>
          <div className="user-login">User Name: {v.login || 'Loading...'}</div>
          <div>
            <img className="user-img" src={v.avatar_url || 'Loading...'} alt=""/>
          </div>
          <div className="user-name">Name: {v.name || 'Loading...'}</div>
          <div className="user-bio">Bio: {v.bio || 'Loading...'}</div>
          <div className="user-repo">Public Repos: {v.public_repos || 'Loading...'}</div>
          <div className="user-follower">Followers: {v.followers || 'Loading...'}</div>
          <div className="btn-div">
            <button className="compare-btn" onClick={props.click} id={i}>Compare</button>
          </div>
        </div>
      )})
    }
    </div>
  )
}