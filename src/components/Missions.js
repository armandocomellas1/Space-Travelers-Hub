import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsApi';
import MissionRender from './missonRndr';
import '../App.css';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions?.length) {
      dispatch(fetchMissions());
    }
  }, []);
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
          {missions?.map((mission) => (
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
