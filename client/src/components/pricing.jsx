import React from 'react';

const pricingStyle = {
  body: {
    color: '#111111',
    fontSize: '13px'
  },
  a: {
    textDecoration: 'none',
    color: '#0066c0'
  },
  wholeBox: {
    height: '100%',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: '1px',
    textAlign: 'left',
    borderColor: '#111111',
    borderRadius: '0 0 4px 4px',
  },
  priceText: {
    display: 'inline-block',
    width: '80%',
    margin: 20,
    textAlign: 'left',
    verticalAlign: 'middle',
    lineHeight: '30px',
    fontColor: '#B12704',
    fontSize: '17px'
  },
  deliveryText: {
    color: '#111111',
    fontSize: '13px',
    padding: '6px 0px 0px'
  },
  stockAvailabilityText: {
    color: '#008A00',
    fontSize: '17px'
  },
  allText: {
    color: '#111111',
    fontSize: '13px'
  },
  allBlueText: {
    color: '#0066CO',
    fontSize: '13px'
  },
  allBlueSmallText: {
    color: '#0066CO',
    fontSize: '12px'
  },
  quantityLabel: {
    padding: '0px 5px 2px 2px'
  },
  selectQuantity: {
    color: '#111111',
    fontSize: '13px',
    background: '#f8f8f8'
  },
  paddingForButtons: {
    padding: '1px 7px 2px'
  },
  soldFulfilledText: {
    color: '#111111',
    fontSize: '13px',
    padding: '0px 0px 6px'
  },
};

export default class Pricing extends React.Component {
  constructor() {
    super();

    this.state = {
      //TODO
    };

    this.countDown = this.countDown.bind(this); //TODO
  }


  componentDidMount() {

  }

  countDown() {

  }

  render() {
    return (
      <div style={pricingStyle.wholeBox}>
        <div style={pricingStyle.priceText}>
          Price here ! TODO
        </div>
        <div>
          Price Icon here & Expected Shipping one day/two day/.. ! TODO
        </div>
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
    );
  }
}