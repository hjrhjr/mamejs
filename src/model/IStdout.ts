namespace mamejs {
  export interface IStdout {
    scope: Window
    canvas: HTMLCanvasElement
    stdout: Array<string>
    stderr: Array<string>
    print: {(text: string): void}
    printErr: {(error: string): void}
    module: IModule
  }
}