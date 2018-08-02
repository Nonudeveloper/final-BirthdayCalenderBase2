import React from 'react'
import { Col, Button, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en')
momentLocalizer()

const defaultUser = {
    first_name: '',
    last_name: '',
    birthday: null,
    relationship: ''
}


const relationships = [
    {
        key: 'family',
        label: 'Family'
    },
    {
        key: 'friend',
        label: 'Friend'
    },
    {
        key: 'acquaintance',
        label: 'Acquaintance'
    }
]


class UserModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: { ...defaultUser },
            show: false,
            calenderStartDate : new Date(1990,0,1)
        };
    }

    handleClose = () => {
        this.setState({ show: false, user: { ...defaultUser } });
        this.props.onHide();
    }
    componentWillReceiveProps(nextProps) {
        const user =nextProps.user  ? {...nextProps.user, birthday : new Date(nextProps.user.birthday)} : { ...defaultUser };
        this.setState({ user, show: nextProps.showModal })
    }

    handleChange = (key, value) => {
        this.setState({
            user: {
                ...this.state.user,
                [key]:value
            }
        })
    }
    handleDateChange=(date)=>{
        this.setState({ 
            user: {
                ...this.state.user,
                birthday: date
            }
        })
    }
    isValidForm = () => {
        const user = this.state.user;
        for(let key in user){
            if(!user[key]){
                return false;
            }
        }
        return true;
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.isValidForm) {
            this.props.onSubmit(this.state.user);
            this.handleClose();
        }
    }

    render() {
        const { show, user, calenderStartDate } = this.state;
        return (
            <div>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{user.id ? 'Update' : 'Add'} User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal onSubmit={this.onSubmit}>
                            <FormGroup validationState={user.first_name.length > 0 ? 'success' : 'error'}>
                                <Col componentClass={ControlLabel} sm={3}>
                                    First Name*
                                </Col>
                                <Col sm={9}>
                                    <FormControl type="text" name={'first_name'} value={user.first_name} onChange={(e)=>this.handleChange('first_name',e.target.value)} placeholder="First Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup validationState={user.last_name.length > 0 ? 'success' : 'error'}>
                                <Col componentClass={ControlLabel} sm={3}>
                                    Last Name*
                                </Col>
                                <Col sm={9}>
                                    <FormControl type="text" name={'last_name'} value={user.last_name} onChange={(e)=>this.handleChange('last_name',e.target.value)} placeholder="Last Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup validationState={user.relationship.length > 0 ? 'success' : 'error'}>
                                <Col componentClass={ControlLabel} sm={3}>
                                    Relationship*
                                </Col>
                                <Col sm={9}>
                                    <FormControl componentClass="select" placeholder="Select Relationship" name={'relationship'} value={user.relationship} onChange={(e)=>this.handleChange('relationship',e.target.value)}>
                                    <option value=''>Select Relationship</option>
                                       {
                                            relationships.map(r =>
                                                <option key={r.key} value={r.key}>{r.label}</option>
                                            )
                                        }
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup validationState={user.birthday ? 'success' : 'error'}>
                                <Col componentClass={ControlLabel} sm={3}>
                                    Birthday*
                                </Col>
                                <Col sm={9}>
                                    <DateTimePicker
                                        currentDate={calenderStartDate}
                                        onCurrentDateChange={(d)=>this.setState({calenderStartDate : d})}
                                        value={user.birthday}
                                        onChange={(date)=>this.handleChange('birthday',date)}
                                        time={false}
                                        max={new Date()}
                                        containerClassName={user.birthday ? 'input-success' : 'input-error'}
                                        placeholder = {'Date of Birthday'}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={3} sm={9} className="text-right">
                                    <Button type="submit" disabled={!this.isValidForm()}>{user.id ? 'Update' : 'Add'} User</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default UserModal;