import React from "react";
import "./UserSelectionInfo.css";
import AudiotrackRounded from '@material-ui/icons/AudiotrackRounded';
import MonetizationOnRounded from '@material-ui/icons/MonetizationOnRounded';
import { useSelector } from 'react-redux'

const Counter = () => {

    const totalCount = useSelector(state => state.totalCount);
    const totalPrice = useSelector(state => state.totalPrice);

    return (
    <div className="counter">
      <div className="counter__songs-count">
        <AudiotrackRounded color="primary"/>
        <h4>{totalCount}</h4>
        <p>Total count</p>
      </div>
      <div className="counter__total-price">
        <MonetizationOnRounded color="primary"/>
        <h4>${totalPrice}</h4>
        <p>Total price</p>
      </div>
    </div>
  );
};

export default Counter;
