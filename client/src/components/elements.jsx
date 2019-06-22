import * as React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  color: #111111;
  font-size: 13px;
`;

export const WholeBox = styled.div`
  height: 100%;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  text-align: left;
  border-color: #111111;
  border-radius: 0 0 4px 4px;
`;

export const PriceText = styled.div`
  display: inline-block;
  width: 80%;
  margin: 5;
  text-align: left;
  vertical-align: middle;
  line-height: 30px;
  color: #b12704;
  font-size: 17px;
  font-weight: bold;
`;

export const DeliveryText = styled.div`
  color: #111111;
  font-size: 13px;
  padding: 6px 0px 0px;
`;

export const SoldFulfilledText = styled.div`
  color: #111111;
  font-size: 13px;
  padding: 0px 0px 6px;
`;

export const AllText = styled.div`
  color: #111111;
  font-size: 13px;
`;
