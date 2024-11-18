import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { CarroselComponentComponent } from './components/carrosel-component/carrosel-component.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

export const routes: Routes = [
    { path: '', component: LoginComponentComponent },
    { path: 'personagens', component: CarroselComponentComponent},
    { path: 'characters', component: CharacterListComponent },
    { path: 'character/:id', component: CharacterDetailComponent } ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
