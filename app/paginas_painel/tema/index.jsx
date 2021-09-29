import React from 'react';
import { Link } from 'react-router-dom';

function cadtema(){
    return(
        
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">Ult. Alteração</th>
                    <th scope="col">Oculto</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Socioeconômica </td>
                        <td>2021-09-27</td>
                        <td> <h1><input type="checkbox"/></h1></td>
                    </tr>
                </tbody>

            </table>

            <div className='line'></div>

            <Link to='/info-tema/novo-tema'>
                <div className='btn-novomap'>
                    <button type="button" class="btn btn-primary">Novo Tema</button>
                </div>
            </Link>
            



        </div>
        
    )
}

export default cadtema