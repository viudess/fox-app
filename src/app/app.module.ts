import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HometipComponent } from './pages/tipico/hometip/hometip.component';
import { MoodbegginComponent } from './pages/tipico/mood/moodbeggin/moodbeggin.component';
import { MoodquestionComponent } from './pages/tipico/mood/moodquestion/moodquestion.component';
import { MoodformsComponent } from './pages/tipico/mood/moodforms/moodforms.component';
import { TasksComponent } from './pages/tipico/order/tasks/tasks.component';
import { AddtasksComponent } from './pages/tipico/order/addtasks/addtasks.component';
import { AddcalendarComponent } from './pages/tipico/order/addcalendar/addcalendar.component';
import { PerfilComponent } from './pages/tipico/custom/perfil/perfil.component';
import { PerfilsettingsComponent } from './pages/tipico/custom/perfilsettings/perfilsettings.component';
import { MedicationComponent } from './pages/tipico/custom/id/medication/medication.component';
import { WishComponent } from './pages/tipico/custom/id/wish/wish.component';
import { AddwishComponent } from './pages/tipico/custom/addwish/addwish.component';
import { AddmedicationComponent } from './pages/tipico/custom/addmedication/addmedication.component';
import { HomeatipComponent } from './pages/atipico/homeatip/homeatip.component';
import { CrisissettingsComponent } from './pages/atipico/crisissettings/crisissettings.component';
import { RegisterComponent } from './pages/log/register/register.component';
import { LoginComponent } from './pages/log/login/login.component';
import { AcessibilityComponent } from './pages/log/acessibility/acessibility.component';
import { SplashComponent } from './pages/log/splash/splash.component';
import { UserchoiceComponent } from './pages/log/userchoice/userchoice.component';
import { CustomuserComponent } from './pages/log/customuser/customuser.component';
import { CustomuseratipComponent } from './pages/log/customuseratip/customuseratip.component';
import { FamcreateComponent } from './pages/log/famcreate/famcreate.component';
import { FamenterComponent } from './pages/log/famenter/famenter.component';
import { CustomuserprofComponent } from './pages/log/customuserprof/customuserprof.component';
import { MoodbegginAtipComponent } from './pages/atipico/mood/moodbeggin-atip/moodbeggin-atip.component';
import { MoodformsAtipComponent } from './pages/atipico/mood/moodforms-atip/moodforms-atip.component';
import { MoodquestionAtipComponent } from './pages/atipico/mood/moodquestion-atip/moodquestion-atip.component';
import { TasksAtipComponent } from './pages/atipico/order/tasks-atip/tasks-atip.component';
import { AddtasksAtipComponent } from './pages/atipico/order/addtasks-atip/addtasks-atip.component';
import { AddcalendarAtipComponent } from './pages/atipico/order/addcalendar-atip/addcalendar-atip.component';
import { PerfilAtipComponent } from './pages/atipico/custom/perfil-atip/perfil-atip.component';
import { PerfilsettingsAtipComponent } from './pages/atipico/custom/perfilsettings-atip/perfilsettings-atip.component';

@NgModule({
  declarations: [
    AppComponent,
    HometipComponent,
    MoodbegginComponent,
    MoodquestionComponent,
    MoodformsComponent,
    TasksComponent,
    AddtasksComponent,
    AddcalendarComponent,
    PerfilComponent,
    PerfilsettingsComponent,
    MedicationComponent,
    WishComponent,
    AddwishComponent,
    AddmedicationComponent,
    HomeatipComponent,
    CrisissettingsComponent,
    RegisterComponent,
    LoginComponent,
    AcessibilityComponent,
    SplashComponent,
    UserchoiceComponent,
    CustomuserComponent,
    CustomuseratipComponent,
    FamcreateComponent,
    FamenterComponent,
    CustomuserprofComponent,
    MoodbegginAtipComponent,
    MoodformsAtipComponent,
    MoodquestionAtipComponent,
    TasksAtipComponent,
    AddtasksAtipComponent,
    AddcalendarAtipComponent,
    PerfilAtipComponent,
    PerfilsettingsAtipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
