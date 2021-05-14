package br.rlc.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.rlc.backend.Models.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

}
