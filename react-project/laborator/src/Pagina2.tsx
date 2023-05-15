import React, { useState } from 'react';

interface MyInfo {
    name: string;
    age: number;
    id: string;
}

export function Pagina2() {
    const [myInfo, setMyInfo] = useState<MyInfo>({
        name: 'Gutu Mihai',
        age: 20,
        id: 'CR-212 | FCIM',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setMyInfo({
            ...myInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <h1>General Information</h1>
            <form className="main">
                <div className="input_cont">
                    <label htmlFor="name">N/P:</label>
                    <input className="input"
                        type="text"
                        id="name"
                        name="name"
                        value={myInfo.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input_cont">
                    <label htmlFor="age">y.o.:</label>
                    <input className="input"
                        type="number"
                        id="age"
                        name="age"
                        value={myInfo.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input_cont">
                    <label htmlFor="id">ID(Group):</label>
                    <input className="input"
                        type="text"
                        id="id"
                        name="id"
                        value={myInfo.id}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    );
}


