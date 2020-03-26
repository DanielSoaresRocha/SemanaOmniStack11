import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api'

import logo from '../../assets/logo.jpeg'

export default function Logon () {
    const [id, setId] = useState('')

    const history = useHistory()

    async function handlerLogon (e) {
        e.preventDefault()

        try {
            const response = await api.post('/sessions', { id })

            localStorage.setItem('ongId', id)//localHistory armazena dados na aplicação
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch (err) {
            alert('Error, tente novamente')
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img className="logo" src={logo} alt="logo"></img>
            </section>

            <form onSubmit={handlerLogon}>
                <h1>Faça seu logon</h1>

                <input
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                >

                </input>
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiArrowLeft size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
            </form>
            <img className="logo" src={logo} alt="Heroes" />
        </div>
    )
}