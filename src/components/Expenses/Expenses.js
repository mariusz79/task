import { useState } from 'react';
import ExpenseStatus from './ExpenseStatus';

import { DUMMY_EXPENSES } from '../Dummy_Data';
import calendar from '../../assets/icons/calendar.png';
import typeOfPurchase from '../../assets/icons/type.png';
import provider from '../../assets/icons/provider.png';
import approver from '../../assets/icons/approver.png';
import euro from '../../assets/icons/euro.png';
import chevronDown from '../../assets/icons/chevron-down.png';
import udemy from '../../assets/images/udemy.png';
import blinkist from '../../assets/images/blinkist.png';

import classes from './Expenses.module.css';

const initialProps = DUMMY_EXPENSES;

const Expenses = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [props, setProps] = useState(initialProps);

  const toggleShowDropdownHandler = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownClickHandler = (e) => {
    let filter;
    
    const filterBy = e.target.innerText;

    if(filterBy === "Rejected"){
      filter = 'Rejected';
    } else if(filterBy === 'Approved'){
      filter = 'Approved'
    }else if(filterBy === 'Pending'){
      filter = 'Pending Approval'
    }

    const newProps = initialProps.filter((item)=>{
      return item.status === filter;
    });
    
    setProps(newProps);
    setShowDropdown(!showDropdown);
  }

  const dropdown = (
		<div className={classes.dropdown}>
			<span onClick={dropdownClickHandler}>Approved</span>
			<span onClick={dropdownClickHandler}>Pending</span>
			<span onClick={dropdownClickHandler}>Rejected</span>
		</div>
	);

  return (
		<table className={classes.expenses}>
			<tbody>
				<tr>
					<th className={classes.header}>
						<img
							className={classes.header__img}
							src={calendar}
							alt="calendar icon"
						/>
						<span>Date</span>
					</th>
					<th className={classes.header}>
						<img
							className={classes.header__img}
							src={typeOfPurchase}
							alt="type of purchase icon"
						/>
						<span>Type of purchase</span>
					</th>
					<th className={classes.header}>
						<img
							className={classes.header__img}
							src={provider}
							alt="provider icon"
						/>
						<span>Provider</span>
					</th>
					<th className={classes.header}>
						<img
							className={classes.header__img}
							src={approver}
							alt="approver icon"
						/>
						<span>Approver</span>
					</th>
					<th className={`${classes.header} ${classes.header_amount}`}>
						<img className={classes.header__img} src={euro} alt="euro icon" />
						<span>Amount</span>
					</th>
					<th className={`${classes.header} ${classes.header_last}`}>
						<span style={{ paddingRight: ".5em" }}>Status</span>
						<span
							className={
								showDropdown
									? classes["header__toggle--rotate"]
									: classes.header__toggle
							}
						>
							<img
								src={chevronDown}
								alt="chevron down icon"
								onClick={toggleShowDropdownHandler}
							/>
						</span>
						{showDropdown && dropdown}
					</th>
				</tr>
				{props.map((expense) => {
					return (
						<tr key={expense.id} className={classes.expenses__row}>
							<td className={classes.expensesItem}>{expense.date}</td>
							<td className={classes.expensesItem}>
								<span
									className={classes.expensesItem_tag}
									gloss={expense.description}
								>
									{expense.type_of_purchase}
								</span>
							</td>
							<td className={classes.expensesItem}>
								<img
									src={expense.provider === "Udemy" ? udemy : blinkist}
									alt="provider logo"
								/>
							</td>
							<td className={classes.expensesItem}>
								<span className={classes.expensesItem_approver}>
									{expense.approver}
								</span>
							</td>
							<td className={`${classes.expensesItem} ${classes.header_amount}`}>
								{expense.amount.toFixed(2)}
							</td>
							<td className={`${classes.expensesItem} ${classes.header_last}`}>
								<ExpenseStatus status={expense.status} />
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Expenses;