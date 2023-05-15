import React, { useState, useEffect } from 'react';
import { useStore } from './MyStore';
import './index.css';

function MyComponent() {
    const store = useStore();

    const [localData, setLocalData] = useState<any>({ name: '', address: '', phone: '' });
    const myData = store.myData;

    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(-1);

    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!localData.name || !localData.address || !localData.phone) {
            alert('Introduceti toate campurile.');
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            store.addObject(localData);
            localStorage.setItem('myData', JSON.stringify(store.myData));
            setIsLoading(false);
        }, 2000);

    };


    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ name: '', address: '', phone: '' });
        localStorage.setItem('myData', JSON.stringify(store.myData));
    };

    const handleUpdateObject = (index: number, newData: any) => {
        store.updateObject(index, newData);
        setIsLoading(true);
        setTimeout(() => {
            localStorage.setItem('myData', JSON.stringify(store.myData));
            setIsLoading(false);
        }, 2000);

        // setează valorile din obiectul myData în starea localData
        const dataToUpdate = store.myData[index];
        setLocalData({ name: dataToUpdate.name, address: dataToUpdate.address, phone: dataToUpdate.phone });
        setIsEditing(false);
        setEditingIndex(-1);
    };

    const handleEditObject = (index: number) => {
        const dataToUpdate = store.myData[index];
        setLocalData({ name: dataToUpdate.name, address: dataToUpdate.address, phone: dataToUpdate.phone });
        setIsEditing(true);
        setEditingIndex(index);
    };

    const handleSaveObject = () => {
        if (editingIndex >= 0) {
            handleUpdateObject(editingIndex, localData);
        }
    };

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('myData');
        if (data) {
            store.setMyData(JSON.parse(data));
        } else {
            localStorage.setItem('myData', JSON.stringify(store.myData));
        }
    }, [store]);

    useEffect(() => {
        if (!isLoading) {
            const data = localStorage.getItem('myData');
            if (data) {
                store.setMyData(JSON.parse(data));
            }
        }
    }, [isLoading, store]);

    return (

        <div className="container">
            <h1 className="title">Gutu Mihai Lab5_2</h1>
            <form className="form" onSubmit={handleAddObject}>
                <input
                    className="input"  type="text" placeholder="Nume" defaultValue={localData.name} onChange={(e) => setLocalData({ ...localData, name: e.target.value })}
                />
                <input
                    className="input" type="text" placeholder="Adresa" defaultValue={localData.address} onChange={(e) => setLocalData({ ...localData, address: e.target.value })}
                />
                <input
                    className="input" type="text" placeholder="Telefon" defaultValue={localData.phone} onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
                />
                <button className="button" type="submit">{isLoading ? 'Se incarca...' : 'Adauga'}</button>

            </form>
            <table className="table">
                <thead>
                <tr>
                    <th>Nume</th>
                    <th>Adresa</th>
                    <th>Telefon</th>
                    <th>Actiuni</th>
                </tr>
                </thead>
                <tbody>
                {myData.map((item: any, index: number) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>
                            <button className="button edit" onClick={() => handleEditObject(index)}>
                                Editeaza
                            </button>
                            <button className="button delete" onClick={() => handleDeleteObject(index)}>
                                Sterge
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {isEditing && (
                <div className="edit-form">
                    <h2>Editare</h2>
                    <form onSubmit={handleSaveObject}>
                        <input
                            className="input"
                            type="text"
                            placeholder="Nume"
                            value={localData.name}
                            onChange={(e) => setLocalData({ ...localData, name: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Adresa"
                            value={localData.address}
                            onChange={(e) => setLocalData({ ...localData, address: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Telefon"
                            value={localData.phone}
                            onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
                        />
                        <div className="edit-form-buttons">
                            <button className="button save" type="submit">
                                Salveaza
                            </button>
                            <button className="button cancel" onClick={() => setIsEditing(false)}>
                                Anuleaza
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default MyComponent;