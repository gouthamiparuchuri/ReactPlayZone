import ReactDOM from "react-dom/client";

// curly braces need return
// small braces dont need return
//single statetemts dont need any braces

const element = (<span>Hello from react element</span>)
function Header() {
    return <h2>Header from functional component</h2>
}

var Title = () => <h1>React</h1>

var Description = () => (
    <div>
        <p>
            lorem export default lorem lorem export default lorem lorem export default lorem lorem export default lorem
        </p>
    </div>
)

var Footer = () => {
    return (<div>
        <h2>footer</h2>
    </div>)
}

var Body = () => {
    return <div>
        <Header />
        <Title></Title>
        {element}
        {Description()}
        {
            10000 * 1000
        }
        <br />
        {
            100 + 100
        }
        <h1>Hi from functional component composition</h1>
        <Footer />
    </div>
}


ReactDOM.createRoot(document.getElementById("root")).render(<Body />);