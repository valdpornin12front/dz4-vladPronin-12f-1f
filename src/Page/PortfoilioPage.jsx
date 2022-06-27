import React from 'react'
import { connect } from 'react-redux'
import { handleTextAction } from '../redux/store/action'

class PorfilioPage extends React.Component {
	constructor(props) {
		super(props)
		this.handelText = this.handelText.bind(this)
	}

	handelText = () => {
		this.props.handleTextAction()
	}

	render() {
		return (
			<div>
				<h1>{this.props.title} </h1>
				<button onClick={this.handelText}>change text </button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		title: state.title.title,
	}
}
const mapDispatchToProps = {
	handleTextAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(PorfilioPage)
