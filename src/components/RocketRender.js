import './rocketRndr.css';
import React from 'react';
import { useDispatch } from 'react-redux';

const RocketsRender = (props) => {
  const dispatch = useDispatch();
  const {
    description,
    id,
    rocket_name,
    flickr_images,
  } = props;

  const setID = `${id}`;
  const getFlickImg = flickr_images[0];
  const styled = {
    backgroundImage: `url(${getFlickImg})`,
  };

  return (
    <div className="bks_main_cont" id={setID}>
      <div style={styled} className="wikipedia" />
      <div className="books_container">
        <div className="mission_name">{rocket_name}</div>
        <div className="description">{description}</div>
        <div className="btn_missions_reserve">
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

export default RocketsRender;
