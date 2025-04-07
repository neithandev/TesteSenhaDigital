import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const usarArmazenamentoTarefas = defineStore('tarefas', () => {

    const carregarDoLocalStorage = () => {
        const salvo = localStorage.getItem('tarefas')
        return salvo ? JSON.parse(salvo) : []
    }

    const tarefas = ref(carregarDoLocalStorage())
    const filtro = ref('todas')
    const termoBusca = ref('')


    const salvarNoLocalStorage = () => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas.value))
    }


    watch(tarefas, salvarNoLocalStorage, { deep: true })


    const tarefasFiltradas = computed(() => {
        let resultado = [...tarefas.value]


        if (filtro.value === 'pendentes') {
            resultado = resultado.filter(tarefa => !tarefa.concluida)
        } else if (filtro.value === 'concluidas') {
            resultado = resultado.filter(tarefa => tarefa.concluida)
        }


        if (termoBusca.value) {
            const termo = termoBusca.value.toLowerCase()
            resultado = resultado.filter(t =>
                t.titulo.toLowerCase().includes(termo) ||
                t.descricao.toLowerCase().includes(termo))
        }

        return resultado
    })

    function adicionarTarefa(tarefa) {
        tarefas.value.push({
            id: Date.now(),
            titulo: tarefa.titulo,
            descricao: tarefa.descricao,
            dataVencimento: tarefa.dataVencimento,
            concluida: false
        })
    }

    function alternarTarefa(id) {
        const tarefa = tarefas.value.find(t => t.id === id)
        if (tarefa) {
            tarefa.concluida = !tarefa.concluida
        }
    }

    function definirFiltro(novoFiltro) {
        filtro.value = novoFiltro
    }

    function definirTermoBusca(termo) {
        termoBusca.value = termo
    }

    function editarTarefa(tarefaAtualizada) {
        const index = tarefas.value.findIndex(t => t.id === tarefaAtualizada.id)
        if (index !== -1) {
            tarefas.value[index] = tarefaAtualizada
        }
    }

    return {
        tarefas,
        filtro,
        termoBusca,
        tarefasFiltradas,
        adicionarTarefa,
        alternarTarefa,
        definirFiltro,
        definirTermoBusca,
        editarTarefa
    }
})