import React from "react";
import Notifiacation from "./Notification";

const reversedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
  {
    id: 4,
    message: "저녁시간입니다.",
  },
];

var timer;

class NotifiacationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reversedNotifications.length) {
        const index = notifications.length;
        notifications.push(reversedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notifiacation
              key={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotifiacationList;
