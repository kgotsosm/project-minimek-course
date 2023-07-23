import {connect} from "react-redux";
import {Component} from "react";

const mapState = state => ({
	data : state.test.data
})

class Sample extends Component {
	render() {
		const {data} = this.props

		return (
			<div>
				Data from Redux: {data}
			</div>
		)
	}
}
export default connect(mapState)(Sample)