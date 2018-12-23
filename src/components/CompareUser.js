import React from "react";

export default function CompareUser(props) {
  const {user} = props;
  if (user.length === 0) {return 'Please Click on Compare button!!!'};
  return (
    <div className="hero-wrapper">
      {
        user && user.map((v, i) => {
          return (
            <div className="main-container" key={i}>
              <img className="user-img" src={v.avatar_url} alt="user profile"/>
              <div className="user-name">Name: {v.name}</div>
              <div className="user-repo">Public Repos: {v.public_repos}</div>
              <div className="user-follower">Followers: {v.followers}</div>
              <div className="btn-div">
                <button id={i} className="compare-btn" onClick={props.click}>Remove</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
