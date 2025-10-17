import React from "react";
import PropTypes from 'prop-types';

class Student extends React.Component {
    static defaultProps = {
        // fnm: PropTypes.string.isRequired
        name: "NO Name",
        college: "NO College",
        city: "NO City"
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h2>Student Information</h2>
                {/*<p>{JSON.stringify(this.props)}</p>*/}
                <p>Student ID: {this.props.sid}</p>
                <p>Student Name: {this.props.name}</p>
                <p>{this.props.college}, {this.props.city}</p>
            </>
        )
    }
}

Student.propTypes = {
    sid:PropTypes.number,
    name: PropTypes.string.isRequired,
    college: PropTypes.string.isRequired,
    city: PropTypes.string
}

export default Student;