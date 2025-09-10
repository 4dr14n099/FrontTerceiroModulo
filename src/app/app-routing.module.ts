import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormaPagamentoCrudComponent } from './view/forma-pagamento-crud/forma-pagamento-crud.component';
import { PecasCrudComponent } from './view/pecas-crud/pecas-crud.component';
import { ClientesCrudComponent } from './view/clientes-crud/clientes-crud.component';


//configuração para rotear entre as paginas na home
const routes: Routes = [
  {
    path: "fpagamentos",
    component: FormaPagamentoCrudComponent
  },
  {
    path: "pecas",
    component: PecasCrudComponent
  },
  {
  path: "clientes",
    component: ClientesCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
