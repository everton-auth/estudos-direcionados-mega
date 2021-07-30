import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

const appRoutes: Routes = [
    {path: 'cursos', component:CursosComponent},
    {path: 'curso/:id', component:CursoDetalheComponent},
    {path: 'not-found', component: PaginaNaoEncontradaComponent},
    {path:'login', component:LoginComponent},
    {path: '', component: HomeComponent}
]


@NgModule({
    imports:[
RouterModule.forRoot(appRoutes),
    ],
    exports:[
    RouterModule,
    ]

})
export class AppRoutingModule{}