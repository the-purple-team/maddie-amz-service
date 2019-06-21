import React from 'react';


const GiftWrapStatement = (props) => (
  <div>
    {
      props.giftWrapAvailable == true ?
        (<span>Gift-wrap available.</span>)
        :
        (<span>Gift-wrap is not available.</span>)
    }
  </div>
);

//FREE Shipping

export default GiftWrapStatement;

