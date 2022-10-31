import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
})
export class NewProyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  img: string = '';
  link: string = '';

  constructor(
    private activatedRouter: ActivatedRoute,
    private proyectoService: ProyectoService,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.img,this.link);
    this.img = this.imageService.url;
    this.proyectoService.save(proyecto).subscribe(
      (data) => {
        console.log(data);
        alert('Proyecto añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    );
  }
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'proyecto_' + id;
    this.imageService.uploadImage($event, name);
  }
}
