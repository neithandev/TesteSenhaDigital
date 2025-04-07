<template>
    <div class="flex space-x-4 mb-6">
        <button @click="definirFiltro('todas')"
            :class="{ 'bg-indigo-600 text-white': filtro === 'todas', 'bg-gray-200': filtro !== 'todas' }"
            class="px-4 py-2 rounded-md cursor-pointer">
            Todas
        </button>
        <button @click="definirFiltro('pendentes')"
            :class="{ 'bg-indigo-600 text-white': filtro === 'pendentes', 'bg-gray-200': filtro !== 'pendentes' }"
            class="px-4 py-2 rounded-md cursor-pointer">
            Pendentes
        </button>
        <button @click="definirFiltro('concluidas')"
            :class="{ 'bg-indigo-600 text-white': filtro === 'concluidas', 'bg-gray-200': filtro !== 'concluidas' }"
            class="px-4 py-2 rounded-md cursor-pointer">
            Concluídas
        </button>
    </div>
</template>

<script setup>
import { usarArmazenamentoTarefas } from '../stores/armazenamentoTarefas'
import { storeToRefs } from 'pinia'

const armazenamentoTarefas = usarArmazenamentoTarefas()
const { filtro } = storeToRefs(armazenamentoTarefas)
const { definirFiltro } = armazenamentoTarefas
</script>