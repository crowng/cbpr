// Setup the calendar with the current date
$(document).ready(function () {
	var date = new Date();
	var today = date.getDate();
	// Set click handlers for DOM elements
	$('.right-button').click({ date: date }, next_year);
	$('.left-button').click({ date: date }, prev_year);
	$('.month').click({ date: date }, month_click);
	$('#add-button').click({ date: date }, new_event);
	// $("#add-button").click(function() {
	//     let boxToReset = document.querySelector('#name')
	//     boxToReset.options[0].selected = true
	// });
	// Set current month as active
	$('.months-row').children().eq(date.getMonth()).addClass('active-month');
	init_calendar(date);
	var events = check_events(today, date.getMonth() + 1, date.getFullYear());
	show_events(events, months[date.getMonth()], today);
});

let daysToschedule = Array.from(document.querySelectorAll('.d'));

var sundayRef = 1;
var saturdayRef = 7;

var dateRange = document.getElementById('date-range');
var dateViews = document.getElementsByClassName('date');
var daysOfMonth = document.getElementById('days-of-month');
var calendarPopover = document.getElementById('calendar-popover');
var javi = document.getElementsByClassName('javi');
var gabriel = document.getElementsByClassName('gabriel');
var gustavo = document.getElementsByClassName('gustavo');
var chuck = document.getElementsByClassName('chuck');
var greg = document.getElementsByClassName('greg');
var jarvis = document.getElementsByClassName('jarvis');
var cameron = document.getElementsByClassName('cameron');
var antonio = document.getElementsByClassName('antonio');

// daysToEventsCompare(daysToschedule, event_data.events)

function daysToEventsCompare(arr1, arr2) {
	// console.log(arr2);
	let scheduledArr = [];

	let theHelpers = Array.from(document.querySelectorAll('td.help'));
	arr1.forEach((el) => {
		arr2.forEach((element) => {
			let newEl = element.occasion.toLowerCase();
			if (
				el.className.includes(newEl) &&
				el.id.includes(`${element.month}/${element.day}`)
			) {
				scheduledArr.push(element);
				el.innerHTML = `<span style= "color: black; font-weight: bold;">${element.invited_count}</span>`;
				// console.log(scheduledArr);
				scheduledArr.forEach((sch) => {
					for (let i = 0; i < theHelpers.length; i++) {
						if (!theHelpers[i].className.split(' ').includes(sch.occasion)) {
							// console.log(theHelpers[i]);
							if (
								theHelpers[i].id !== `${scheduledArr.month}/${scheduledArr.day}`
							) {
							}
						}
					}
					for (let i = 0; i < theHelpers.length; i++) {
						// console.log('object');
						if (theHelpers[i].className.split(' ').includes(sch.occasion)) {
							console.log('match');
						}
					}
				});
			}
		});
	});
}

