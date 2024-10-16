import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nome = 'Nome de usuário'
  neurotipo = 'Neuro(a)tipica'
  imagem = 'perfil.png'

  medicacoes = [
    {nomeRemedio: 'Rivotril', horario: '20:00', quantidade:'10ML', vezes:'1x por dia'},
    {nomeRemedio: 'Rivotril', horario: '20:00', quantidade:'10ML', vezes:'1x por dia'},
  ];

  wishlist = [
    {wish:'Dinheiro'},
    {wish:'Casa'},
    {wish:'Felicidade'},
  ]
}
