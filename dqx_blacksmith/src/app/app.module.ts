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
import { BottomsComponent } from './protection-type/bottoms/bottoms.component';
import { TopsComponent } from './protection-type/tops/tops.component';
import { FootsComponent } from './protection-type/foots/foots.component';
import { MetesComponent } from './protection-type/metes/metes.component';
import { ArmsComponent } from './protection-type/arms/arms.component';
import { DoubleHandedSwordComponent } from './weapon-type/double-handed-sword/double-handed-sword.component';

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
    TemperatureSliderComponent,
    BottomsComponent,
    TopsComponent,
    FootsComponent,
    MetesComponent,
    ArmsComponent,
    DoubleHandedSwordComponent
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
