import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'home',
  template: `<p>e2e website!</p>`
})
export class Home {}

@Component({
  selector: 'e2e-app',
  templateUrl: 'e2e-app.html',
  encapsulation: ViewEncapsulation.None,
})
export class E2EApp {
  showLinks: boolean = false;
}
