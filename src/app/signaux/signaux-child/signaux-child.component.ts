import { Component, OnInit, effect, input, model, output } from "@angular/core";
import {
  outputFromObservable,
  toObservable,
  toSignal,
} from "@angular/core/rxjs-interop";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-signaux-child",
  standalone: true,
  imports: [],
  templateUrl: "./signaux-child.component.html",
  styleUrl: "./signaux-child.component.scss",
})
export class SignauxChildComponent implements OnInit {
  input = input("test");
  inputRequis = input.required<boolean>();
  inputModel = model("test");

  output = output<string>();

  /**
   * Creation d'un observable base sur les actions clavier. A chaque nouvelle valeur. Un evenement est alors emis.
   */
  outputObs$ = fromEvent<KeyboardEvent>(document, "keyup");
  outputObs = outputFromObservable(this.outputObs$);

  ngOnInit(): void {
    /**
     * Input ne peuvent être modifiées mais les models oui
     */
    // this.inputModel.set('mise à jour');
    this.inputModel.update((valeur) => {
      return valeur + " !";
    });
    console.log(this);
  }

  event() {
    this.inputModel.set("event");
    this.output.emit("event");
  }

  interopRxJS() {
    //Création d'un observable à partir d'un signal
    const obs = toObservable(this.input);
    obs.subscribe((item) => {
      console.log("Obs depuis Signal : " + item);
    });

    //Création d'un signal à partir d'un observable
    const signal = toSignal(this.outputObs$);
    effect(() => {
      console.log(signal());
    });
  }
}
