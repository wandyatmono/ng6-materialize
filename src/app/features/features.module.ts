import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MzCollapsibleModule } from 'ngx-materialize';
import { MzButtonModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';

import { LoremComponent } from './components/lorem/lorem.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavheaderComponent } from './components/sidenavheader/sidenavheader.component';
import { SidenavmenuComponent } from './components/sidenavmenu/sidenavmenu.component';
import { SidenavfooterComponent } from './components/sidenavfooter/sidenavfooter.component';

@NgModule({
  imports: [
    CommonModule,
    MzCollapsibleModule,
    MzButtonModule,
    MzIconModule,
    MzIconMdiModule
  ],
  declarations: [
    LoremComponent,
    SidenavComponent,
    SidenavheaderComponent,
    SidenavmenuComponent,
    SidenavfooterComponent
  ],
  exports: [
    LoremComponent,
    SidenavComponent
  ]
})
export class FeaturesModule { }
