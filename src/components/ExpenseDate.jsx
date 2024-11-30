import React from "react";

function ExpenseDate(props) {
  // Ensure expenseDate is a valid Date object
  const expenseDate = new Date(props.expenseDate);

  // Format the date using toLocaleDateString
  const formattedDate = expenseDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="">
      <p>Date : {formattedDate}</p>
    </div>
  );
}

export default ExpenseDate;
