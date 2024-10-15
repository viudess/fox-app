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
    CustomuserprofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
