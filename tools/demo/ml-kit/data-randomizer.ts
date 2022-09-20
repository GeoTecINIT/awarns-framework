import { DispatchableEvent, TaskParams, Task, TaskOutcome } from '@awarns/core/tasks';

export class DataRandomizer extends Task {
  constructor(private data: number[][], prefix: string) {
    super(`${prefix}DataRandomizerTask`, {
      outputEventNames: [`${prefix}DataReceived`],
    });
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const inputData = this.data[Math.floor(Math.random() * this.data.length)];
    return {
      eventName: this.outputEventNames[0],
      result: inputData,
    };
  }
}
