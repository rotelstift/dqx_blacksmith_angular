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
import { ChartCanvasComponent } from './chart-canvas/chart-canvas.component';
import { FlyingPanComponent } from './tool-type/flying-pan/flying-pan.component';
import { MaterialComponent } from './tool-type/material/material.component';
import { DamageFormComponent } from './damage-form/damage-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemperatureSliderComponent } from './temperature-slider/temperature-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    ProtectionsComponent,
    ToolsComponent,
    ToolDetailComponent,
    WeaponDetailComponent,
    ProtectionDetailComponent,
    ChartCanvasComponent,
    FlyingPanComponent,
    MaterialComponent,
    DamageFormComponent,
    TemperatureSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
