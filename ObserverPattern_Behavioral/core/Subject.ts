import Observer from "./Observer";

export default class Subject {
  private readonly _observers: Observer[] = [];

  AttachObserver(observer: Observer): void {
    const isExist = this._observers.indexOf(observer);
    if (isExist !== -1) {
      return console.log('Subject: Observer has been attached already.');
    }

    console.log('Subject: Attached an observer.');
    this._observers.push(observer);
  }

  DetachObserver(observer: Observer): void {
    const observerIndex = this._observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this._observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  NotifyObservers(arg: object): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this._observers) {
      observer.Notify(this);
    }
  }
}
