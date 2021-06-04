function ExpenseDate(props) {
    const month = props.date.toLocaleString('es-ES', { month: 'long' });
    const day = props.date.toLocaleString('es-ES', { day: '2-digit' });
    const year = props.date.getFullYear();

    return <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
    </div>
}

export default ExpenseDate;