import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import style from "../../../public/style.css";

import ShippingStatement from './ShippingStatement.jsx';
import AvailabilityStatement from './AvailabilityStatement.jsx';
import SoldFulfilledStatement from './SoldFulfilledStatement.jsx';
import GiftWrapStatement from './GiftWrapStatement.jsx';
import UserLocationStatement from './UserLocationStatement.jsx';

class Pricing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: {},
      productId: null,
      changed: false,
      options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      today: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
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
        <div className="wholeBox">

          <div className="priceText">
            ${this.state.productDetails.price}
          </div>

          <div>
            {
              this.state.productDetails.free_delivery == false ?
                (<span className="allBlueSmallText">& Free Shipping</span>)
                :
                <ShippingStatement fulfilledBy={this.state.productDetails.fulfilled_by} expectedShipping={this.state.productDetails.expected_shipping} />
            }
          </div>

          <div className="deliveryText">
            Want it {this.state.today.toLocaleDateString("en-US", this.state.options)}? Order within 7 hrs 56 mins and choose Standard Shipping at checkout.
          </div>

          <div>
            <AvailabilityStatement availQuantity={this.state.productDetails.available_quantity} />
          </div>

          <div className="soldFulfilledText">
            <SoldFulfilledStatement soldBy={this.state.productDetails.sold_by} fulfilledBy={this.state.productDetails.fulfilled_by} />
          </div>

          <div className="allText">
            <GiftWrapStatement giftWrapAvailable={this.state.productDetails.gift_wrap_available} />
          </div>

          <div className="allText">
            <UserLocationStatement
              userZip={this.state.productDetails.user_zip} />
          </div>

        </div>
      </div >
    );
  }
}

export default Pricing;