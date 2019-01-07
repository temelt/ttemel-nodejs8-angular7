import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[numberOnly]'
})
export class NumberOnlyDirective {
    // Allow decimal numbers. The \. is only allowed once to occur
    private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);

    // Allow key codes for special events. Reflect :
    private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home','Delete','ArrowLeft','ArrowRight' ];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', [ '$event' ])
    onKeyDown(event: KeyboardEvent) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }

        // Do not use event.keycode this is deprecated.
        let current: string = this.el.nativeElement.value;
        // We need this because the current value on the DOM element
        // is not yet updated with the value from this event
        let next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
}
