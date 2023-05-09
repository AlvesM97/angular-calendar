import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ScheduleComponent } from './schedule.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ScheduleRoutingModule } from './schedule.routing.module';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    RouterModule,
    MatInputModule,
    MatIconModule,
    DragDropModule,
    CommonModule,
    ScheduleRoutingModule
  ],
  providers: [],
})
export class ScheduleModule {}
