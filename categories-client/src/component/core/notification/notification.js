import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';
import 'react-notifications/lib/notifications.css';

import './notification.scss';
import {notificationOff} from '../../../store/action/notification';

class Notification extends React.Component {
  state = {
    type: '',
    notification: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      switch (this.props.type) {
        case 'Success':
          NotificationManager.success(`${this.props.notification}`, `${this.props.type}`, 3000);
          this.props.notificationOff();
          break;
        case 'Error':
          NotificationManager.error(`${this.props.notification}`, `${this.props.type}`, 3000);
          this.props.notificationOff();
          break;
      }
    }
  }

  render() {
    return (
      <NotificationContainer/>
    )
  }
}

const mapStateToProps = state => ({
  type: state.notificationReducer.type,
  notification: state.notificationReducer.notification,
});

const mapDispatchToProps = (dispatch) => ({
  notificationOff: () => dispatch(notificationOff())
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
