import { Endereco } from './../endereco.model';
import { Produto } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  cepOrigem: string
  cepDestino: string

  cepMask = [/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/];

  enderecoOrigem: Endereco = {
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  }

  enderecoDestino: Endereco = {
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  }

  produto: Produto = {
    nome: '',
    descricao: '',
    cliente: '',
    status: '',
    logradouro_origem: '',
    bairro_origem: '',
    localidade_origem: '',
    uf_origem: '',
    numero_origem: '',
    complemento_origem: '',
    logradouro_destino: '',
    bairro_destino: '',
    localidade_destino: '',
    uf_destino: '',
    numero_destino: '',
    complemento_destino: ''
  }

  constructor(private productService: ProductService, private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Área do Cliente > Criar Frete',
      icon: 'post_add',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
  }

  buscarEnderecoOrigem(): void {
    this.productService.readCep(this.cepOrigem).subscribe(data => {
      this.enderecoOrigem = data
    })
  }

  buscarEnderecoDestino(): void {
    this.productService.readCep(this.cepDestino).subscribe(data => {
      this.enderecoDestino = data
    })
  }

  createProduct(): void {
    this.produto.status = "Pendente";

    this.produto.logradouro_origem = this.enderecoOrigem.logradouro;
    this.produto.bairro_origem = this.enderecoOrigem.bairro;
    this.produto.localidade_origem = this.enderecoOrigem.localidade;
    this.produto.uf_origem = this.enderecoOrigem.uf;

    this.produto.logradouro_destino = this.enderecoDestino.logradouro;
    this.produto.bairro_destino = this.enderecoDestino.bairro;
    this.produto.localidade_destino = this.enderecoDestino.localidade;
    this.produto.uf_destino = this.enderecoDestino.uf;

    this.productService.create(this.produto).subscribe(() => {
      this.productService.showMessage('Frete criado com sucesso!')
      this.router.navigate(['/cliente/fretes'])
    })

  }

  cancel(): void {
    this.router.navigate(['/cliente/fretes'])
  }

}
