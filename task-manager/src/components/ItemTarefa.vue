<template>
  <div :class="{ 'bg-gray-50': tarefa.concluida }" class="p-4 rounded-lg shadow mb-4">
    <div class="flex justify-between items-start">
      <div>
        <h3 :class="{ 'line-through': tarefa.concluida }" class="font-semibold">
          {{ tarefa.titulo }}
        </h3>
        <p class="text-gray-600 mt-1">{{ tarefa.descricao }}</p>
        <p class="text-sm text-gray-500 mt-2">
          Vencimento: {{ formatarData(tarefa.dataVencimento) }}
        </p>
      </div>
      <div class="flex space-x-2">
        <button @click="abrirEdicao" class="p-2 text-blue-500 hover:text-blue-700 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button @click="alternarTarefa(tarefa.id)" :class="{
          'bg-green-500 hover:bg-green-600': tarefa.concluida,
          'bg-gray-300 hover:bg-gray-400': !tarefa.concluida
        }" class="p-2 rounded-full text-white transition-colors duration-200 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <ModalEdicao v-if="mostrarModal" :tarefa="tarefa" :mostrar="mostrarModal" @fechar="fecharModal" />
</template>

<script setup>
import { ref } from 'vue'
import ModalEdicao from './ModalEdicao.vue'
import { usarArmazenamentoTarefas } from '../stores/armazenamentoTarefas'
import { formatarData } from '../utils/formatadores'

const props = defineProps({
  tarefa: {
    type: Object,
    required: true
  }
})

const armazenamentoTarefas = usarArmazenamentoTarefas()
const { alternarTarefa } = armazenamentoTarefas

const mostrarModal = ref(false)

const abrirEdicao = () => {
  mostrarModal.value = true
}

const fecharModal = () => {
  mostrarModal.value = false
}
</script>