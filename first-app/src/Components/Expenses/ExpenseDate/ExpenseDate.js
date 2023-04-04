import { useContext } from "react";
import AuthContext from "../../../context/auth-context";

const ExpenseDate = (props) => {

    const context = useContext(AuthContext);

    const day = props.createdAt.toLocaleString("en-US", { day: "numeric" })
    const month = props.createdAt.toLocaleString("en-US", { month: "long" })
    const year = props.createdAt.getFullYear();

    return (context.isLoggedIn && <p>Date : {month} {day}, {year}</p>)
}

export default ExpenseDate;