import React from 'react';
import './painel.css';
import {Link} from 'react-router-dom';
import './criar1.css';

import {FaMap, FaReadme} from 'react-icons/fa';

function Criar(){
    return(
    <row>
        <div className='cadastro'>
            
            <Link to='/info-mapa' className='cad-mapa'><FaMap/>Criar Mapa</Link >
            
            <Link to='/info-tema' className='cad-tema'><FaReadme/>Criar Tema</Link>

        </div>
    </row>
    )
}

export default Criar