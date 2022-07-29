import './stylesCadastro.css';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import api from '../../services/index';
import { useState } from 'react';

function DashCadastroUsuario() {
    const [formCadastro, setCadastro] = useState({ nome: '', email: '', cidade: '', telefone: '' });
    const [warning, setWarning] = useState({ msg: '', show: false });

    function onChange(evt) {
        const value = evt.target.value;
        const key = evt.target.name;

        setCadastro(prev => ({
            ...prev,
            [key]: value
        }));
    }

    async function cadastroUser(e) {
        e.preventDefault();
        if (!formCadastro.email) {
            setWarning({
                msg: 'E-mail obrigatorio!',
                show: true
            });
        }

        setTimeout(() => {
            setWarning({
                msg: '',
                show: false
            });
        }, 5000);

        try {
            await api.post('/cadastro', {
                nome: formCadastro.nome,
                email: formCadastro.email,
                cidade: formCadastro.cidade,
                telefone: formCadastro.telefone

            });

            setCadastro({
                nome: '', email: '', cidade: '', telefone: ''
            });

        } catch (error) {
            return setWarning({
                msg: 'E-mail ja existente!',
                show: true
            });
        }
    }
    function LimparInput() {
        setCadastro(prev => ({
            ...prev, nome: '', email: '', cidade: '', telefone: ''
        }));

    }

    return (
        <div className="container-cadastro">

            <div className='container-formulario-cadastro'>
                <div className='container-interno-cadastro'>
                    <h1>Formulario Salt-System</h1>
                    <form onSubmit={cadastroUser}>
                        <div className='inputs'>
                            <TextField fullWidth label="Nome" type='text' name='nome' value={formCadastro.nome} onChange={onChange} />
                            <TextField fullWidth label="E-mail" type='email' name='email' value={formCadastro.email} onChange={onChange} />
                            <TextField fullWidth label="Cidade" type='text' name='cidade' value={formCadastro.cidade} onChange={onChange} />
                            <TextField fullWidth label="Telefone" type='text' name='telefone' value={formCadastro.telefone} onChange={onChange} />
                        </div>
                        <div className='btns-cadastrar'>
                            <Stack spacing={2} direction="row">
                                <Button id='btn-add-modal' type='submit' variant="contained">CADASTRAR</Button>
                            </Stack >
                            <Stack spacing={2} direction="row">
                                <Button id='limpar-modal' onClick={() => LimparInput()} variant="contained">LIMPAR</Button>
                            </Stack >
                        </div>
                        <span className='editUserError'>{warning.show && warning.msg}</span>
                    </form>
                </div>
            </div>
            <div className='container-img-cadastro'>
                <img src='./imgSalt.svg' alt='logo' />
            </div>
        </div>
    );
}

export { DashCadastroUsuario };