import { obtenerUsuarios } from "./http-provider";

const body  = document.body;
let numFila = 0;
const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Users</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.prepend( div );
}

const crearFilaUsuario = ( { id, email, first_name, last_name, avatar } ) => {

    numFila++;
    const html = `
        <td scope="col"> ${ numFila }. </td>
        <td scope="col"> ${ email } </td>
        <td scope="col"> ${ first_name } ${ last_name } </td>
        <td scope="col">
            <img class="img-thumbnail" src="${ avatar }">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    const tBody = document.querySelector('tbody');
    tBody.appendChild( tr );
}

export const init = async() => {
    crearHtml();
    ( await obtenerUsuarios() ).forEach( crearFilaUsuario );
}

