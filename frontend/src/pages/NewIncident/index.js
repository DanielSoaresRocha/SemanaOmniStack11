import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import logoImg from '../../assets/logo.jpeg'
import './styles.css'

export default function NewIncident () {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    async function handleCreateIncident (e) {
        e.preventDefault()

        const data = { title, description, value }
        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: localStorage.getItem('ongId'),
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('Não foi possível cadastrar o incidente')
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img className="logo" src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o texto detalhadamente para encontra o herói para fazer isso</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button onClick={handleCreateIncident} className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}