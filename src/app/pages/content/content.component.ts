import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://www.einerd.com.br/wp-content/uploads/2019/07/Tony-Stark-Estalar-de-Dedos-Homenagem-890x466.jpg';
  contentTitle: string = 'Minha Noticia';
  contentDescription: string = 'Olá Mundo!!';

  constructor() { }

  ngOnInit(): void {
  }

}
