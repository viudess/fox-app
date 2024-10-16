import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit{
  currentYear!: number;
  currentMonth!: number;
  calendarDays: number[] = [];
  daysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  ngOnInit() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  generateCalendar(year: number, month: number) {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    this.calendarDays = [];

    for (let i = firstDay; i > 0; i--) {
      this.calendarDays.push(prevLastDate - i + 1);
    }

    for (let i = 1; i <= lastDate; i++) {
      this.calendarDays.push(i);
    }

    const remainingDays = 42 - this.calendarDays.length;
    for (let i = 1; i <= remainingDays; i++) {
      this.calendarDays.push(i);
    }
  }

  isCurrentDay(day: number): boolean {
    const today = new Date();
    return day === today.getDate() && this.currentMonth === today.getMonth() && this.currentYear === today.getFullYear();
  }

  isDifferentMonth(index: number): boolean {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    return index < firstDay || index >= firstDay + totalDays;
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  generateYearsRange(): number[] {
    const currentYear = new Date().getFullYear();
    return Array.from({length: 20}, (_, i) => currentYear - 10 + i);
  }
}
