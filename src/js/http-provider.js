const usuariosUrl = 'https://reqres.in/api/users?page=2';

const obtenerUsuarios = async() => {
    const resp = await fetch( usuariosUrl );
    const { data:usuarios } = await resp.json();

    return usuarios;
};


export {
    obtenerUsuarios
}