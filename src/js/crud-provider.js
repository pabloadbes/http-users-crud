// el endpoint al que debo llamar para realizar las peticiones
const crudUrl = 'https://reqres.in/api/users';

const readUsuario = async( id ) => {
    const resp = await fetch( `${ crudUrl }/${ id }` );
    const {data} = await resp.json();

    return data;
}

const createUsuario = async( usuario ) => {
    const resp = await fetch( crudUrl, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}

const updateUsuario = async( id, usuario ) => {
    const resp = await fetch( `${ crudUrl }/${ id }`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}

const deleteUsuario = async ( id ) => {
    const resp = await fetch( `${ crudUrl }/${ id }`, {
        method: 'DELETE',
    });
    return resp.ok ? true : false;
}

export{
    readUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}