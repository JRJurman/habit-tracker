import React, { useState } from 'react'
import './Square.scss'

export default (props) => {
	const [fillState, setFillState] = useState('empty') //returns value + setter, takes in default value
	const onSetFill = () => {
		if (fillState === 'empty') {
			setFillState('full')
		}
		if (fillState === 'full') {
			setFillState('empty')
		}
	}

	const squareClass = `Square ${fillState}`
	return <button className={squareClass} onClick={onSetFill}></button>
}
