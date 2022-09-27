import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { fecthRockets } from '../redux/rockets/rocketsApi';
import loadingStatus from '../redux/loadingStats';
import RocketsRender from './RocketRender';

const Rockets = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.rockets.status);
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (loading === loadingStatus.idle) {
      dispatch(fecthRockets());
    }
  }, [dispatch, loading]);

  if (rockets.status === 'SUCCEEDED') {
    const rocketsAll = rockets.rockets;
    return (
      <div>
        {
          rocketsAll.map((rocket) => {
            return (
              <RocketsRender
                key={`books-lisk-card-${rocket.id}`}
                {...rocket}
              />
            );
          })
        }
      </div>
    );
  }
  return false;
};

export default Rockets;
