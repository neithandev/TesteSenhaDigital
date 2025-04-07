<template>
  <div class="mb-6">
    <input v-model="termo" @input="atualizarBusca" type="text" placeholder="Buscar tarefas..."
      class="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usarArmazenamentoTarefas } from '../stores/armazenamentoTarefas'

const termo = ref('')
const armazenamento = usarArmazenamentoTarefas()

const atualizarBusca = () => {
  armazenamento.definirTermoBusca(termo.value)
}
</script>