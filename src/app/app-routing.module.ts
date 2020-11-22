import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthenticatedLayoutComponent} from './layouts/non-authenticated-layout/non-authenticated-layout.component';
import {
  AboutPageComponent, ContactPageComponent,
  LandingPageComponent,
  SectorListComponent,
  SectorsTilesGridComponent
} from './containers';


const routes: Routes = [
  {
    path: '',
    component: NonAuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      // {
      //   path: 'contact',
      //   component: ContactPageComponent,
      // },
      {
        path: 'sectors',
        component: SectorsTilesGridComponent,
        // children: [
        //   {
        //     path: ':sectorId',
        //     children: [
        //       {
        //         path: '',
        //         component: SectorListComponent,
        //       }
        //     ]
        //   }
        // ]
      },
      {
        path: ':sectorId',
        children: [
          {
            path: '',
            component: SectorListComponent,
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
