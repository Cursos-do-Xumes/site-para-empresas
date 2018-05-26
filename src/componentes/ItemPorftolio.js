import React from 'react'

const ItemPortfolio = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src={props.conteudo.imagem} alt='' width='400' height='300' />
                <p><strong>{props.conteudo.titulo}</strong></p>
                <p>{props.conteudo.descricao}</p>
            </div>
        </div>
    )
}

export default ItemPortfolio