import { DemoSharedBase } from '../utils';

export * from './data-randomizer';
export * from './sample-data';

export class DemoSharedMlKit extends DemoSharedBase {
  testIt() {
    console.log('test ml-kit!');
  }
}
