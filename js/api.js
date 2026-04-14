const URL_BASE = 'http://localhost:3000'

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`)
            return await response.json()
        }
        catch (error) {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json()
        }
        catch (error) {
            alert('Erro ao salvar pensamento')
            throw error
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`)
            return await response.json()
        }
        catch (error) {
            alert('Erro ao buscar pensamento')
            throw error
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json()
        }
        catch (error) {
            alert('Erro ao editar pensamentos')
            throw error
        }
    },
    
    async exluirPensamento(id) {
        try {
            await fetch(`${URL_BASE}/pensamentos/${id}`, {
                method: "DELETE"
            })
        }
        catch (error) {
            alert('Erro ao exluir um pensamento')
            throw error
        }
    },

    async buscarPensamentoPorTermo(termo) {
        try {
            const pensamentos = await this.buscarPensamentos()
            const termoEmMinusculas = termo.toLowerCase()
    
            const pensamentosFiltrados = pensamentos.filter((pensamento) => {
                return(pensamento.conteudo.toLowerCase().includes(termoEmMinusculas) ||
                pensamento.autoria.toLowerCase().includes(termoEmMinusculas))
            })
            return pensamentosFiltrados
        } 
        catch (error) {
            alert('Erro ao filtrar pensamentos')
            throw error
        }
    }
}

export default api;