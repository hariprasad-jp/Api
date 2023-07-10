

import { Card, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export function EditUserPage() {
    const { userId } = useParams()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [premiumMember, setPremiumMember] = useState(false);

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8000/users/" + userId)
        // setData(response.data);
        const user = response.data
        setName(user.name);
        setEmail(user.email);
        setAge(user.age);
        setPremiumMember(user.premiumMember);
    };

    useEffect(() => { fetchUsers() }, [userId]);

    const updateUser = async (event)=>{
        event.preventDefault();
        await axios.patch("http://localhost:8000/users/" + userId,
            {
                name: name,
                email: email,
                age: parseInt(age),
                premiumMember: premiumMember
            }
        ); 
    }


    return <div className="row justify-content-centre">
        <div className="col-md-4">
            <Card className="p-4">
                <Form className>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" required placeholder="Enter Name" value={name} onChange={(event) => setName(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" required placeholder="Age" value={age} onChange={(event) => setAge(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Premium User" checked={premiumMember} onChange={() => setPremiumMember(!premiumMember)} />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Save
                    </Button>
                </Form>
            </Card>
        </div>
    </div>
}