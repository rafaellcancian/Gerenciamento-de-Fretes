import { EntregadorReadComponent } from './components/entregador/entregador-read/entregador-read.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadByIdComponent } from './components/product/product-read-by-id/product-read-by-id.component';
import { EntregadorReadByIdComponent } from './components/entregador/entregador-read-by-id/entregador-read-by-id.component';
import { SobreComponent } from './components/sobre/sobre.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cliente/fretes",
    component: ProductCrudComponent
  },
  {
    path: "cliente/fretes/criar",
    component: ProductCreateComponent
  },
  {
    path: "cliente/fretes/atualizar/:id",
    component: ProductUpdateComponent
  },
  {
    path: "cliente/fretes/excluir/:id",
    component: ProductDeleteComponent
  },
  {
    path: "cliente/fretes/visualizar/:id",
    component: ProductReadByIdComponent
  },
  {
    path: "entregador/fretes",
    component: EntregadorReadComponent
  },
  {
    path: "entregador/fretes/visualizar/:id",
    component: EntregadorReadByIdComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
