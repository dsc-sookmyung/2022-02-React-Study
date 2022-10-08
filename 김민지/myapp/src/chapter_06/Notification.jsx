import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    fiexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notifiacation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(`${this.props.id} componenetDidMount() called`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called`);
  }

  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUmount() called`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}
export default Notifiacation;
