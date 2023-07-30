import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //const [title, setTitle] = useState(props.title); //array destructuring

  //const clickHandler = () => {
  //setTitle("updated");

  //}

  return (
    <ul>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </ul>
  );
};

export default ExpenseItem;
