import { Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './Components/home/home.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MusicplayerComponent } from './Components/musicplayer/musicplayer.component';
import { CardgameComponent } from './Components/cardgame/cardgame.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent},
    { path: 'home', component: HomeComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'musicplayer', component: MusicplayerComponent},
    { path: 'cardgame', component: CardgameComponent},

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PagenotfoundComponent}
];
