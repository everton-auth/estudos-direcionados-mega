import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";


const APP_ROUTES: Routes = [
    {path: 'cursos', component:CursosComponent},
    {path: 'curso/:id', component:CursoDetalheComponent},
    {path: 'not-found', component: PaginaNaoEncontradaComponent},
    {path:'login', component:LoginComponent},
    {path: '', component: HomeComponent}
]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);