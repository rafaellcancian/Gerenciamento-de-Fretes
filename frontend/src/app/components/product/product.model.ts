export interface Produto {
    id?: number

    nome: string
    descricao: string
    cliente: string
	status: string
    
    logradouro_origem: string
	bairro_origem: string
	localidade_origem: string
	uf_origem: string
	numero_origem: string
	complemento_origem: string
	
	logradouro_destino: string
	bairro_destino: string
	localidade_destino: string
	uf_destino: string
	numero_destino: string
	complemento_destino: string
}