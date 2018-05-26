import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = props => {
    return (

        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
                Selecione uma opção
            </a>
            <Link to="/admin/portfolio" className="list-group-item list-group-item-action">Portfolio</Link>

        </div>
    )
}

export default AdminMenu