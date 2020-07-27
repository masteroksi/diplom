export class BodyListener {
    constructor() {
        this.eventTypes = {};
    }

    addNewListener(eventType) {
        document.body.addEventListener(eventType, (ev) => {
                const { target } = ev;
                if (!target) {
                    return;
                }
                this.eventTypes[eventType]
                    .forEach(callback => callback(ev));
            },
        );
    }

    on(eventType, callback) {
        if (Array.isArray(this.eventTypes[eventType])) {
            this.eventTypes[eventType].push(callback);
        } else {
            this.eventTypes[eventType] = [callback];
            this.addNewListener(eventType);
        }
    }

    off(eventType, callback) {
        if (Array.isArray(this.eventTypes[eventType])) {
            this.eventTypes[eventType] = this.eventTypes[eventType]
                .filter(cb => cb !== callback);
        }
    }
}
