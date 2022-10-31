import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
})
export class NewExperienciaComponent implements OnInit {
  titulo: string = '';
  descripcion: string = '';

  constructor(private xpService: ExperienciaService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const xp = new Experiencia(this.titulo, this.descripcion);
    this.xpService.save(xp).subscribe(
      (data) => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    );
  }
}
