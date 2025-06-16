<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
      <li><router-link to="/contador">Contador</router-link></li>
      <li><router-link to="/lista-de-tareas">Lista de Tareas</router-link></li>
      <li><router-link to="/registrar">Registro</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { registrarStore } from '@/modules/registro/stores/registrarStore'
import { ref, watch } from 'vue'
const useregistrarStore = registrarStore()

const nombre = ref(useregistrarStore.nombre.value)
const email = ref(useregistrarStore.email.value)
watch(() => useregistrarStore.nombre, (newValue) => {
  nombre.value = newValue
})
watch(() => useregistrarStore.email, (newValue) => {
  email.value = newValue
})
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
