import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
    {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
    {path: 'grades', loadChildren: () => import('./grades/grades.module').then(m => m.GradesPageModule)},
    {
        path: 'assignments',
        loadChildren: () => import('./assignments/assignments.module').then(m => m.AssignmentsPageModule)
    },
    {path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
