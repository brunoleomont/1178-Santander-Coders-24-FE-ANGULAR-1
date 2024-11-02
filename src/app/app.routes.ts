import { Routes } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { ParentComponent } from './parent/parent.component';
import { FormularioReactiveFormsComponent } from './formulario-reactive-forms/formulario-reactive-forms.component';
import { FormularioTemplateDrivenComponent } from './formulario-template-driven/formulario-template-driven.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "", component: MyFirstComponentComponent
    },
    {
        path: "my-first/:name", component: MyFirstComponentComponent
    },
    {
        path: "parent", component: ParentComponent
    },
    {
        path: "reactive", component: FormularioReactiveFormsComponent
    },
    {
        path: "template", component: FormularioTemplateDrivenComponent
    },
    {
        path: "**", component: NotFoundComponent
    }
];
