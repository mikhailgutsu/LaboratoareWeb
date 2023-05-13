import React, { useState } from 'react';
import { Input, Form, Button } from 'antd';

import './App.css';

interface MyInterface {
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
}

export interface MyExtendedInterface extends MyInterface {
    occupation: string;
    salary: number;
}

interface MyComponentProps {
    data: MyExtendedInterface;
    onSubmit: (data: MyExtendedInterface) => void;
}

export const App: React.FC<MyComponentProps> = ({ data, onSubmit }) => {
    const [formData, setFormData] = useState(data);

    const handleFinish = () => {
        onSubmit(formData);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Form onFinish={handleFinish}>
            <Form.Item label="Numele Studentului">
                <Input name="name" value={formData.name} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Varsta">
                <Input name="age" value={formData.age} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Posta Corporativa">
                <Input name="email" value={formData.email} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Addressa">
                <Input name="address" value={formData.address} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Telefonul">
                <Input name="phone" value={formData.phone} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Occupatie">
                <Input name="occupation" value={formData.occupation} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Bursa">
                <Input name="salary" value={formData.salary} onChange={handleChange} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ background: 'gray' }}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default App;
