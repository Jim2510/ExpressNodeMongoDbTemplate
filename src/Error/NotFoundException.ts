export class NotFoundException extends Error {
    constructor(m: string) {
        super(m);
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }
}
