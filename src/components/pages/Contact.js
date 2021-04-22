import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Button, Form, Modal } from 'react-bootstrap';


const EMAIL_SERVICES = {
    serviceId: 'victor_santal',
    templateId: 'first_template',
    name: 'Victor Santal'
};

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            name: 'Victor Santal',
            email: 'harp.victor.santal@gmail.com',
            emailFrom: '',
            clientId: 'user_lMoGgZ4xzjUxuPsE0QELT',
            isOpen: false,
            validForm: false,
            validEmail: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.isValidForm = this.isValidForm.bind(this);
        this.validEmail = this.validEmail.bind(this);
    }

    toggleModal() {
        this.setState({
            isOpen: this.state.isOpen ? false : true
        });
    }

    async isValidForm() {
        if (this.state.validEmail && this.state.feedback.length >= 30) {
            await this.setState({
                validForm: true
            });
        }
    }

    async validEmail() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.state.emailFrom)) {
            await this.setState({
                validEmail: true
            });
        }
        else {
            await this.setState({
                validEmail: false
            });
        }
    }

    async handleChange(event) {
        await this.setState({
            feedback: event.target.value
        });
        this.isValidForm();
    }

    async handleChangeEmail(event) {
        await this.setState({
            emailFrom: event.target.value
        });
        await this.validEmail();
        this.isValidForm();
    }

    handleSubmit(event) {

        event.preventDefault();

        const params = {
            senderEmail: this.state.emailFrom,
            receiverEmail: this.state.email,
            feedback: this.state.feedback
        };

        emailjs.send(EMAIL_SERVICES.serviceId, EMAIL_SERVICES.templateId, params, this.state.clientId)
            .then((response) => {
                this.toggleModal();
            }, (err) => {
                console.log('FAILED...', err);
            })
    }

    render() {

        let btnEnable = (!this.state.validForm || this.state.feedback.length < 30 || !this.state.validEmail) ?
            <Button variant='light' onClick={this.handleSubmit} disabled>Enviar</Button> :
            <Button variant='primary' onClick={this.handleSubmit} >Enviar</Button>;

        let minTextArea = this.state.feedback.length >= 30 ?
            "" : <label>{this.state.feedback.length} - 30 caracteres mínimo</label>;

        return (
            <div className="contact">
                <h1>Contacto</h1>
                <Form>
                    <Form.Group>
                        <label>Correo de contacto*:</label>
                        <Form.Control
                            type="email"
                            className="form-control" 
                            name="email-text"
                            placeholder="Introducte tu correo" 
                            style={{width: '100%', height: '30px'}} 
                            required
                            autoComplete="off"
                            value={this.state.emailFrom}
                            onChange={this.handleChangeEmail}
                            onPaste={this.handleChangeEmail}
                            isInvalid={!this.state.validEmail && this.state.emailFrom.length > 0}
                            isValid={this.state.validEmail && this.state.emailFrom.length > 0}
                        />
                        <Form.Control.Feedback type="invalid">
                            Formato inválido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        {minTextArea}
                        <textarea 
                            className="form-control"
                            id="email-text"
                            name="email-text"
                            onChange={this.handleChange}
                            placeholder="Indica brevemente para que información"
                            required
                            autoComplete="off"
                            value={this.state.feedback}
                            style={{width: '100%', height: '150px'}}
                        />
                    </Form.Group>
                    <Form.Group className="text-center">
                        {btnEnable}
                    </Form.Group>
                </Form>
                <Modal show={this.state.isOpen} centered>
                    <Modal.Header>
                        <Modal.Title className="text-center">¡Mensaje enviado correctamente!</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.toggleModal} >Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );        
    }

} export default Contact;