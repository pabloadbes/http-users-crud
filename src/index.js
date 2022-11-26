import regeneratorRuntime from "regenerator-runtime";
import { init } from './js/usuarios-page'
import * as CRUD from "./js/crud-provider";

init();

let user;
let option;
const formControl = document.querySelectorAll('.form-control');

const thumbnail = document.querySelector('#thumbnail'); 
const btnSubmit = document.querySelector('.btn')
btnSubmit.setAttribute('disabled','true');

const inputId = document.getElementById('inputId');
const inputEmail = document.querySelector('#inputEmail');
const inputName = document.querySelector('#inputName');
const inputAvatar = document.querySelector('#inputAvatar');

const radioCreate = document.querySelector('#radioCreate');
const radioRead   = document.querySelector('#radioRead');
const radioUpdate = document.querySelector('#radioUpdate');
const radioDelete = document.querySelector('#radioDelete');

const formChecks = document.getElementsByName('radioCRUD');

//eventos

radioCreate.addEventListener( 'click', () => {
    formControl[0].value = null;
    formControl[1].value = '';
    formControl[2].value = '';
    thumbnail.setAttribute('src','./assets/img/no-image.png')
    if( !inputId.hasAttribute('disabled') ) {
        inputId.toggleAttribute('disabled');
    }
    if( inputEmail.hasAttribute('disabled') ) {
        inputEmail.toggleAttribute('disabled');
    }
    if( inputName.hasAttribute('disabled') ) {
        inputName.toggleAttribute('disabled');
    }
    option = 'create';
    if( btnSubmit.hasAttribute('disabled')) {
        btnSubmit.toggleAttribute('disabled');
    }
})

radioRead.addEventListener( 'click', () => {
    if( inputId.hasAttribute('disabled') ) {
        inputId.toggleAttribute('disabled');
    }
    if( !inputEmail.hasAttribute('disabled') ) {
        inputEmail.toggleAttribute('disabled');
    }
    if( !inputName.hasAttribute('disabled') ) {
        inputName.toggleAttribute('disabled');
    }
    option = 'read';
    if( btnSubmit.hasAttribute('disabled')) {
        btnSubmit.toggleAttribute('disabled');
    }
})

radioUpdate.addEventListener( 'click', () => {
    if( inputId.hasAttribute('disabled') ) {
        inputId.toggleAttribute('disabled');
    }
    if( inputEmail.hasAttribute('disabled') ) {
        inputEmail.toggleAttribute('disabled');
    }
    if( inputName.hasAttribute('disabled') ) {
        inputName.toggleAttribute('disabled');
    }
    option = 'update';
    if( btnSubmit.hasAttribute('disabled')) {
        btnSubmit.toggleAttribute('disabled');
    }
})

radioDelete.addEventListener( 'click', () => {
    if( inputId.hasAttribute('disabled') ) {
        inputId.toggleAttribute('disabled');
    }
    if( !inputEmail.hasAttribute('disabled') ) {
        inputEmail.toggleAttribute('disabled');
    }
    if( !inputName.hasAttribute('disabled') ) {
        inputName.toggleAttribute('disabled');
    }
    option = 'delete'
    if( btnSubmit.hasAttribute('disabled')) {
        btnSubmit.toggleAttribute('disabled');
    }
})

btnSubmit.addEventListener('click',  async () =>  {
    switch (option) {
        case 'create':
            user = { 
                    email: formControl[1].value,
                    name: formControl[2].value
                }
            user = await CRUD.createUsuario(user);
            alert(`User ${ user.name } was created successfully with id: ${ user.id }. Created at: ${ user.createdAt }.` );
            formControl[0].value = null;
            formControl[1].value = '';
            formControl[2].value = '';
            break;
    
        case 'read':
            user = await CRUD.readUsuario(formControl[0].value);
            if( user ) {
                formControl[1].value = user.email;
                formControl[2].value = user.first_name + ' ' + user.last_name;
                thumbnail.setAttribute('src',user.avatar);
                } else alert(`There is no user with id: ${ formControl[0].value }.`);
            break;
        
        case 'update':
            user = {
                email: formControl[1].value,
                name: formControl[2].value
            }
            user = await CRUD.updateUsuario(formControl[0].value,{ user })
            alert(`User with id: ${ formControl[0].value } was successfully updated. New data: ${ JSON.stringify( user.user) }. Updated at: ${ user.updatedAt }`);
            break;
            
        case 'delete':
            const res = await CRUD.deleteUsuario( formControl[0].value );
            if ( res ) {
                alert( `User with id: ${ formControl} was deleted successfully.` )
            } else {
                alert( `Something is wrong. Can't delete. Check your internet connection.` )                
            }
            break;
                        
        default:
            alert('Meaby you know the dev console and that\'s fine, but not for me. Please select an option of the radio.');
            break;
    }
})