import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProtectionDetailComponent } from './protection-detail/protection-detail.component'
import { ProtectionsComponent } from './protections/protections.component'
import { ToolDetailComponent } from './tool-detail/tool-detail.component'
import { ToolsComponent } from './tools/tools.component'
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component'
import { WeaponsComponent } from './weapons/weapons.component'

const routes: Routes = [
  { path: 'tools', component: ToolsComponent },
  { path: 'tools/:alias', component: ToolDetailComponent},
  { path: 'weapons', component: WeaponsComponent },
  { path: 'weapons/:alias', component: WeaponDetailComponent},
  { path: 'protections', component: ProtectionsComponent },
  { path: 'protections/:alias', component: ProtectionDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
