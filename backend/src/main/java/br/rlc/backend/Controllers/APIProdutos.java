package br.rlc.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.rlc.backend.Models.Produto;
import br.rlc.backend.Repositories.ProdutoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/produtos")
public class APIProdutos {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@GetMapping("/get")
	public List<Produto> getProdutos() {
		return produtoRepository.findAll();
	}
	
	@GetMapping("/get/{id}")
	public Produto getProdutoById(@PathVariable Integer id) {
		return produtoRepository.getOne(id);
	}
	
	@PostMapping("/post")
	@ResponseStatus(HttpStatus.CREATED)
	public Produto insertProduto(@RequestBody Produto produto) {
		return produtoRepository.save(produto);
	}
	
	@DeleteMapping("/delete/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteProduto(@PathVariable Integer id) {
		produtoRepository.deleteById(id);
	}
	
	@PutMapping("/put/{id}")
	public Produto updateProduto(@RequestBody Produto produto, @PathVariable Integer id) {
		Produto p = produtoRepository.getOne(id);
		
		if (p == null) {
			return null;
		}
		
		p.setNome(produto.getNome());
		p.setDescricao(produto.getDescricao());
		p.setCliente(produto.getCliente());
		p.setStatus(produto.getStatus());
		
		p.setLogradouro_origem(produto.getLogradouro_origem());
		p.setBairro_origem(produto.getBairro_origem());
		p.setLocalidade_origem(produto.getLocalidade_origem());
		p.setUf_origem(produto.getUf_origem());
		p.setNumero_origem(produto.getNumero_origem());
		p.setComplemento_origem(produto.getComplemento_origem());
		
		p.setLogradouro_destino(produto.getLogradouro_destino());
		p.setBairro_destino(produto.getBairro_destino());
		p.setLocalidade_destino(produto.getLocalidade_destino());
		p.setUf_destino(produto.getUf_destino());
		p.setNumero_destino(produto.getNumero_destino());
		p.setComplemento_destino(produto.getComplemento_destino());
		
		return produtoRepository.save(p);
	}
	
}
