import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id: number = params['id']

        this.aluno = this.alunosService.getAluno(id)

       if(this.aluno == null){
          this.router.navigate(['not-found'])
        } 
      }
    );

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  abrirEditar(){
    this.router.navigate(['alunos', this.aluno.id,'edit']);
  }
}
