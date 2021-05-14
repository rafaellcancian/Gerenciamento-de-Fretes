package br.rlc.backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Produto")
public class Produto {

	@Id
	@Column(name = "ID_PRODUTO")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String nome;
	private String descricao;
	private String cliente;
	private String status;
	
	private String logradouro_origem;
	private String bairro_origem;
	private String localidade_origem;
	private String uf_origem;
	private String numero_origem;
	private String complemento_origem;
	
	private String logradouro_destino;
	private String bairro_destino;
	private String localidade_destino;
	private String uf_destino;
	private String numero_destino;
	private String complemento_destino;
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public String getCliente() {
		return cliente;
	}
	
	public void setCliente(String cliente) {
		this.cliente = cliente;
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getLogradouro_origem() {
		return logradouro_origem;
	}
	
	public void setLogradouro_origem(String logradouro_origem) {
		this.logradouro_origem = logradouro_origem;
	}
	
	public String getBairro_origem() {
		return bairro_origem;
	}
	
	public void setBairro_origem(String bairro_origem) {
		this.bairro_origem = bairro_origem;
	}
	
	public String getLocalidade_origem() {
		return localidade_origem;
	}
	
	public void setLocalidade_origem(String localidade_origem) {
		this.localidade_origem = localidade_origem;
	}
	
	public String getUf_origem() {
		return uf_origem;
	}
	
	public void setUf_origem(String uf_origem) {
		this.uf_origem = uf_origem;
	}
	
	public String getNumero_origem() {
		return numero_origem;
	}
	
	public void setNumero_origem(String numero_origem) {
		this.numero_origem = numero_origem;
	}
	
	public String getComplemento_origem() {
		return complemento_origem;
	}
	
	public void setComplemento_origem(String complemento_origem) {
		this.complemento_origem = complemento_origem;
	}
	
	public String getLogradouro_destino() {
		return logradouro_destino;
	}
	
	public void setLogradouro_destino(String logradouro_destino) {
		this.logradouro_destino = logradouro_destino;
	}
	
	public String getBairro_destino() {
		return bairro_destino;
	}
	
	public void setBairro_destino(String bairro_destino) {
		this.bairro_destino = bairro_destino;
	}
	
	public String getLocalidade_destino() {
		return localidade_destino;
	}
	
	public void setLocalidade_destino(String localidade_destino) {
		this.localidade_destino = localidade_destino;
	}
	
	public String getUf_destino() {
		return uf_destino;
	}
	
	public void setUf_destino(String uf_destino) {
		this.uf_destino = uf_destino;
	}
	
	public String getNumero_destino() {
		return numero_destino;
	}
	
	public void setNumero_destino(String numero_destino) {
		this.numero_destino = numero_destino;
	}
	
	public String getComplemento_destino() {
		return complemento_destino;
	}
	
	public void setComplemento_destino(String complemento_destino) {
		this.complemento_destino = complemento_destino;
	}
}
