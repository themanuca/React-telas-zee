import Dashboard from './dashboard/dashboard';
import Tm from '../app/paginas_painel/tema';
import Mp from '../app/paginas_painel/mapa';
import Nmp from '../app/paginas_painel/mapa/novo_mapa/novo_mapa';
import Ntm from '../app/paginas_painel/tema/novo_tema/novo_tema';
// Reducers do projeto
export const reducers = {
}

// Rotas do projeto
export const routes = [
    { exact: true , path: '/', component: Dashboard },
    {exact:true, path:'/info-mapa', component: Mp},
    {exact: true, path:'/info-mapa/novo-mapa', component:Nmp},
    
    {exact:true, path:'/info-tema', component: Tm},
    {exact:true, path:'/info-tema/novo-tema', component:Ntm},
    
   

]

// Menu do projeto
export const menu = {
    '/': { title: 'Dashboard', icon: 'dashboard' },
    // 'profiles': {
    //     title: 'Perfis', icon: 'users',
        //Exemplo de menu cascateado
        // children: {
        //     '/permissions': { title: 'Permissões', icon: 'user' },
        // }
    // }
}