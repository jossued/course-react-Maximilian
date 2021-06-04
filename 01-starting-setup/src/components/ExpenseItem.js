import './ExpenseItem.css'

function ExpenseItem() {
    return <div className="expense-item">
        <div>2021-06-01</div>
        <div className="expense-item__description">
            <h2>Car insurance</h2>
            <div className="expense-item__price">$123.22</div>
        </div>
    </div>;
}

export default ExpenseItem;