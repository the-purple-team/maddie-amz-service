import React from 'react';
import { AllText, SelectQuantity } from './elements.jsx';

const AvailabilityStatement = (props) => (
  <>
    {parseInt(props.availQuantity) > 0 ? (
      <>
        <div style={{ color: 'green', fontSize: '13px' }}>In Stock</div>
        <AllText>
          <span style={{ padding: '0px 5px 2px 2px' }}>Qty: </span>
          <SelectQuantity
            type="number"
            max={parseInt(props.availQuantity)}
            value="1"
            readOnly
          />
          <br />
          <img src="/static/addToCartButton.png" alt="Add to Cart" />
          <br />
          <img src="/static/buyNowButton.png" alt="Buy Now" />
        </AllText>
      </>
    ) : (
      <span style={{ color: 'red', fontSize: '13px' }}>Out of Stock</span>
    )}
  </>
);

export default AvailabilityStatement;
