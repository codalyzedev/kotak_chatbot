import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotscreenPage } from './botscreen.page';

const routes: Routes = [
  {
    path: '',
    component: BotscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotscreenPageRoutingModule {}
