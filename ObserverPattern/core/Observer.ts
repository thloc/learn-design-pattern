import Subject from "./Subject";

export default abstract class Observer {
  protected subject: Subject;
  public abstract Notify(arg: object): void;
}
