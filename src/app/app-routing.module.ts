import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryyComponent } from './observable/retryy/retryy.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { SubjectAndBehaviourComponent } from './observable/subject-and-behaviour/subject-and-behaviour.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';

const routes: Routes = [
  {path:'promise',component:PromiseComponent},
  {path:'observable',component:ObservableComponent,children:[
    {path:'', component:ListComponent},
    {path:'fromEvent', component:FromEventComponent},
    {path:'interval', component:IntervalComponent},
    {path:'of-from',component:OfFromComponent},
    {path:'to-array',component:ToArrayComponent},
    {path:'custom',component:CustomComponent},
    {path:'map',component:MapComponent},
    {path:'pluck',component:PluckComponent},
    {path:'filter',component:FilterComponent},
    {path:'tap',component:TapComponent},
    {path:'take',component: TakeComponent},
    {path:'retry',component:RetryyComponent},
    {path:'debounceTime',component:DebouncetimeComponent},
    {path:'subject', component:SubjectAndBehaviourComponent},
    {path:'replaySubject', component:ReplaySubjectComponent},
    {path:'asyncSubject', component:AsyncSubjectComponent}
  ]},
  {path:'**',redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
