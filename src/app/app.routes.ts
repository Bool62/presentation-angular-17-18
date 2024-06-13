import { Route } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DeferViewComponent } from './defer-view/defer-view/defer-view.component';

export const appRoutes: Route[] = [
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'defer-view', component: DeferViewComponent },
];
