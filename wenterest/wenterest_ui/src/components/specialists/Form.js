import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSpecialist } from "../../actions/specialists";

export class Form extends Component {
    state = {
        domain: '',
        email: '',
        profile_link: ''
    }
    static propTypes = {
        addSpecialist: PropTypes.func.isRequired
    };

    _onSubmit = e => {
        e.preventDefault();
        const { domain, email, profile_link } = this.state;
        const specialist = { domain, email, profile_link };
        this.props.addSpecialist(specialist);
        this.setState({
            domain: "",
            email: "",
            profile_link: ""
        });
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { domain, email, profile_link } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Specialist</h2>
                <form onSubmit={this._onSubmit}>
                    <div className="form-group">
                        <label>Domain</label>
                        <input
                            className="form-control"
                            type="text"
                            name="domain"
                            onChange={this.onChange}
                            value={domain}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Profile link</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="profile_link"
                            onChange={this.onChange}
                            value={profile_link}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    { addSpecialist }
)(Form);
