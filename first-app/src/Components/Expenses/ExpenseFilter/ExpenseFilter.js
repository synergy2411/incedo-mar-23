const ExpenseFilter = (props) => {

    const yearChangeHandler = (event) =>
        props.onYearSelect(event.target.value);

    return (
        <select className="form-control"
            onChange={yearChangeHandler}
            value={props.selectedYear}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    )

}

export default ExpenseFilter;