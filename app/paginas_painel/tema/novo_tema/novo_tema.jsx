import React from 'react';

function cadtema(){
    return(
        <>
            <br/>
           <div className='container'>
               <h2>Cadastro de Temas</h2>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Nome Tema</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                
               
                <button type="button" class="btn btn-primary">Enviar</button>
            </form>

        </div>
        </>
    )
}

export default cadtema