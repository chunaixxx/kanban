// formats into a nice date
export default date => {
	const monthNames = [
		'January', 'February', 'March',
		'April', 'May', 'June', 'July',
		'August', 'September', 'October',
		'November', 'December',
	];

	const h = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
	const m = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	// example: 16:09 14 June 2021
	return `${ h }:${ m } ${ day } ${ monthNames[monthIndex] } ${ year }`;
}