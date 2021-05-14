package br.rlc.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.rlc.backend.Models.Usuario;
import br.rlc.backend.Repositories.UsuarioRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/usuarios")
public class APIUsuarios {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@GetMapping("/get")
	public List<Usuario> getProdutos() {
		return usuarioRepository.findAll();
	}
	
}
