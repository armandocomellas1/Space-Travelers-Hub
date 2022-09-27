import React from 'react';
import { useDispatch } from 'react-redux';

const RocketsRender = (props) => {
  const dispatch = useDispatch();
  const {
    description,
    manufacturers,
    mission_id,
    mission_name,
    payload_ids,
    twitter,
    website,
    wikipedia,
  } = props;

  const setID = `${mission_id}`;

  return (
    <div className="bks_main_cont" id={setID}>
      <div className="books_container">
        <div className="description">{description}</div>
        <div className="manufacturers">{manufacturers}</div>
        <div className="mission_id">{mission_id}</div>
        <div className="mission_name">{mission_name}</div>
        <div className="payload_ids">{payload_ids}</div>
        <div className="twitter">{twitter}</div>
        <div className="website">{website}</div>
        <div className="wikipedia">{wikipedia}</div>
      </div>
    </div>
  );
};

export default RocketsRender;
