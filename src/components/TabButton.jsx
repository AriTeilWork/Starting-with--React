export default function TabButton(props) {
    function handleClick() {
        console.log('Button clicked');
    }

    return <li><button onClick={handleClick}>{props.children}</button></li>;

}