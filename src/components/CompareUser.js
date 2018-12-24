import React from "react";

export default function CompareUser(props) {
  const {user} = props;
  if (user.length === 0) {return 'Please Click on Compare button!!!'};
  return (
    <div className="compare-wrapper">
      {
        user && user.map((v, i) => {
          return (
            <div key={i}>
              <div className="user-tr">{v.name}</div>
              <div className="user-tr">{v.public_repos}</div>
              <div className="user-tr">{v.followers}</div>
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
