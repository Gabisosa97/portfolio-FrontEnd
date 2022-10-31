import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
})
export class EditExperienciaComponent implements OnInit {
  xpLab: Experiencia = null;
  titulo: string = '';
  descripcion: string = '';
  constructor(
    private xpService: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.xpService.detail(id).subscribe(
      (data) => {
        this.xpLab = data;
      },
      (err) => {
        alert('Error al modificar experiencia.');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.xpService.update(id, this.xpLab).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar experiencia.');
        this.router.navigate(['']);
      }
    );
  }
}
