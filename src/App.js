import React from 'react';
import Square from './Components/Square'
import ColumnLabel from './Components/ColumnLabel'
import './App.scss';

function App() {
	const indexToDay = [
		'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'
	]
	const squareRows = [...Array(31)]
		.map((_, index) => indexToDay[index % 7] )
		.map((day, index) => (
			<div>
				<ColumnLabel key={index}>{day}</ColumnLabel>
				<ColumnLabel key={index}>{index+1}</ColumnLabel>
				<Square key={index} />
			</div>
		))
	// const weekDayRow = [...Array(31)]
	// 	.map((_, index) => indexToDay[index % 7] )
	// 	.map((day, index) => <ColumnLabel key={index}>{day}</ColumnLabel>)
	// const dateNumRow = [...Array(31)].map((_, index) => <ColumnLabel key={index}>{index+1}</ColumnLabel>)
	// const squareRow = [...Array(31)].map((_, index) => <Square key={index} />)
  return (
    <div className="App">
      <div>{squareRows}</div>
    </div>
  );
}

export default App;
