import './profileStyle.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRocket, cancelRocket } from '../redux/rockets/rocketsApi';

const ProfileMissions = (props) => {
  const dispatch = useDispatch();
  const {
    mission_id,
    mission_name,
    reserve,
  } = props;

  const setID = `${mission_id}`;

  return (
    <div className="missions_container" id={setID}>
      <div className="mission_named">{mission_name}</div>
    </div>
  );
};

export default ProfileMissions;
