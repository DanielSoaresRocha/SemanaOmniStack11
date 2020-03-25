import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logo from '../../assets/logo.jpeg'

export default function Logon () {
    return (
        <div className="logon-container">
            <section className="form">
                <img className="logo" src={logo} alt="logo"></img>
            </section>

            <form>
                <h1>Faça seu logon</h1>

                <input placeholder="Sua ID"></input>
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