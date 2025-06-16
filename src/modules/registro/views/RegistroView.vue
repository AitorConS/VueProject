<template>
  <div>
    <h2>Formulario de Registro</h2>
    <Form :validation-schema="schema" @submit="OnSubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
        <ErrorMessage name="nombre" />
      </div>
      <div class="form">
        <label for="email">Email</label>
        <Field v-model="email" type="email" name="email" id="email" placeholder="Ingrese su correo electrónico" />
        <ErrorMessage name="email" />
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema.js'
import { registrarStore } from '../stores/registrarStore'
import { ref } from 'vue'

const useregistrarStore = registrarStore()
const nombre = ref('')
const email = ref('')

const OnSubmit = () => {
  useregistrarStore.guardarRegistro(nombre.value, email.value)
  console.log('Formulario enviado')
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
