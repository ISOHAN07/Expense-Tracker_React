import Chart from "../Chart/Chart";

export default function ExpenseChart(props){
    const chartPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'June', value: 0},
        {label: 'July', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sept', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartPoints[expenseMonth].value += expense.amount;
    }

    return(
        <Chart dataPoints = {chartPoints}/>
    )
}