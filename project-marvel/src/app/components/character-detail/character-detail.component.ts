import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelApiService } from '../../marvel-api.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  imports:[CommonModule]
})
export class CharacterDetailComponent {
  characterDetails: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marvelApiService: MarvelApiService
  ) {
    this.route.params.subscribe(params => {
      const characterId = +params['id'];
      this.getCharacterDetails(characterId);
    });
  }

  getCharacterDetails(characterId: number): void {
    this.marvelApiService.getCharacterDetails(characterId).subscribe((data: any) => {
      if (data?.data?.results?.length > 0) {
        this.characterDetails = data.data.results[0];
        console.log('Detalhes do Personagem:', this.characterDetails);
      } else {
        console.error('Nenhum detalhe do personagem encontrado.');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/characters']);
  }
}
