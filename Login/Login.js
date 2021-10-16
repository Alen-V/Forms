import React, { useState }  from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 8;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="login">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Control
                autoFocus
                type="email"
                value={email}
                placeholder={'Email'}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Control
                type="password"
                value={password}
                placeholder={'Password'}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" onClick={() => validateForm()}>
              Login
            </Button>
          </Form>
        </div>
      );
}

export default Login