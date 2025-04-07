# 📝 Gerenciador de Tarefas Vue.js

Aplicação completa para gerenciamento de tarefas com persistência local, desenvolvida com Vue 3 e Tailwind CSS.

## ✨ Funcionalidades

- ✅ Adicionar tarefas com título, descrição e data
- 🔍 Busca textual integrada
- 🗂 Filtros por status (todas/pendentes/concluídas)
- ✏️ Edição de tarefas existentes
- 💾 Persistência automática no localStorage
- 📱 Design responsivo
- 🎨 Interface acessível e intuitiva

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+
- npm 8+

### Instalação
```bash
# Clone o repositório
git clone https://github.com/neithandev/TesteSenhaDigital

# Acesse a pasta
cd task-manager

# Instale as dependências
npm install
```

### Desenvolvimento
```bash
# Inicie o servidor local
npm run dev
```
Acesse: http://localhost:5173

### Produção
```bash
# Build para produção
npm run build

# Servir a build localmente
npm run preview
```

## 🏗 Estrutura do Projeto
```
src/
├── assets/              # Recursos estáticos
├── components/          # Componentes Vue
│                        # Componentes específicos

├── stores/              # Gerenciamento de estado (Pinia)
│   └── armazenamentoTarefas.js 

├── utils/               # Utilitários
├── App.vue              # Componente raiz
└── main.js              # Configuração principal
```

## 🛠 Tecnologias Utilizadas
- **Vue 3** - Framework principal
- **Pinia** - Gerenciamento de estado
- **Tailwind CSS** - Estilização
- **Vite** - Build tool
- **ESLint + Prettier** - Padronização de código

**Desenvolvido por [Nathan]** - [nathanlunelli@gmail.com]