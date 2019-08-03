export class Todo {
  public id: number;
  public completed: boolean;

  constructor(public text: string) {
    this.text = this.text.charAt(0).toUpperCase() + this.text.slice(1);
    this.completed = false;
    this.id = Math.random();
  }
}
