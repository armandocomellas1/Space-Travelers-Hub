import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './mission.css';
import { reserveMission, cancelMissions } from '../redux/missions/missionsApi';

const MissionRender = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;

  const listenReserve = (event) => {
    const getId = event.target.parentElement.parentElement.id;
    const getBtnStatus = event.target.className;

    if (getBtnStatus === 'leave-mission') {
      dispatch(cancelMissions(getId));
    } else {
      dispatch(reserveMission(getId));
    }
  };

  return (
    <tr id={mission.mission_id}>
      <td className="name">{mission.mission_name}</td>
      <td className="description">{mission.description}</td>
      <td>
        <span className={mission.reserve ? 'active-member' : 'not-member'}>
          {mission.reserve ? 'Active Member' : 'NOT A MEMBER'}
        </span>
      </td>
      <td>
        <button
          className={mission.reserve ? 'leave-mission' : 'join'}
          type="button"
          onClick={listenReserve}
        >
          {mission.reserve ? 'Cancel Mission' : 'Join Mission' }
        </button>
      </td>
    </tr>
  );
};

export default MissionRender;
