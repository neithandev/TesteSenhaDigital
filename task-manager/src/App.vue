<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center mb-8">Gerenciador de Tarefas</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FormularioTarefa />
        </div>
        <div>
          <ListaTarefas />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormularioTarefa from './components/FormularioTarefa.vue'
import ListaTarefas from './components/ListaTarefas.vue'
</script>