import './rocketRndr.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRocket, storeRockets } from '../redux/rockets/rocketsApi';

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
    dispatch(updateRocket(getId));
  };

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
          <button type="button" onClick={reserveRock}>Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

export default RocketsRender;
