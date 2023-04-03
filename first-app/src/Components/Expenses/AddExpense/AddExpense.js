const AddExpense = () => {
    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-body">
                        <h4 className="text-center">Add Expenses</h4>
                        <form>
                            {/* title */}
                            <div className="form-group mb-3">
                                <label>Title:</label>
                                <input type="text" className="form-control" />
                            </div>
                            {/* amount */}
                            <div className="form-group mb-3">
                                <label>Amount:</label>
                                <input type="number" min="0.1" step="0.1" className="form-control" />
                            </div>
                            {/* createdAt */}
                            <div className="form-group mb-3">
                                <label>Date:</label>
                                <input type="date" className="form-control" min="2022-04-01" max="2023-03-31" />
                            </div>
                            {/* button */}
                            <div className="form-group">
                                <div className="d-grid">
                                    <button className="btn btn-success">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExpense;