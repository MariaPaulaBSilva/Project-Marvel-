import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../marvel-api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  standalone:true,
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'], 
  imports:[CommonModule]
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  index: number = 0;
  itemsPerPage = 4;
  visibleCharacters = this.characters.slice(0, this.itemsPerPage);


  constructor( private route: ActivatedRoute, 
    private router: Router, 
    private marvelApiService: MarvelApiService) {}

  ngOnInit(): void {
    this.updateVisibleCharacters(); 
    this.marvelApiService.getCharacters().subscribe((data) => {
      this.characters = data.data.results;
      console.log(data.data.results)
    });
  }
  
  selectCharacter(characterId: number): void {
    this.marvelApiService.getCharacterDetails(characterId).subscribe((data: any) => {
      console.log('Personagem Selecionado:', data);
      this.router.navigate(['/character', characterId]); 
    });
  }
  
  next(): void {
    this.index += this.itemsPerPage;
    if (this.index >= this.characters.length) {
      this.index = 0; 
    }
    this.updateVisibleCharacters();
  }

  prev(): void {
    this.index -= this.itemsPerPage;
    if (this.index < 0) {
      this.index = this.characters.length - this.itemsPerPage; 
    }
    this.updateVisibleCharacters();
  }

  updateVisibleCharacters(): void {
    this.visibleCharacters = this.characters.slice(this.index, this.index + this.itemsPerPage);
  }
}


