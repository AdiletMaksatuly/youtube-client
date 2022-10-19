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

    this.changeBorder(new Date(this.appDateHighlight));
  }

  constructor(private el: ElementRef) {}

  changeBorder(videoDate: Date): void {
    const videoDateMs = +videoDate;
    let color: COLORS;

    if (videoDateMs > DATES.SIX_MONTHS) {
      color = COLORS.MORE_THAN_SIX_MONTHS;
    } else if (videoDateMs > DATES.ONE_MONTH) {
      color = COLORS.MORE_THAN_MONTH;
    } else if (videoDateMs > DATES.SEVEN_DAYS) {
      color = COLORS.MORE_THAN_SEVEN_DAYS;
    } else {
      color = COLORS.LESS_THAN_SEVEN_DAYS;
    }

    this.el.nativeElement.style.borderColor = color;
  }
}
