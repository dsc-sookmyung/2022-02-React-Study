import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function DetailPage(props) {
    const navigate = useNavigate();
    
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = () => {
        setIsDeleted((prevIsDeleted) => !prevIsDeleted);
        alert('삭제되었습니다');
        navigate("/");
    };

    return (
            <div>
                <h2>
                    {"상세 페이지 (Coming Soon)!"}
                </h2>
                <button onClick={handleDelete}
                        disabled={isDeleted}>
                    삭제
                </button>
            </div>
        
    );
}

export default DetailPage;