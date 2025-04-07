export function formatarData(dataString) {
    if (!dataString) return 'Sem data'
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
    return new Date(dataString).toLocaleDateString('pt-BR', options)
}