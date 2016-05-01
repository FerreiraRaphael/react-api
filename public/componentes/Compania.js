import React from 'react';

const Compania = ({id, name, description, created_at, updated_at, requests_number, phones, categories, products}) => (
        <li className="collection-item">
            <div className="col center">ID: {id}</div>
            <div className="row">
                <div className="col ">Nome: {name}</div>
                <div className="col ">Descrição: {description}</div>
            </div>
            <div className="row">
                <div className="col ">Criando em: {created_at}</div>
                <div className="col ">Atualizado em: {updated_at}</div>
            </div>
            <div className="row">
                <div className="col ">Número de Pedidos: {requests_number}</div>
                <div className="col ">Telefones: <ul>{phones.map(telefone =>
                    <li> telefone </li>
                ) }</ul></div>
                <div className="col ">Categorias: <ul>{categories.map(categoria =>
                    <li> categoria </li>
                ) }</ul></div>
                <div className="col ">Produtos: <ul>{
                    products.map(produto =>
                        <li>
                            id: {produto.id}
                            <br/> Nome: {produto.name}
                            <br/> descricao: {produto.description}
                            <br/>
                        </li>
                    ) }</ul></div>
            </div>
        </li>
);

export default Compania;