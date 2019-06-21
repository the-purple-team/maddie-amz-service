import React from 'react';


const SoldFulfilledStatement = (props) => (
  <div>
    {
      props.soldBy === props.fulfilledBy ?
        (
          <div>
            Sold and Fulfilled by {props.soldBy}.
          </div>
        )
        :
        (
          <div>
            Sold by {props.soldBy} and Fulfilled by {props.fulfilledBy}.
          </div>
        )
    }
  </div>
);

export default SoldFulfilledStatement;

