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

  const budget_level = 
	  props1.remaining_budget >= 0 ? 
		 `${classes.dropdown__header__amount} ${classes['dropdown__header__amount--success']}` :
		 `${classes.dropdown__header__amount} ${classes['dropdown__header__amount--danger']}`;
  
  const toggleShowDisplayHandler = () => {
    setShowDisplay(!showDisplay);
  };

  return (
		<div className={classes.dropdown}>
			<div className={classes.dropdown__header}>
				<span className={classes.dropdown__header__title}>Your remaining budget:</span>
				<span className={budget_level}>
					{"\u20AC"} {props1.remaining_budget.toFixed(2)}
				</span>
				<span onClick={toggleShowDisplayHandler}>
					<img
						src={chevronDown}
						className={
							showDisplay
								? classes['dropdown__header__chevron--rotate']
								: classes.dropdown__header__chevron
						}
						alt="chevron down icon"
					/>
				</span>
			</div>
			{showDisplay && (
				<div className={classes.dropdown__display}>
					<div className={classes.dropdown__display__title}>
						Details
					</div>
					<div className={classes.dropdown__spendings}>
						<div className={classes.dropdown__spendings__item}>
							<div>
								<img className={classes.dropdown__spendings__item__img} src={vector} alt='vector icon'/><span>Total Spent</span>
							</div>
							<div className={classes.dropdown__spendings__amount}>{"\u20AC"}320</div>
						</div>
						<div className={classes.dropdown__spendings__item}>
							<div>
								<img className={classes.dropdown__spendings__item__img} src={bell} alt='bell icon'/><span>Pending approval</span>
							</div>
							<div className={classes.dropdown__spendings__amount}>{"\u20AC"}273</div>
						</div>
					</div>
					<div className={classes.dropdown__display__list}>
						<table className={classes.dropdown__list__table}>
							<tbody>
								{props.map((spending) => {
									return (
										<tr key={spending.id}>
											<td className={classes.dropdown__list__data}>{spending.type_of_purchase}</td>
											<td>{spending.provider}</td>
											<td className={classes.dropdown__list__date}>{spending.date}</td>
											<td className={classes.dropdown__list__amount}>
												{"\u20AC"} {spending.amount.toFixed(2)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className={classes.dropdown__link}>
						Show Transaction History
						<span>
							<img src={chevronRight} className={classes.dropdown__link__img} alt="chevron right icon" />
						</span>
					</div>
				</div>
			)}
		</div>
	);
}
 
export default Dropdown;