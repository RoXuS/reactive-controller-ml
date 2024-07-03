import type { ReactiveController, ReactiveControllerHost } from 'lit';

export default class MediaQueryController implements ReactiveController {
  public constructor(
    private host: ReactiveControllerHost,
  ) {
    this.host.addController(this);
  }

  public hostConnected() {
    console.log(this, this.host, 'connected');
  }

  public hostDisconnected() {
    console.log(this, this.host, 'disconnected');
    this.host.removeController(this)
  }
}
