import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
})
export class NewEducacionComponent implements OnInit {
  titulo: string = '';
  descripcion: string = '';

  constructor(private eduService: EducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const xp = new Educacion(this.titulo, this.descripcion);
    this.eduService.save(xp).subscribe(
      (data) => {
        alert('Educacion añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    );
  }
}
