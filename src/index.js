//import { obtenerUsuarios } from './js/http-provider'
import { init } from './js/usuarios-page'
//import * as CRUD from "./js/crud-provider";

init();

const inputId = document.querySelector('#inputId');
const inputEmail = document.querySelector('#inputEmail');
const inputName = document.querySelector('#inputName');
const inputAvatar = document.querySelector('#inputAvatar');

const radioCreate = document.querySelector('#radioCreate');
const radioRead   = document.querySelector('#radioRead');
const radioUpdate = document.querySelector('#radioUpdate');
const RadioDelete = document.querySelector('#radioDelete');

//eventos

radioCreate.addEventListener( 'click', () => {
    if( inputId.hasAttribute('disabled') ) {
        inputId.toggleAttribute('disabled');
    }
    if( !inputEmail.hasAttribute('disabled') ) {
        inputEmail.toggleAttribute('disabled');
    }
    if( !inputName.hasAttribute('disabled') ) {
        inputName.toggleAttribute('disabled');
    }
    if( !inputAvatar.hasAttribute('disabled') ) {
        inputAvatar.toggleAttribute('disabled');
    }
})

radioRead.addEventListener( 'click', () => {
    if( !inputId.hasAttribute('disabled') ) {
        inputId.toggleAttribute('disabled');
    }
    if( inputEmail.hasAttribute('disabled') ) {
        inputEmail.toggleAttribute('disabled');
    }
    if( inputName.hasAttribute('disabled') ) {
        inputName.toggleAttribute('disabled');
    }
    if( inputAvatar.hasAttribute('disabled') ) {
        inputAvatar.toggleAttribute('disabled');
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
    if( inputAvatar.hasAttribute('disabled') ) {
        inputAvatar.toggleAttribute('disabled');
    }
})

RadioDelete.addEventListener( 'click', () => {
    if( inputId.hasAttribute('disabled') ) {
        inputId.toggleAttribute('disabled');
    }
    if( inputEmail.hasAttribute('disabled') ) {
        inputEmail.toggleAttribute('disabled');
    }
    if( inputName.hasAttribute('disabled') ) {
        inputName.toggleAttribute('disabled');
    }
    if( inputAvatar.hasAttribute('disabled') ) {
        inputAvatar.toggleAttribute('disabled');
    }
})