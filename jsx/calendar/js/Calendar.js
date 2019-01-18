const weekDayNames = [
	{
		abbr: 'Вс',
		full: 'Воскресенье'
	},
	{
		abbr: 'Пн',
		full: 'Понедельник',
	},
	{
		abbr: 'Вт',
		full: 'Вторник',
	},
	{
		abbr: 'Ср',
		full: 'Среда',
	},
	{
		abbr: 'Чт',
		full: 'Четверг',
	},
	{
		abbr: 'Пт',
		full: 'Пятница',
	},
	{
		abbr: 'Сб',
		full: 'Суббота',
	}
];

const monthNames = [
	{
		default: 'Январь',
		changed: 'Января'
	},
	{
		default: 'Февраль',
		changed: 'Февраля'
	},
	{
		default: 'Март',
		changed: 'Марта'
	},
	{
		default: 'Апрель',
		changed: 'Апреля'
	},
	{
		default: 'Май',
		changed: 'Мая'
	},
	{
		default: 'Июнь',
		changed: 'Июня'
	},
	{
		default: 'Июль',
		changed: 'Июля'
	},
	{
		default: 'Август',
		changed: 'Августа'
	},
	{
		default: 'Сентябрь',
		changed: 'Сентября'
	},
	{
		default: 'Октябрь',
		changed: 'Октября'
	},
	{
		default: 'Ноябрь',
		changed: 'Ноября'
	},
	{
		default: 'Декабрь',
		changed: 'Декабря'
	},
];

const Calendar = function({ date }) {
	const weekDay = weekDayNames[date.getDay()];
  const month = monthNames[date.getMonth()];
  console.log(date);

	const colGroup = [];
	for (let i = 0; i < 7; i++) {
		if (i >= 5) {
			colGroup.push(<col className="ui-datepicker-week-end" />);
		} else {
			colGroup.push(<col />);
		}
	}

	const dayTitles = [];
	for (let i = 1; i <= 7; i++) {
		const num = i === 7 ? 0 : i;
		const day = weekDayNames[num];
		dayTitles.push(<th scope="col" title={day.full}>{day.abbr}</th>);
	}

  const firstDisplayedDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  console.log(firstDisplayedDay);
  firstDisplayedDay.setDate(1);
  console.log(firstDisplayedDay);
	while (firstDisplayedDay.getDay() !== 1) {
		firstDisplayedDay.setDate(firstDisplayedDay.getDate() - 1);
	}


	const lastDisplayedDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	while (lastDisplayedDay.getDay() !== 0) {
		lastDisplayedDay.setDate(lastDisplayedDay.getDate() + 1);
  };
  
	const days = [];
	let weekDays = [];
	let counter = 0;
	while (firstDisplayedDay.getTime() <= lastDisplayedDay.getTime()) {
		if (counter % 7 === 0) {
			if (weekDays.length) {
				days.push(
					<tr>
						{weekDays}
					</tr>
				);
				weekDays = [];
			}
		}

		const dayClasses = [];
		if (firstDisplayedDay.getMonth() !== date.getMonth()) {
			dayClasses.push('ui-datepicker-other-month');
		} else if (firstDisplayedDay.getMonth() === date.getMonth() && firstDisplayedDay.getDate() === date.getDate()) {
			dayClasses.push('ui-datepicker-today');
		}

		weekDays.push(<td className={dayClasses}>{firstDisplayedDay.getDate()}</td>);

		counter++;
		firstDisplayedDay.setDate(firstDisplayedDay.getDate() + 1);
	}

	return (
		<div className="ui-datepicker">
			<div className="ui-datepicker-material-header">
				<div className="ui-datepicker-material-day">{weekDay.full}</div>
				<div className="ui-datepicker-material-date">
					<div className="ui-datepicker-material-day-num">{date.getDate()}</div>
					<div className="ui-datepicker-material-month">{month.changed}</div>
					<div className="ui-datepicker-material-year">{date.getFullYear()}</div>
				</div>
			</div>
			<div className="ui-datepicker-header">
				<div className="ui-datepicker-title">
					<span className="ui-datepicker-month">{month.default}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
				</div>
			</div>
			<table className="ui-datepicker-calendar">
				<colgroup>
					{colGroup}
				</colgroup>
				<thead>
					<tr>
						{dayTitles}
					</tr>
				</thead>
				<tbody>
					{days}
				</tbody>
			</table>
		</div>
	);
}