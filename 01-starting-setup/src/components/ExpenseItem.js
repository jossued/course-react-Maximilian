import './ExpenseItem.css'

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 5, 1);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 123.12;

    const month = props.date.toLocaleString('es-ES', {month: 'long'});
    const day = props.date.toLocaleString('es-ES', {day: '2-digit'});
    const year = props.date.getFullYear();
    
    return <div className="expense-item">
        <div>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
            </div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>;
}

export default ExpenseItem;