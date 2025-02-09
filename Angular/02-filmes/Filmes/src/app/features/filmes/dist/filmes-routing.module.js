"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilmesRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_component_1 = require("../../shared/modal/modal.component");
var add_form_films_component_1 = require("./add-form-films/add-form-films.component");
var filmes_component_1 = require("./filmes.component");
var routes = [
    { path: '', component: filmes_component_1.FilmesComponent },
    { path: 'exclude/:id', component: modal_component_1.ModalComponent },
    { path: 'exclude/:id/false', component: filmes_component_1.FilmesComponent },
    { path: 'edit/:id', component: filmes_component_1.FilmesComponent },
    { path: 'view/:id', component: filmes_component_1.FilmesComponent },
    { path: 'add', component: add_form_films_component_1.AddFormFilmsComponent },
];
var FilmesRoutingModule = /** @class */ (function () {
    function FilmesRoutingModule() {
    }
    FilmesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], FilmesRoutingModule);
    return FilmesRoutingModule;
}());
exports.FilmesRoutingModule = FilmesRoutingModule;
