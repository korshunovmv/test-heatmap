import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'secToMinSec'
})
export class SecToMinSecPipe implements PipeTransform {
    transform(seconds, minText: string = 'мин.', secText: string = 'сек.'): string {
        if (!seconds && !Number.isFinite(seconds)) {
            return null;
        }

        if (typeof seconds === 'string') {
            seconds = Number(seconds);
        }

        const zeroDate: Date = new Date();
        zeroDate.setHours(0, 0, seconds, 0);

        const minutes: number = zeroDate.getMinutes();
        const secondsForMin: number = zeroDate.getSeconds();
        const secondsMessage: string = `${secondsForMin || 0} ${secText}`;

        if (!minText) {
            const minutesWithZero: string = this.getNumberWithZero(minutes);
            const secondsWithZero: string = this.getNumberWithZero(secondsForMin);

            return `${minutesWithZero}:${secondsWithZero}`;
        }

        return minutes ? `${minutes} ${minText} ${secondsMessage}` : secondsMessage;
    }

    private getNumberWithZero(val: number): string {
        val = val || 0;
        return val < 10 ? `0${val}` : val.toString();
    }
}
