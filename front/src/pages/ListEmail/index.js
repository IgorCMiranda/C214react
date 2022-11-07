import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ListEmail() {

    const [email, setEmail] = useState('');

    async function handleSave(e) {
        e.preventDefault();

        const data = {
            email: email
        }

        const update = await ClientUsers.listUserEmail(data);
        if (update.status === 200) {
            toast.success('Busca bem sucedida');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Buscar usuário por email">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSave}>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Buscar</button>
                    </form>
                </div>
                <ul>
                    <li>Retorno</li>
                </ul>
            </div>
        </div>
    )
}