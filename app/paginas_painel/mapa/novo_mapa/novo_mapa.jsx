import React from "react";
import './novo_mapa.css';
function cadMapa(){
    return(
        <div className='container'>
            <br/>
            <h2>Cadastro de Mapa</h2>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Nome do Mapa</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">TEMA</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option selected>Selecione um tema</option>
                    <option value='1'>Socioeconômica</option>
                    <option value='2'> Mapas Temáticos</option>
                    <option value='3'>Caatinga</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Fontes</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Escala</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>

                <div class="form-group mb-3">
                    <label for="exampleFormControlInput1">Shape</label>
                    <input type="text" class="form-control" id="inputGroupFile02"/>
                </div>


                <div class="form-group">
                    <label for="exampleFormControlInput1">Tipo de Mapa</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Projeção</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Sistema de Coordenadas</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Datum Horizontal</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>

               <div class="form-group">
                    <label for="exampleFormControlInput1">Meridiano Central</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Central</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>

            </form>

            <button type="button" class="btn btn-primary">Enviar</button>
        </div>
    )
}

export default cadMapa