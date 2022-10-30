import { useRef } from "react";

export default function TextInputWithFocusButton(props) {
  // .current 속성을 가진 레퍼런스 객체 반환
  // 현재 참조하고 있는 엘리먼트를 의미
  // 컴포넌트가 마운트 해제되기 전까지 게속 유지됨
  const inputElement = useRef(null);

  const onButtonClick = () => {
    // current = 마운트된 input element
    inputElement.current.focus();
  };

  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
