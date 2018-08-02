import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { observer } from 'mobx-react';
import moment from 'moment'

@observer
class UsersList extends React.Component {

    render() {
        const { birthdayStore } = this.props;
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birthday</th>
                        <th>Relationship</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {birthdayStore.users.map((user, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{moment(user.birthday).format('l')}</td>
                            <td>{user.relationship}</td>
                            <td><Button onClick={() => this.props.editUser(user)} bsSize="small">Edit</Button> <Button bsSize="small" onClick={() => this.props.deleteUser(user)}>Delete</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
};

export default UsersList;
