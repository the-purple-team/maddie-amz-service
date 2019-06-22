import React from 'react';


const UserLocationStatement = (props) => (
  <div>
    {
      props.userZip !== null ?
        (
          <div>
            <span><img src="/static/locationPin.png" alt="" ></img></span>
            <span >Deliver to {props.userZip} </span>
          </div>
        )
        :
        (<br />)
    }
  </div>
);




export default UserLocationStatement;

