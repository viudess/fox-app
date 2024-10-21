import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//components
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
import { TasksAtipComponent } from './pages/atipico/order/tasks-atip/tasks-atip.component';
import { PerfilAtipComponent } from './pages/atipico/custom/perfil-atip/perfil-atip.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { RadioComponent } from './components/general/radio/radio.component';
import { AddmoodComponent } from './components/mood/addmood/addmood.component';
import { MoodcardComponent } from './components/mood/moodcard/moodcard.component';
import { CalendarComponent } from './components/order/calendar/calendar.component';
import { TodoComponent } from './components/order/todo/todo.component';
import { EmotionComponent } from './components/mood/emotion/emotion.component';
import { DaybuttomComponent } from './components/mood/daybuttom/daybuttom.component';
import { EventComponent } from './components/order/event/event.component';
import { EventlistComponent } from './components/order/eventlist/eventlist.component';
import { RemedyComponent } from './components/custom/remedy/remedy.component';
import { RemedylistComponent } from './components/custom/remedylist/remedylist.component';
import { WishlistComponent } from './components/custom/wishlist/wishlist.component';
import { CrisisbuttomComponent } from './components/home/crisisbuttom/crisisbuttom.component';

//imports
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarAtipComponent } from './components/general/navbar-atip/navbar-atip.component';
import { MoodregisterComponent } from './pages/tipico/mood/id/moodregister/moodregister.component';


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
    TasksAtipComponent,
    PerfilAtipComponent,
    NavbarComponent,
    BannerComponent,
    RadioComponent,
    AddmoodComponent,
    MoodcardComponent,
    CalendarComponent,
    TodoComponent,
    EmotionComponent,
    DaybuttomComponent,
    EventComponent,
    EventlistComponent,
    RemedyComponent,
    RemedylistComponent,
    WishlistComponent,
    CrisisbuttomComponent,
    NavbarAtipComponent,
    MoodregisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
