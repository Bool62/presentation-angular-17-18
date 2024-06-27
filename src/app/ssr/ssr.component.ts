import { Component, WritableSignal, signal } from "@angular/core";

@Component({
  selector: "app-ssr",
  standalone: true,
  imports: [],
  templateUrl: "./ssr.component.html",
  styleUrl: "./ssr.component.scss",
})
export class SsrComponent {
  obs: WritableSignal<number[]> = signal([]);

  constructor() {
    console.log("Trace SSR");
  }

  /**
   * Non mise à jour des sources.
   * Considerer comme une action côté csr
   */
  onHydratation() {
    this.obs.set([1, 2, 3]);
    console.log(this.obs());
  }
}
