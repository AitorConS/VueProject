import { defineStore } from 'pinia';
import { ref } from 'vue';

export const registrarStore = defineStore('registrar', () => {
    const nombre = ref('');
    const email = ref('');

    const guardarRegistro = (nombreFormulario, EmailFormulario) => {
        nombre.value = nombreFormulario;
        email.value = EmailFormulario;
    }
    return {nombre, email, guardarRegistro };
})