function adjustCalendar(monRef, sunRef) {
	var sundays = moment().day(monRef);
	var saturday = moment().day(sunRef);

	if (monRef > 0) {
		for (var date = monRef; date <= sunRef; date++) {
			dateViews[(date - 1) % 7].innerHTML = moment().day(date).format('M[/]D');

			gabriel[(date - 1) % 7].setAttribute(
				'id',
				moment().day(date).format('M[/]D')
			);
			gabriel.id = moment().day(date).format('M[/]D');

			gustavo[(date - 1) % 7].setAttribute(
				'id',
				moment().day(date).format('M[/]D')
			);
			gustavo.id = moment().day(date).format('M[/]D');

			chuck[(date - 1) % 7].setAttribute(
				'id',
				moment().day(date).format('M[/]D')
			);
			chuck.id = moment().day(date).format('M[/]D');

			greg[(date - 1) % 7].setAttribute(
				'id',
				moment().day(date).format('M[/]D')
			);
			greg.id = moment().day(date).format('M[/]D');

			jarvis[(date - 1) % 7].setAttribute(
				'id',
				moment().day(date).format('M[/]D')
			);
			jarvis.id = moment().day(date).format('M[/]D');

			cameron[(date - 1) % 7].setAttribute(
				'id',
				moment().day(date).format('M[/]D')
			);
			cameron.id = moment().day(date).format('M[/]D');

			antonio[(date - 1) % 7].setAttribute(
				'id',
				moment().day(date).format('M[/]D')
			);
			antonio.id = moment().day(date).format('M[/]D');

			javi[(date - 1) % 7].setAttribute(
				'id',
				moment().day(date).format('M[/]D')
			);
			javi.id = moment().day(date).format('M[/]D');
		}
	} else {
		for (var date = -monRef; date >= -sunRef; date--) {
			dateViews[-(monRef + date)].innerHTML = moment()
				.day(-date)
				.format('M[/]D');

			javi[-(monRef + date)].setAttribute(
				'id',
				moment().day(-date).format('M[/]D')
			);
			javi.id = moment().day(-date).format('M[/]D');

			gabriel[-(monRef + date)].setAttribute(
				'id',
				moment().day(-date).format('M[/]D')
			);
			gabriel.id = moment().day(-date).format('M[/]D');

			gustavo[-(monRef + date)].setAttribute(
				'id',
				moment().day(-date).format('M[/]D')
			);
			gustavo.id = moment().day(-date).format('M[/]D');

			chuck[-(monRef + date)].setAttribute(
				'id',
				moment().day(-date).format('M[/]D')
			);
			chuck.id = moment().day(-date).format('M[/]D');

			greg[-(monRef + date)].setAttribute(
				'id',
				moment().day(-date).format('M[/]D')
			);
			greg.id = moment().day(-date).format('M[/]D');

			jarvis[-(monRef + date)].setAttribute(
				'id',
				moment().day(-date).format('M[/]D')
			);
			jarvis.id = moment().day(-date).format('M[/]D');

			cameron[-(monRef + date)].setAttribute(
				'id',
				moment().day(-date).format('M[/]D')
			);
			cameron.id = moment().day(-date).format('M[/]D');

			antonio[-(monRef + date)].setAttribute(
				'id',
				moment().day(-date).format('M[/]D')
			);
			antonio.id = moment().day(-date).format('M[/]D');
		}
	}

	if (sundays.format('YYYY') !== saturday.format('YYYY')) {
		dateRange.innerHTML = `${sundays.format(
			'MMMM Do, YYYY'
		)} - ${saturday.format('MMMM Do, YYYY')}`;
	} else {
		dateRange.innerHTML = `${sundays.format(
			'MMMM Do, YYYY'
		)} - ${saturday.format('MMMM Do, YYYY')}`;
	}
}
// Init
adjustCalendar(sundayRef, saturdayRef);

var prev = document.getElementById('prev-arrow');
var next = document.getElementById('next-arrow');

next.onclick = function () {
	sundayRef += 7;
	saturdayRef += 7;
	let resetter = Array.from(document.querySelectorAll('td.help'));
	resetter.forEach((el) => (el.innerHTML = 'Available'));

	adjustCalendar(sundayRef, saturdayRef);
	daysToEventsCompare(daysToschedule, event_data.events);
};

prev.onclick = function () {
	sundayRef -= 7;
	saturdayRef -= 7;
	let resetter = Array.from(document.querySelectorAll('td.help'));
	resetter.forEach((el) => (el.innerHTML = 'Available'));
	adjustCalendar(sundayRef, saturdayRef);
	daysToEventsCompare(daysToschedule, event_data.events);
};

