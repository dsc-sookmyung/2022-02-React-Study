import React from "react";
import MainPage from "./MainPage";

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDeleted: false,
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.setState((prevState) => ({
            isDeleted: !prevState.isDeleted,
        }));
        alert('삭제되었습니다');
    }

    render() {
        return (
            <button
                onClick={this.handleDelete}
                disabled={this.state.isDeleted}
            >삭제</button>
        );
    }
}

export default DetailPage;