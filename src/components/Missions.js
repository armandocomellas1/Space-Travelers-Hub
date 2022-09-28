import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsApi';
import MissionRender from './missonRndr';
import '../App.css';
import loadingStatus from '../redux/loadingStats';
import RocketsRender from './RocketRender';

const Missions = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.missions.status);
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (loading === loadingStatus.idle) {
      dispatch(fetchMissions());
    }
  }, [dispatch, loading]);

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
