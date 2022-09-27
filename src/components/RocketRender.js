import './rocketRndr.css';
import React from 'react';
import { useDispatch } from 'react-redux';

const RocketsRender = (props) => {
  const dispatch = useDispatch();
  const {
    description,
    mission_id,
    mission_name,
  } = props;

  const setID = `${mission_id}`;

  return (
    <div className="bks_main_cont" id={setID}>
      <div className="wikipedia" />
      <div className="books_container">
        <div className="mission_name">{mission_name}</div>
        <div className="description">{description}</div>
        <div className="btn_missions_reserve">
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

export default RocketsRender;
