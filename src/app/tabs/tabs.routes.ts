import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
    {
        path: "tabs",
        component: TabsPage,
        children: [
            {
                path: 'calculatrice',
                loadComponent: () => import('../calculatrice/calculatrice.page').then(m => m.CalculatricePage)
            },
            {
                path: 'enquete',
                loadComponent: () => import('../enquete/enquete.page').then(m => m.EnquetePage)
            },
            {
                path: 'gest-etudiant',
                loadComponent: () => import('../gest-etudiant/gest-etudiant.page').then(m => m.GestEtudiantPage)
            },
        ]
    }
];

