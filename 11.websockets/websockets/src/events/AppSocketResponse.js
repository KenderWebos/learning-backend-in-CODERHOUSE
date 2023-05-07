export class AppSocketResponse {
  constructor(eventName, data, success) {
    this.eventName = eventName;
    this.data = data;
    this.success = success;
  }
}
