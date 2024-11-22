import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent{
  nome = 'Nome de usuário'
  neurotipo = 'Neuro(a)tipica'
  imagem = 'perfil.png'

}
