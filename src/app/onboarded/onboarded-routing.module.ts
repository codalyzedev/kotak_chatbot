import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardedPage } from './onboarded.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardedPageRoutingModule {}
