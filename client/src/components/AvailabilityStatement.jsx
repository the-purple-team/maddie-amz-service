import React from 'react';


const AvailabilityStatement = (props) => (
  <div>
    {
      parseInt(props.availQuantity) > 0 ?
        (
          <div>
            <div className="allGreenText">In Stock</div>
            <div className="allText">
              <span className="quantityLabel">Qty: </span>
              <span className="selectQuantity">
                <input type="number" max={parseInt(props.availQuantity)} value="1" readOnly ></input>
              </span>
              <br />
              <img src="/static/addToCartButton.png" alt="Add to Cart" ></img>
              <br />
              <img src="/static/buyNowButton.png" alt="Buy Now" ></img>
            </div>
          </div>
        )
        :
        (<span className="allRedText">Out of Stock</span>)
    }
  </div>
);

export default AvailabilityStatement;

