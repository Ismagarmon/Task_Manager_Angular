import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MessageComponent } from './Components/message/message.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './Components/home/home.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'message', component: MessageComponent},
    { path: 'tasks', component: TasksComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'home', component: HomeComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent},

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PagenotfoundComponent}
];
