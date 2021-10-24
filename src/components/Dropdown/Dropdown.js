import { useState } from 'react';
import { DUMMY_BUDGET, DUMMY_EXPENSES } from '../Dummy_Data';
import chevronDown from '../../assets/icons/chevron-down.png';
import chevronRight from '../../assets/icons/chevron-right.svg';
import bell from '../../assets/icons/bell.png';
import vector from '../../assets/icons/vector.png';

import classes from './Dropdown.module.css';

const Dropdown = () => {
  const [showDisplay, setShowDisplay] = useState(false);

  const props = DUMMY_EXPENSES;
  const props1 = DUMMY_BUDGET;

  let budget_level;
  switch (props1.budget_level) {
		case "success":
			budget_level = `${classes.header__amount} ${classes.header__amount_success}`;
			break;
		case "danger":
			budget_level = `${classes.header__amount} ${classes.header__amount_danger}`;
			break;
		default:
			budget_level = `${classes.header__amount} ${classes.header__amount_normal}`;
			break;
	}
  
  const toggleShowDisplayHandler = () => {
    setShowDisplay(!showDisplay);
  };

  return (
		<div className={classes.dropdown}>
			<div className={classes.dropdown__header}>
				<span className={classes.header__title}>Your remaining budget:</span>
				<span className={budget_level}>
					{"\u20AC"} {props1.remaining_budget.toFixed(2)}
				</span>
				<span onClick={toggleShowDisplayHandler}>
					<img
						src={chevronDown}
						className={
							showDisplay
								? classes.header__chevron_rotate
								: classes.header__chevron
						}
						alt="chevron down icon"
					/>
				</span>
			</div>
			{showDisplay && (
				<div className={classes.dropdown__display}>
					<div className={classes.display__title}>
						Details
					</div>
					<div className={classes.display__spendings}>
						<div className={classes.spendings__item}>
							<div>
								<img className={classes.item__img} src={vector} alt='vector icon'/><span>Total Spent</span>
							</div>
							<div className={classes.spending__amount}>{"\u20AC"}320</div>
						</div>
						<div className={classes.spendings__item}>
							<div>
								<img className={classes.item__img} src={bell} alt='bell icon'/><span>Pending approval</span>
							</div>
							<div className={classes.spending__amount}>{"\u20AC"}273</div>
						</div>
					</div>
					<div className={classes.display__list}>
						<table>
							<tbody>
								{props.map((spending) => {
									return (
										<tr key={spending.id}>
											<td>{spending.type_of_purchase}</td>
											<td>{spending.provider}</td>
											<td>{spending.date}</td>
											<td>
												{"\u20AC"} {spending.amount.toFixed(2)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className={classes.display__link}>
						Show Transaction History
						<span>
							<img src={chevronRight} alt="chevron right icon" />
						</span>
					</div>
				</div>
			)}
		</div>
	);
}
 
export default Dropdown;