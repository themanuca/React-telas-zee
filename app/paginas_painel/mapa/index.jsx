import React from "react";
import './index.css';
import { Link } from 'react-router-dom'

function infoMapa(){
    return(
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">TEMAS</th>
                    <th scope="col">FONTES</th>
                    <th scope="col">ESCALA</th>
                    <th scope="col">SHAPE</th>
                    <th scope="col">TIPO DE MAPA</th>
                    <th scope="col">PROJEÇÃO</th>
                    <th scope="col">SISTEMA DE COORDENADAS</th>
                    <th scope="col">DATUM HORIZONTAL</th>
                    <th scope="col">MERIDIANO CENTRAL</th>
                    <th scope="col">ESCALA</th>
                    <th scope="col">AÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>   <button type="button" class="btn btn-danger">Delete</button> </td>
                    <td><button type="button" class="btn btn-warning">Editar</button></td>
                    <td><button type="button" class="btn btn-info">Visualizar</button></td>
                    </tr>
                </tbody>
            </table>
        
            <div className='line'></div>

            <Link to='/info-mapa/novo-mapa'>
                <div className='btn-novomap'>
                    <button type="button" class="btn btn-primary">Novo Mapa</button>
                </div>
            </Link>
        </div>
    )
}

export default infoMapa