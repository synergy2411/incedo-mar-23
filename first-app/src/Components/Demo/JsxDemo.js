import Hoc from "./Hoc";

function JsxDemo(props) {

    let username = "John Doe";
    let age = 32;
    let user = { email: "john@test.com" };
    let isAdmin = false;

    const clickHandler = () => alert("Who's this ?")

    return (
        <>
            <h3>The JSX Component</h3>
            <p className="">Username : {username}</p>
            <p>Age : {age} </p>
            <p>Email : {user.email} </p>
            <p>User is {isAdmin ? '' : 'NOT'} Admin.</p>
            <p>Company : {props.companyName}</p>
            <button onClick={clickHandler}>Click Me</button>

            <h6> Counter : {props.counter} </h6>
            <button onClick={() => props.increaseCounter()}>
                Increase
            </button>
        </>
    )

}

const EnhancedComponent = Hoc(JsxDemo)
export default EnhancedComponent;

