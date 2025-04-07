<template>
  <div>
    <ComponenteBusca />
    <FiltroTarefas />

    <div v-if="tarefasFiltradas.length === 0" class="text-center py-8 text-gray-500">
      Nenhuma tarefa encontrada
    </div>

    <div v-else>
      <ItemTarefa v-for="tarefa in tarefasFiltradas" :key="tarefa.id" :tarefa="tarefa" class="mb-4" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usarArmazenamentoTarefas } from '../stores/armazenamentoTarefas'
import ComponenteBusca from './ComponenteBusca.vue'
import FiltroTarefas from './FiltroTarefas.vue'
import ItemTarefa from './ItemTarefa.vue'

const armazenamentoTarefas = usarArmazenamentoTarefas()
const { tarefasFiltradas } = storeToRefs(armazenamentoTarefas)
</script>