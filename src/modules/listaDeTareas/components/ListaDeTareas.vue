<template>
  <div>
    <h2>Lista de tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" />
    <ol>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
        <button @click="borrarTarea">Eliminar</button>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tareas = ref([])
const nuevaTarea = ref('')
const addTarea = () => {
  tareas.value.push(nuevaTarea.value)
  nuevaTarea.value = ''
}
const borrarTarea = (index) => {
  tareas.value.splice(index, 1)
}
</script>

<style></style>
