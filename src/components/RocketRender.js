import './rocketRndr.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRocket, cancelRocket } from '../redux/rockets/rocketsApi';

const RocketsRender = (props) => {
  const dispatch = useDispatch();
  const {
    description,
    id,
    rocket_name,
    flickr_images,
    reserve,
  } = props;

  const setID = `${id}`;
  const getFlickImg = flickr_images[0];
  const styled = {
    backgroundImage: `url(${getFlickImg})`,
  };
  const checkReserve = reserve;
  const reserveRock = (event) => {
    const getId = event.target.parentElement.parentElement.parentElement.id;
    const getBtnStatus = event.target.className;
    if (getBtnStatus === 'cancel_style') {
      dispatch(cancelRocket(getId));
    } else {
      dispatch(updateRocket(getId));
    }
  };

  let buttonStatus;

  if (checkReserve === true) {
    buttonStatus = 'Cancel Reservation';
  } else {
    buttonStatus = 'Reserve Rocket';
  }

  return (
    <div className="bks_main_cont" id={setID}>
      <div style={styled} className="wikipedia" />
      <div className="books_container">
        <div className="mission_name">{rocket_name}</div>
        <div className="description">
          <span className={checkReserve === true ? 'reserve_word' : ''} />
          {description}
        </div>
        <div className="btn_missions_reserve">
          <button className={checkReserve === true ? 'cancel_style' : 'reserve_style'} type="button" onClick={reserveRock}>{buttonStatus}</button>
        </div>
      </div>
    </div>
  );
};

export default RocketsRender;