// Initialize the calendar by appending the HTML dates
function init_calendar(date) {
	$('.tbody').empty();
	$('.events-container').empty();
	var calendar_days = $('.tbody');
	var month = date.getMonth();
	var year = date.getFullYear();
	var day_count = days_in_month(month, year);
	var row = $("<tr class='table-row'></tr>");
	var today = date.getDate();
	// Set date to 1 to find the first day of the month
	date.setDate(1);
	var first_day = date.getDay();
	// 35+firstDay is the number of date elements to be added to the dates table
	// 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
	for (var i = 0; i < 35 + first_day; i++) {
		// Since some of the elements will be blank,
		// need to calculate actual date from index
		var day = i - first_day + 1;
		// If it is a sunday, make a new row
		if (i % 7 === 0) {
			calendar_days.append(row);
			row = $("<tr class='table-row'></tr>");
		}
		// if current index isn't a day in this month, make it blank
		if (i < first_day || day > day_count) {
			var curr_date = $("<td class='table-date nil'>" + '</td>');
			row.append(curr_date);
		} else {
			var curr_date = $("<td class='table-date'>" + day + '</td>');
			var events = check_events(day, month + 1, year);
			if (today === day && $('.active-date').length === 0) {
				curr_date.addClass('active-date');
				show_events(events, months[month], day);
			}
			// If this date has any events, style it with .event-date
			if (events.length !== 0) {
				curr_date.addClass('event-date');
			}
			// Set onClick handler for clicking a date
			curr_date.click(
				{ events: events, month: months[month], day: day },
				date_click
			);
			row.append(curr_date);
		}
	}
	// Append the last row and set the current year
	calendar_days.append(row);
	$('.year').text(year);
}

// Get the number of days in a given month/year
function days_in_month(month, year) {
	var monthStart = new Date(year, month, 1);
	var monthEnd = new Date(year, month + 1, 1);
	return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
}

function checkScheduling(e) {
	// this event will have event.data.day && event.data.month
	// check each object in actual events arry to match day and month and if match disable assistant input in form
	let dayPicked = e.data.day;
	let monthPicked = e.data.month;
	let schedule = Array.from(event_data.events);
	console.log(dayPicked, monthPicked, schedule);
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let month = months.indexOf(monthPicked);
	console.log(month);
	schedule.forEach((entry) => {
		let inputToDisable = document.querySelector('#name');
		let valuesToDisable = Array.from(inputToDisable.options);
		if (entry.day === dayPicked && entry.month === month + 1) {
			valuesToDisable.forEach((value) => {
				if (value.value === entry.occasion.toLowerCase()) {
					console.log(value);
					value.disabled = true;
					return;
				}
			});
		}
	});

	return;
}

// Event handler for when a date is clicked
function date_click(event) {
	let inputToDisable = document.querySelector('#name');
	inputToDisable.selectedIndex = 0;
	let valuesToDisable = Array.from(inputToDisable.options);
	valuesToDisable.forEach((val) => (val.disabled = false));
	checkScheduling(event);
	// console.log(event);
	$('.events-container').show(250);
	$('#dialog').hide(250);
	$('.active-date').removeClass('active-date');
	$(this).addClass('active-date');
	show_events(event.data.events, event.data.month, event.data.day);
	// console.log(event);
}

// Event handler for when a month is clicked
function month_click(event) {
	$('.events-container').show(250);
	$('#dialog').hide(250);
	var date = event.data.date;
	$('.active-month').removeClass('active-month');
	$(this).addClass('active-month');
	var new_month = $('.month').index(this);
	date.setMonth(new_month);
	init_calendar(date);
}

// Event handler for when the year right-button is clicked
function next_year(event) {
	$('#dialog').hide(250);
	var date = event.data.date;
	var new_year = date.getFullYear() + 1;
	$('year').html(new_year);
	date.setFullYear(new_year);
	init_calendar(date);
}

// Event handler for when the year left-button is clicked
function prev_year(event) {
	$('#dialog').hide(250);
	var date = event.data.date;
	var new_year = date.getFullYear() - 1;
	$('year').html(new_year);
	date.setFullYear(new_year);
	init_calendar(date);
}

