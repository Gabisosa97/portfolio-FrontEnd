import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  // URL = 'http://localhost:8080/personas/';
  // URL = 'https://backend-portfolio-gabisosa97.herokuapp.com/personas/';
  URL = environment.URL + '/personas/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  public save(persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', persona);
  }

  public update(id: number, persona: persona): Observable<any> {
    return this.httpClient.put<any>(
      this.URL + `actualizar/${id}`,
      persona
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
