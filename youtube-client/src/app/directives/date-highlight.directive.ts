import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const DATES = {
  SIX_MONTHS: 1000 /*ms*/ * 60 /*s*/ * 60 /*min*/ * 24 /*h*/ * 30 /*days*/ * 6 /*months*/,
  ONE_MONTH: 1000 * 60 * 60 * 24 * 30,
  SEVEN_DAYS: 1000 * 60 * 60 * 24 * 7,
};

enum COLORS {
  MORE_THAN_SIX_MONTHS = 'red',
  MORE_THAN_MONTH = 'yellow',
  MORE_THAN_SEVEN_DAYS = 'green',
  LESS_THAN_SEVEN_DAYS = 'blue',
}

@Directive({
  selector: '[appDateHighlight]',
})
export class DateHighlightDirective implements OnInit {
  @Input() appDateHighlight: string | undefined;

  ngOnInit(): void {
    if (!this.appDateHighlight) return;

    const date = new Date(this.appDateHighlight);
    this.changeBorder(date);
  }

  constructor(private el: ElementRef) {}

  changeBorder(videoDate: Date): void {
    const todayDateMs = +new Date();
    const videoDateMs = +videoDate;
    const diff = todayDateMs - videoDateMs;

    let color: COLORS;

    switch (true) {
      case diff > DATES.SIX_MONTHS:
        color = COLORS.MORE_THAN_SIX_MONTHS;
        break;
      case diff > DATES.ONE_MONTH:
        color = COLORS.MORE_THAN_MONTH;
        break;
      case diff > DATES.SEVEN_DAYS:
        color = COLORS.MORE_THAN_SEVEN_DAYS;
        break;
      default:
        color = COLORS.LESS_THAN_SEVEN_DAYS;
    }

    this.el.nativeElement.style.borderColor = color;
  }
}
