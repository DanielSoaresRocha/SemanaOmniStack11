import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.jpeg'
import './styles.css'

export default function NewIncident () {
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
                    <input placeholder="Titulo do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valoe em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}