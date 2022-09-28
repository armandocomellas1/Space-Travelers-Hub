import './profileStyle.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRocket, cancelRocket } from '../redux/rockets/rocketsApi';

const ProfileRockets = (props) => {
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

  return (
    <div className="rockets_container" id={setID}>
      <div className="rocket_named">{rocket_name}</div>
    </div>
  );
};

export default ProfileRockets;
