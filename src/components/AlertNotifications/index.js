// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose, GrLinkedin} from 'react-icons/gr'
import Notification from '../Notification'

import './index.css'

class AlertNotification extends Component {
  state = {
    list: '',
  }

  render() {
    return (
      <div className="main-bg-container">
        <h1 className="main-title">Alert Notifications</h1>
        <Notification className="notification-container">
          <AiFillCheckCircle className="icon-1" />
          <div className="text-container ">
            <h1 className="card-item-heading success">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
          <GrFormClose />
        </Notification>

        <Notification className="notification-container">
          <AiFillCheckCircle className="icon-2" />
          <div className="text-container ">
            <h1 className="card-item-heading error">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have a access to delete the file
            </p>
          </div>
          <GrFormClose />
        </Notification>

        <Notification className="notification-container">
          <AiFillCheckCircle className="icon-3" />
          <div className="text-container ">
            <h1 className="card-item-heading warning">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
          <GrFormClose />
        </Notification>

        <Notification className="notification-container">
          <AiFillCheckCircle className="icon-4" />
          <div className="text-container ">
            <h1 className="card-item-heading info">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
          <GrFormClose />
        </Notification>
        <div className="footer">
          <p>This webpage is created by Praveen Sankar A</p>
          <div>
            <a
              href="https://www.linkedin.com/in/praveen-sankar-a-9b9172226/"
              className="linked-in-btn"
            >
              <GrLinkedin className="linkedin-icon" />
              <p className="linkedin-name">praveen Sankar</p>
            </a>
            <a
              href="https://github.com/praveensankarA/AlertNotifications-1"
              className="sorce-code-text"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default AlertNotification
