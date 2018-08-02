import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { inject, observer } from 'mobx-react';

import UserModal from './UserModal.jsx';
import Confirm from './Confirm.jsx';
import UserList from './UserList.jsx'

import './index.css'

@inject('birthdayStore')
@observer
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            confirm: null,
            selectedUser: null
        }
    }
    componentDidMount() {
        this.props.birthdayStore.loadUsers()
    }
    resetState = () => {
        this.setState({ selectedUser: null, showModal: false, confirm: null });
    }
    onSubmitForm = (user) => {
        if (user.id) {
            this.props.birthdayStore.editUser(user);
        } else {
            this.props.birthdayStore.AddUser(user);
        }
        this.setState({ showModal: false, selectedUser: null })
    }
    deleteUser = (user) => {
        this.setState({
            selectedUser: user,
            confirm: {
                message: `Are you sure to delete ${user.first_name} ${user.last_name}?`,
                onOkay: () => {
                    this.props.birthdayStore.deleteUser(this.state.selectedUser.id);
                    this.resetState();
                },
                onCancel: () => {
                    this.resetState();
                }
            },
        });
    }
    editUser = (user) => {
        this.setState({ selectedUser: user, showModal: true });
    }
    openModal = () => {
        this.setState({ showModal: true })
    }
    render() {
        const { birthdayStore } = this.props;
        const { showModal, confirm, selectedUser } = this.state;
        return (
            <div>
                <Grid>
                    <Row>
                        <Col mdOffset={9} xs={12} md={3} >
                            <Button bsStyle="primary" onClick={this.openModal}>Add new User</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <UserList birthdayStore={birthdayStore} editUser={this.editUser} deleteUser={this.deleteUser} />
                        </Col>
                    </Row>
                </Grid>
                <UserModal showModal={showModal} onSubmit={this.onSubmitForm} user={selectedUser} onHide={this.resetState} />
                {confirm && <Confirm message={confirm.message} onOkay={confirm.onOkay} onCancel={confirm.onCancel} />}
            </div>
        );
    }
};

export default Main;