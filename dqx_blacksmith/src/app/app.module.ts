import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { ProtectionsComponent } from './protections/protections.component';
import { ToolsComponent } from './tools/tools.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { ProtectionDetailComponent } from './protection-detail/protection-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    ProtectionsComponent,
    ToolsComponent,
    ToolDetailComponent,
    WeaponDetailComponent,
    ProtectionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
