function MyButton(props){
    const [isClicked, setIsClicked] = useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);

