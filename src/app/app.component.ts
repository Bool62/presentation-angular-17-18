import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SsrComponent } from "./ssr/ssr.component";

@Component({
  standalone: true,
  imports: [RouterModule, SsrComponent],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "presentation-angular-17-18";
  ssr = false;

  constructor() {
    console.log(this.title);
  }

  onSSR() {
    this.ssr = !this.ssr;
  }
}
