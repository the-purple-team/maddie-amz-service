import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ShippingStatement from './ShippingStatement.jsx';



class Pricing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: {},
      productId: null,
      changed: false
    };

    this.handleLoad = this.handleLoad.bind(this);
  }


  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
    this.handleLoad();

  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad);
  }

  handleLoad(queryProductId) {
    queryProductId = 1;
    $.ajax({
      url: "http://localhost:3030/product/:" + queryProductId,
      type: "GET",
      success: ((serverData) => {
        console.log('serverData ' + typeof serverData + ', ' + serverData);
        return serverData;
      }),
      error: ((err) => {
        console.log("error getting data from server " + err);
        return {};
      })
    }).then((dataReturned) => {
      var dataParsed = JSON.parse(dataReturned);
      var recId = dataParsed.id || queryProductId;
      this.setState({
        productDetails: dataParsed,
        productId: recId
      });
      this.setState({
        changed: ((this.state.changed) ? false : true)
      });

    });
  }

  render() {
    return (
      <div>
        <div style={pricingStyle.wholeBox}>
          <div style={pricingStyle.priceText}>
            ${this.state.productDetails.price}
          </div> <br />
          <span>
            {
              this.state.productDetails.free_delivery == false ?
                (<span style={pricingStyle.allBlueSmallText}>& Free Shipping</span>)
                :
                <ShippingStatement fulfilledBy={this.state.productDetails.fulfilled_by} expectedShipping={this.state.productDetails.expected_shipping} />
            }
          </span>
          <br />
          <div style={pricingStyle.deliveryText}>
            Free Delivery TODO <br />
            if you order within TODO hrs TODO mins.
            TODO!!
        </div>
          <div style={pricingStyle.stockAvailabilityText}>
            In Stock / Out of Stock here ! TODO
        </div>
          <div style={pricingStyle.allText}>
            <span style={pricingStyle.quantityLabel}>Qty: </span>
            <span style={pricingStyle.selectQuantity}>Dropdown TODO</span>
          </div>
          <div style={pricingStyle.paddingForButtons}>
            Add to Cart Button here ! TODO
        </div>
          <div style={pricingStyle.paddingForButtons}>
            Buy Now Button here ! TODO
        </div>
          <div style={pricingStyle.soldFulfilledText}>
            Sold by here and Fulfilled by here ! TODO
        </div>
          <div style={pricingStyle.allText}>
            Gift Wrap Available here ! TODO
        </div>
          <div style={pricingStyle.allText}>
            <span>Location pin icon here ! TODO</span>
            <span style={pricingStyle.allBlueSmallText}>Deliver to User TODO - ZipCode TODO </span>
          </div>
          {/* Add to List */}
          <div style={pricingStyle.allBlueSmallText}>
            <a>Add to you Dash Buttons</a>
            {/* https://stackoverflow.com/questions/28365233/inline-css-styles-in-react-how-to-implement-ahover */}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;