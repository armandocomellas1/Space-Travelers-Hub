import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveMission } from '../redux/missions/missionsApi';
import '../App.css';

const MissionRender = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;

  return (
    <tr>
      <td className="name">{mission.mission_name}</td>
      <td className="description">{mission.description}</td>
      <td>
        <span className={mission.reserved ? 'active-member' : 'not-member'}>
          {mission.reserved ? 'Active Member' : 'Not A Member'}
        </span>
      </td>
      <td>
        <button
          className={mission.reserved ? 'leave-mission' : 'join'}
          type="button"
          onClick={() => dispatch(reserveMission({ mission }))}
        >
          {mission.reserved ? 'Cancel Mission' : 'Join Mission' }
        </button>
      </td>
    </tr>
  );
};

export default MissionRender;
