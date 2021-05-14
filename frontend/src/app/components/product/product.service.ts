import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./product.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Endereco } from "./endereco.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:8080/produtos";
  cepUrl = "https://viacep.com.br/ws/";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "Fechar", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl+"/post", produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl+"/get").pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readCep(cep: string): Observable<Endereco> {
    cep = cep.replace(/[^\d]+/g, '');
    return this.http.get<Endereco>(this.cepUrl+cep+"/json/").pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Produto> {
    const url = `${this.baseUrl+"/get"}/${id}`;
    return this.http.get<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl+"/put"}/${produto.id}`;
    return this.http.put<Produto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Produto> {
    const url = `${this.baseUrl+"/delete"}/${id}`;
    return this.http.delete<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("ERRO: Por favor preencha todos os campos corretamente. ", true);
    return EMPTY;
  }
}
