import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  proyecto: Proyecto[] = [];
  constructor(
    public proyectoService: ProyectoService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyecto() {
    this.proyectoService.lista().subscribe((data) => {
      this.proyecto = data;
    });
  }
  delete(id?: number) {
    if (id != undefined) {
      this.proyectoService.delete(id).subscribe(
        (data) => {
          this.cargarProyecto();
        },
        (err) => {
          alert('No se pudo borrar la educacion.');
          console.log(err);
        }
      );
    }
  }
}
