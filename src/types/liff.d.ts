import { ExtendedInit, LiffMockApi } from '@line/liff-mock';

declare module '@line/liff' {
  interface Liff {
    init: ExtendedInit;
    // @line/liff liff.init の型定義には mock モードの指定がないので、
    // 型定義を拡張して mock モードの指定を追加する
    // @see https://github.com/line/liff-mock/blob/main/examples/npm-typescript-example/src/index.ts
    $mock: LiffMockApi;
  }
}
