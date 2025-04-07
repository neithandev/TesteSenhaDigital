<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Adicionar Nova Tarefa</h2>
        <form @submit.prevent="lidarEnvio" class="space-y-4">
            <div>
                <label for="titulo" class="block text-sm font-medium text-gray-700">Título</label>
                <input v-model="formulario.titulo" type="text" id="titulo" required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
            </div>

            <div>
                <label for="descricao" class="block text-sm font-medium text-gray-700">Descrição</label>
                <textarea v-model="formulario.descricao" id="descricao" rows="3"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"></textarea>
            </div>

            <div>
                <label for="dataVencimento" class="block text-sm font-medium text-gray-700">Data de Vencimento</label>
                <input v-model="formulario.dataVencimento" type="date" id="dataVencimento" required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
            </div>

            <button type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer">
                Adicionar Tarefa
            </button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { usarArmazenamentoTarefas } from '../stores/armazenamentoTarefas'

const armazenamentoTarefas = usarArmazenamentoTarefas()

const formulario = reactive({
    titulo: '',
    descricao: '',
    dataVencimento: ''
})

const lidarEnvio = () => {
    armazenamentoTarefas.adicionarTarefa({
        titulo: formulario.titulo,
        descricao: formulario.descricao,
        dataVencimento: formulario.dataVencimento
    })

    formulario.titulo = ''
    formulario.descricao = ''
    formulario.dataVencimento = ''
}
</script>