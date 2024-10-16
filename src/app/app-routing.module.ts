import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HometipComponent } from './pages/tipico/hometip/hometip.component';
import { MoodbegginComponent } from './pages/tipico/mood/moodbeggin/moodbeggin.component';
import { TasksComponent } from './pages/tipico/order/tasks/tasks.component';
import { PerfilComponent } from './pages/tipico/custom/perfil/perfil.component';
import { MoodquestionComponent } from './pages/tipico/mood/moodquestion/moodquestion.component';
import { MoodformsComponent } from './pages/tipico/mood/moodforms/moodforms.component';
import { AddcalendarComponent } from './pages/tipico/order/addcalendar/addcalendar.component';
import { PerfilsettingsComponent } from './pages/tipico/custom/perfilsettings/perfilsettings.component';
import { AddmedicationComponent } from './pages/tipico/custom/addmedication/addmedication.component';
import { AddwishComponent } from './pages/tipico/custom/addwish/addwish.component';
import { MedicationComponent } from './pages/tipico/custom/id/medication/medication.component';
import { WishComponent } from './pages/tipico/custom/id/wish/wish.component';
import { RegisterComponent } from './pages/log/register/register.component';

const routes: Routes = [
  //tipico
  { path: '', component: HometipComponent },

  { path: 'mood', component: MoodbegginComponent },
  { path: 'moodquest', component: MoodquestionComponent },
  { path: 'moodforms', component: MoodformsComponent },

  { path: 'tasks', component: TasksComponent },
  { path: 'addcalendar', component: AddcalendarComponent },

  { path: 'perfil', component: PerfilComponent },
  { path: 'perfilsettings', component: PerfilsettingsComponent },
  { path: 'addmed', component: AddmedicationComponent },
  { path: 'addwish', component: AddwishComponent },
  { path: 'medication', component: MedicationComponent },
  { path: 'wish', component: WishComponent },

  //log
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
