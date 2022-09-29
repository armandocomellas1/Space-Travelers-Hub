import './mission.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { fetchMissions } from '../redux/missions/missionsApi';
import loadingStatus from '../redux/loadingStats';
import MissionRender from './Missions';

const Missions = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.missions.status);
  const missions = useSelector((store) => store.missions.missions);

  useEffect(() => {
    if (loading === loadingStatus.idle) {
      dispatch(fetchMissions());
    }
  }, [dispatch, loading, missions]);

  return (
    <div className="missions-page">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionRender
              key={mission.mission_id}
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