// Event handler for clicking the new event button
function new_event(event) {
	var date = event.data.date;
	var name = $('#name option:selected').text();
	var count = $('#count option:selected').text();
	var day = parseInt($('.active-date').html());
	let monthCheck = parseInt(moment(date).format('M'));
	let yearCheck = parseInt(moment(date).format('YYYY'));
	console.log(name, count, day, monthCheck, yearCheck);

	// if a date isn't selected then do nothing
	if ($('.active-date').length === 0) return;
	// remove red error input on click
	$('input').click(function () {
		$(this).removeClass('error-input');
	});
	// empty inputs and hide events
	$('#dialog select[type=text]').val('');
	$('#dialog select[type=text]').val('');
	$('.events-container').hide(250);
	$('#dialog').show(250);

	// Event handler for cancel button
	$('#cancel-button').click(function () {
		$('#name').removeClass('error-input');
		$('#count').removeClass('error-input');
		$('#dialog').hide(250);
		$('.events-container').show(250);
	});
	// Event handler for ok button

	$('#ok-button')
		.unbind()
		.click({ date: event.data.date }, function () {
			event.preventDefault();
			var date = event.data.date;
			var name = $('#name option:selected').text();
			var count = $('#count option:selected').text();
			var day = parseInt($('.active-date').html());
			let monthCheck = parseInt(moment(date).format('M'));
			let yearCheck = parseInt(moment(date).format('YYYY'));
			console.log(name, count, day, monthCheck, yearCheck);
			// Check to see if assistant is already scheduled, if so disable from the select list

			// Basic form validation
			if (name.length === 0) {
				$('#name').addClass('error-input');
				event.preventDefault();
			} else if (!isNaN(count)) {
				$('#count').addClass('error-input');
				event.preventDefault();
			} else {
				$('#dialog').hide(250);
				console.log('new event');
				new_event_json(name, count, date, day);
				date.setDate(day);
				init_calendar(date);
				event.preventDefault();
			}
			daysToEventsCompare(daysToschedule, event_data.events);
		});
}

// Adds a json event to event_data
function new_event_json(name, count, date, day) {
	var event = {
		occasion: name,
		invited_count: count,
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: day,
	};
	event_data['events'].push(event);
}

// Display all events of the selected date in card views
function show_events(events, month, day) {
	// daysToEventsCompare(daysToschedule, event_data.events)
	// Clear the dates container
	$('.events-container').empty();
	$('.events-container').show(250);
	// console.log(event_data["events"]);
	// If there are no events for this date, notify the user
	if (events.length === 0) {
		var event_card = $("<div class='event-card'></div>");
		var event_name = $(
			"<div class='event-name'>There are no events planned for " +
				month +
				' ' +
				day +
				'.</div>'
		);
		$(event_card).css({ 'border-left': '10px solid #FF1744' });
		$(event_card).append(event_name);
		$('.events-container').append(event_card);
		daysToEventsCompare(daysToschedule, event_data.events);
	} else {
		// Go through and add each event as a card to the events container
		for (var i = 0; i < events.length; i++) {
			var event_card = $("<div class='event-card'></div>");
			var event_name = $(
				"<div class='event-name'><span style='color: red;'>" +
					events[i]['occasion'] +
					'</span> assigned to:</div>'
			);
			var event_count = $(
				"<div class='event-count'>" +
					events[i]['invited_count'] +
					"</div><div class='removeBtn'>X</div>"
			);
			if (events[i]['cancelled'] === true) {
				$(event_card).css({
					'border-left': '10px solid #FF1744',
				});
				event_count = $("<div class='event-cancelled'>Cancelled</div>");
			}
			$(event_card).append(event_name).append(event_count);
			$('.events-container').append(event_card);
		}

		let removeBtn = document.querySelector('.removeBtn');
		// Add function to remove selected info from events array
	}
	daysToEventsCompare(daysToschedule, event_data.events);
}

// Checks if a specific date has any events
function check_events(day, month, year) {
	var events = [];
	for (var i = 0; i < event_data['events'].length; i++) {
		var event = event_data['events'][i];
		if (
			event['day'] === day &&
			event['month'] === month &&
			event['year'] === year
		) {
			events.push(event);
		}
	}
	return events;
}

// Given data for events in JSON format
var event_data = {
	events: [
		{
			occasion: 'Gustavo',
			invited_count: 'Victor',
			year: 2021,
			month: 1,
			day: 8,
		},
		{
			occasion: 'Gabriel',
			invited_count: 'Victor',
			year: 2021,
			month: 1,
			day: 8,
		},
	],
};

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
