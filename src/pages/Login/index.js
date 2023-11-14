import './LoginPage.css';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import InputMask from 'react-input-mask';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

function LoginPage() {
  const [form, setForm] = useState('');
  const { setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();


  // Função para armazenar o que foi digitado pelo usuário, dentro dos Inputs
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  // Função para enviar para a API (Usaremos o console para ver o Network)
  function handleSubmit(event) {
    event.preventDefault(); 

    if (form.email === 'regiane' && form.senha === 'LZOHCJGIEQ34' || form.email === 'private_user' && form.senha === 'LUDK54Z5FUA' || form.email === 'jirus' && form.senha === '9X17QHOO69F' || form.email === 'accesscontrol' && form.senha === 'G2HHJ7FJ91W') {
      setAuth(true);
      localStorage.setItem('auth', 'true');
      navigate('/');
      window.alert('Logado com sucesso');
    } else {
      window.alert('Dados inseridos incorretos, tente novamente!');
    }
  }

 

  useEffect(() => {
    const handleWindowClose = (event) => {
      // Aqui você pode adicionar a lógica para remover o token quando a janela é fechada ou a guia é fechada
      localStorage.removeItem('auth');
    };

 

    // Adiciona um ouvinte para o evento de fechamento da janela ou da guia
    window.addEventListener('beforeunload', handleWindowClose);

 

    // Certifique-se de remover o ouvinte quando o componente é desmontado
    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, []);
  //JSX, equivale ao nosso HTML e CSS
  return (
    <form onSubmit={handleSubmit}>
      <div className="container_login">
        <div className="form">
          <div className="container-input-label">
            <h1 className='ac'>Access Control</h1>
            <div className="childen-container-input-label">
              <label>Digite seu usuário</label>
              <InputMask
                placeholder="Usuário"
                onChange={handleChange}
                name="email"
                // mask="9.99"
              />
            </div>
            <div className="childen-container-input-label">
              <label>Digite sua Senha</label>
              <InputMask
                placeholder="Senha"
                onChange={handleChange}
                name="senha"
                type='password'
                // type="number"
                // mask=""
              />
            </div>
          </div>
          <div className="container-button">
            <button type="submit">LOGIN</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginPage
