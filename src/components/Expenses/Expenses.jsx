import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpense}/>
        <ExpenseList items = {filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
