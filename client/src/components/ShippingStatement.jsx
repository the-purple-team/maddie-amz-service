import React from 'react';


const ShippingStatement = (props) => (
  <div>
    {
      props.fulfilledBy == "amazon" ?
        (<span>Free Shipping on orders over $25 shipped by Amazon or get Fast, Free Shipping with Amazon Prime</span>)
        :
        (<span>Ships in {props.expectedShipping}</span>)
    }
  </div>
);

//FREE Shipping

export default ShippingStatement;

