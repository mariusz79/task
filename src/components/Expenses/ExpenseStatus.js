import classes from './ExpenseStatus.module.css';

const ExpenseStatus = (props) => {

 let statusClass, statusCircle;
 switch (props.status) {
		case "Rejected":
			statusClass = classes['expenseStatus--reject'];
      statusCircle = classes['expenseStatus--reject-circle'];
			break;
		case "Approved":
			statusClass = classes['expenseStatus--approved'];
      statusCircle = classes['expenseStatus--approved-circle'];
			break;
		default:
			statusClass = classes['expenseStatus--pending'];
      statusCircle = classes['expenseStatus--pending-circle'];
			break;
	}

 return (
  <div className={`${classes.expenseStatus} ${statusClass}`}>
   <span className={`${classes.expenseStatus__circle} ${statusCircle}`}></span><span>{props.status}</span>
  </div>
 );
};

export default ExpenseStatus;
