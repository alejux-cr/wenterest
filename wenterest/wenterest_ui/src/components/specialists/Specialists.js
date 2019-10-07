import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSpecialists, deleteSpecialist } from '../../actions/specialists';

export class Specialists extends Component {
    static propTypes = {
        specialists: PropTypes.array.isRequired,
        getSpecialists: PropTypes.func.isRequired,
        deleteSpecialist: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.getSpecialists();
    }
    render() {
        return (
            <Fragment>
                <h2>Specialists</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Domain</th>
                            <th>Email</th>
                            <th>Profile link</th>
                            <th>Created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.specialists.map(specialist => (
                                <tr key={specialist.id}>
                                    <td>{specialist.id}</td>
                                    <td>{specialist.domain}</td>
                                    <td>{specialist.email}</td>
                                    <td>{specialist.profile_link}</td>
                                    <td>{specialist.created_at}</td>
                                    <td><button onClick={this.props.deleteSpecialist.bind(this, specialist.id)} className="btn btn-danger btn-sm">X</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    specialists: state.specialists.specialists
})
export default connect(mapStateToProps, { getSpecialists, deleteSpecialist })(Specialists);
