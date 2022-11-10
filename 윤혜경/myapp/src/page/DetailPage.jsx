import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function DetailPage(props) {
    const navigate = useHistory();
    
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = () => {
        setIsDeleted((prevIsDeleted) => !prevIsDeleted);
        alert('삭제되었습니다');
    };

    return (
        <div>
            <h2>
                {"상세 페이지 (Coming Soon)!"}
            </h2>
            <button onClick={handleDelete}
                    disabled={isDeleted}>
                {isDeleted ? () => navigate(`mainpage`) : "삭제"}
            </button>
        </div>
    );
}

export default DetailPage;