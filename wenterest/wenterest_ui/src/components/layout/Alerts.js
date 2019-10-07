import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.domain) alert.error(`Domain: ${error.msg.domain.join()}`);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.profile_link) alert.error(`Profile link: ${error.msg.profile_link.join()}`);
        }
        if (message !== prevProps.message) {
            if (message.specialistDeleted) alert.success(message.specialistDeleted)
            if (message.specialistAdded) alert.success(message.specialistAdded)
        }
    }
    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
