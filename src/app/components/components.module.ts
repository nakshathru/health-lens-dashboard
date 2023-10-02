import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolNavComponent } from './tool-nav/tool-nav.component';

// Angular material toolbar
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ToolNavComponent],
  imports: [
    CommonModule,
    // Angular material modules
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
  ],
  exports: [ToolNavComponent],
})
export class ComponentsModule {}
