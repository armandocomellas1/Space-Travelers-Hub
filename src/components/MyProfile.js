import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './profileStyle.css';
import axios from 'axios';
import ProfileRockets from './MyProfrender';

const MyProfile = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.rockets.status);
  const rockets = useSelector((state) => state.rockets);
  // console.log('myProfile rockets', rockets);
  // useEffect(() => {
  //   if (loading === loadingStatus.idle) {
  //     dispatch(fecthRockets());
  //   }
  // }, [dispatch, loading]);

  if (rockets.status === 'SUCCEEDED') {
    const rocketsAll = rockets.rockets;
    return (
      <div>
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
    );
  }
  return false;
};

export default MyProfile;
