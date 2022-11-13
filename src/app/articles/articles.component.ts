import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  active = true;
  listeArticle = [
    { titre: 'le chapionnat du monde', contenu: 'le chapionnat du monde', auteur: 'Med taher', date: '12/12/2005', categorie: 'sport' },
    { titre: 'les nouveux parents', contenu: 'les nouveux parents', auteur: 'ahmed said', date: '11/11/2018', categorie: 'education' },
    { titre: 'comment ecrire votre CV', contenu: 'pour ressir a decaraucher un emploi', auteur: 'marie elsa', date: '02/04/2017', categorie: 'travail' }


  ]
  

  constructor() { }



}
