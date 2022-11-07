import { FaUserNinja } from 'react-icons/fa';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function List() {

    async function handleList(e) {
        e.preventDefault();

        const update = await ClientUsers.listUser();
        if (update.status === 200) {
            toast.success('Usuários buscados com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar todos usuários">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleList}>

                        <button type="submit">Listar</button>
                    </form>
                </div>
                <ul>
                    <li>Nomes</li>
                </ul>
            </div>
        </div>
    )
}