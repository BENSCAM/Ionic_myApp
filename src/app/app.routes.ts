import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: 'home',
//     loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
//   },
//   {
//     path: '',
//     redirectTo: 'calculatrice',
//     pathMatch: 'full',
//   },
//   {
//     path: 'enquete',
//     loadComponent: () => import('./enquete/enquete.page').then( m => m.EnquetePage)
//   },
//   {
//     path: 'calculatrice',
//     loadComponent: () => import('./calculatrice/calculatrice.page').then( m => m.CalculatricePage)
//   },
//   {
//     path: 'gest-etudiant',
//     loadComponent: () => import('./gest-etudiant/gest-etudiant.page').then( m => m.GestEtudiantPage)
//   },
//   {
//     path: 'tabs',
//     loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
//   },
  
  
// ];

export const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./tabs/tabs.routes'). then((m) => m.routes),
  },
  {
    path: 'list-fille',
    loadComponent: () => import('./list-fille/list-fille.page').then( m => m.ListFillePage)
  },
  {
    path: 'list-garcon',
    loadComponent: () => import('./list-garcon/list-garcon.page').then( m => m.ListGarconPage)
  },
  {
    path: 'todolist',
    loadComponent: () => import('./todolist/todolist.page').then( m => m.TodolistPage)
  },
  {
    path: 'page-etudiant',
    loadComponent: () => import('./page-etudiant/page-etudiant.page').then( m => m.PageEtudiantPage)
  },
  {
    path: 'page-list-etudiant',
    loadComponent: () => import('./page-list-etudiant/page-list-etudiant.page').then( m => m.PageListEtudiantPage)
  },
  {
    path: 'page-list-etudiant/:id',
    loadComponent: () => import('./page-list-etudiant/page-list-etudiant.page').then( m => m.PageListEtudiantPage)
  },
  {
    path: 'confirmation-etudiant',
    loadComponent: () => import('./confirmation-etudiant/confirmation-etudiant.page').then( m => m.ConfirmationEtudiantPage)
  },
  {
    path: 'list-etudiant',
    loadComponent: () => import('./list-etudiant/list-etudiant.page').then( m => m.ListEtudiantPage)
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.page').then( m => m.AdminPage)
  },
  {
    path: 'admin/:id',
    loadComponent: () => import('./admin/admin.page').then( m => m.AdminPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user.page').then( m => m.UserPage)
  },
  {
    path: 'user/:id',
    loadComponent: () => import('./user/user.page').then( m => m.UserPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'list-contact',
    loadComponent: () => import('./list-contact/list-contact.page').then( m => m.ListContactPage)
  },
  {
    path: 'enregistrement',
    loadComponent: () => import('./enregistrement/enregistrement.page').then( m => m.EnregistrementPage)
  },
  {
    path: 'enregistrement/:numero',
    loadComponent: () => import('./enregistrement/enregistrement.page').then( m => m.EnregistrementPage)
  },
  {
    path: 'reservation',
    loadComponent: () => import('./reservation/reservation.page').then( m => m.ReservationPage)
  }
]