<template>
  <transition name="modal">
    <div v-if="mostrar" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-4">Editar Tarefa</h2>

          <form @submit.prevent="salvarEdicao">
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Título</label>
              <input v-model="tarefaEditada.titulo" class="w-full p-2 border rounded">
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Descrição</label>
              <textarea v-model="tarefaEditada.descricao" class="w-full p-2 border rounded" rows="3"></textarea>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Data de Vencimento</label>
              <input v-model="tarefaEditada.dataVencimento" type="date" class="w-full p-2 border rounded">
            </div>

            <div class="flex justify-end space-x-3">
              <button type="button" @click="fecharModal"
                class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer">
                Cancelar
              </button>

              <button type="submit"
                class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import { usarArmazenamentoTarefas } from '../stores/armazenamentoTarefas'

const props = defineProps({
  mostrar: Boolean,
  tarefa: Object
})

const emit = defineEmits(['fechar'])

const armazenamento = usarArmazenamentoTarefas()
const tarefaEditada = ref({ ...props.tarefa })

watch(() => props.tarefa, (novaTarefa) => {
  tarefaEditada.value = { ...novaTarefa }
})

const salvarEdicao = () => {
  armazenamento.editarTarefa(tarefaEditada.value)
  fecharModal()
}

const fecharModal = () => {
  emit('fechar')
}
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>