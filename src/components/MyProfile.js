import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './profileStyle.css';
import axios from 'axios';
import ProfileRockets from './MyProfrender';
import ProfileMissions from './Myprofmission';

const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  if (rockets.status === 'SUCCEEDED' || missions.status === 'SUCCEEDED') {
    const rocketsAll = rockets.rockets;
    const missionsAll = missions.missions;

    return (
      <div className="container_profiles">
        <div className="container_left">
          <h2 className="profile_rockets">My Rockets</h2>
          <div className="profile_main">
            {
              rocketsAll.map((rocket) => {
                if (rocket.reserve === true) {
                  return (
                    <ProfileRockets
                      key={`books-lisk-card-${rocket.id}`}
                      {...rocket}
                    />
                  );
                }
                return false;
              })
            }
          </div>
        </div>
        <div className="container_right">
          <h2 className="profile_missions">My Missions</h2>
          <div className="profile_main_miss">
            {
              missionsAll.map((mission) => {
                if (mission.reserve === true) {
                  return (
                    <ProfileMissions
                      key={`books-lisk-card-${mission.mission_id}`}
                      {...mission}
                    />
                  );
                }
                return false;
              })
            }
          </div>
        </div>
      </div>
    );
  }
  return false;
};

export default MyProfile;
