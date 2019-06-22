import React from 'react';

const AvailabilityStatement = (props) => (
  <>
    {parseInt(props.availQuantity) > 0 ? (
      <>
        <div className="allGreenText">In Stock</div>
        <div className="allText">
          <span className="quantityLabel">Qty: </span>
          <span className="selectQuantity">
            <input
              type="number"
              max={parseInt(props.availQuantity)}
              value="1"
              readOnly
            />
          </span>
          <br />
          <img src="/static/addToCartButton.png" alt="Add to Cart" />
          <br />
          <img src="/static/buyNowButton.png" alt="Buy Now" />
        </div>
      </>
    ) : (
      <span className="allRedText">Out of Stock</span>
    )}
  </>
);

export default AvailabilityStatement;
