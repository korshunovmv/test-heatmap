import { EventEmitter, Output } from '@angular/core';

export class ModalBase {

    @Output()
    isClosedModal: EventEmitter<boolean> = new EventEmitter();

    /** Close modal window */
    closeModal(): void {
        this.isClosedModal.emit(false);
    }

}
