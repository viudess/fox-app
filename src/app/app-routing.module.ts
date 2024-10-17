import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//tipico
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

//login
import { RegisterComponent } from './pages/log/register/register.component';
import { LoginComponent } from './pages/log/login/login.component';
import { UserchoiceComponent } from './pages/log/userchoice/userchoice.component';
import { AcessibilityComponent } from './pages/log/acessibility/acessibility.component';
import { CustomuserComponent } from './pages/log/customuser/customuser.component';
import { CustomuseratipComponent } from './pages/log/customuseratip/customuseratip.component';
import { CustomuserprofComponent } from './pages/log/customuserprof/customuserprof.component';
import { FamcreateComponent } from './pages/log/famcreate/famcreate.component';
import { FamenterComponent } from './pages/log/famenter/famenter.component';
import { SplashComponent } from './pages/log/splash/splash.component';

//atipico
import { HomeatipComponent } from './pages/atipico/homeatip/homeatip.component';
import { MoodbegginAtipComponent } from './pages/atipico/mood/moodbeggin-atip/moodbeggin-atip.component';
import { MoodquestionAtipComponent } from './pages/atipico/mood/moodquestion-atip/moodquestion-atip.component';
import { MoodformsAtipComponent } from './pages/atipico/mood/moodforms-atip/moodforms-atip.component';
import { TasksAtipComponent } from './pages/atipico/order/tasks-atip/tasks-atip.component';
import { AddcalendarAtipComponent } from './pages/atipico/order/addcalendar-atip/addcalendar-atip.component';
import { PerfilAtipComponent } from './pages/atipico/custom/perfil-atip/perfil-atip.component';

const routes: Routes = [
  //tipico
  { path: '', redirectTo: '/splash', pathMatch: 'full' },

  { path: 'home', component: HometipComponent },

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
  { path: 'login', component: LoginComponent },
  { path: 'userchoice', component: UserchoiceComponent },
  { path: 'acess', component: AcessibilityComponent },
  { path: 'cust.user', component: CustomuserComponent },
  { path: 'cust.atip', component: CustomuseratipComponent },
  { path: 'cust.prof', component: CustomuserprofComponent },
  { path: 'famcreate', component: FamcreateComponent },
  { path: 'famenter', component: FamenterComponent },
  { path: 'splash', component: SplashComponent },

  //atipico
  { path: 'atip', component: HomeatipComponent },

  { path: 'mood-atip', component: MoodbegginAtipComponent },
  { path: 'moodquest-atip', component: MoodquestionAtipComponent },
  { path: 'moodforms-atip', component: MoodformsAtipComponent },

  { path: 'tasks-atip', component: TasksAtipComponent },
  { path: 'addcalendar-atip', component: AddcalendarAtipComponent },

  { path: 'perfil-atip', component: PerfilAtipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
