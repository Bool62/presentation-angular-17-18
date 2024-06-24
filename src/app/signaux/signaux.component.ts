import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';

interface ITache {
  id: number;
  description: string;
  isCompletee: boolean;
}

@Component({
  selector: 'app-signaux',
  standalone: true,
  imports: [],
  templateUrl: './signaux.component.html',
  styleUrl: './signaux.component.scss'
})
export class SignauxComponent {

  /**
   * Exemple 1
   */
  tacheCompletee  = signal(false)
  signalNonModifiable = signal(false).asReadonly();


  /**
   * Exemple 2 
   */
  taches: WritableSignal<ITache[]>  = signal([
    { id: 1, description: 'Faire les courses', isCompletee: true },
    { id: 2, description: 'Nettoyer la maison', isCompletee: false },
    { id: 3, description: 'Répondre aux e-mails', isCompletee: false },
  ]);

  nbTachesCompletees = computed(() => {
    return this.taches().filter((tache:ITache) => tache.isCompletee).length;
  });

  /**
   * Exemple 3 
  */
  logs:string[] = [];
 

   /**
   * Exemple 3
   */
   constructor() {
    effect(() => {
      console.log('Nombre de tâches terminées :', this.nbTachesCompletees());
      this.logs = [...this.logs, "Nombre de tâches terminées :"+this.nbTachesCompletees()]
    });
  }

  /**
   * Exemple 1 
   */
  setCompletee() {
    this.tacheCompletee.set(true);
  }

  /**
   * Exemple 2
   */
  setCompleteeParTache(tache: ITache) {
    tache.isCompletee = true;
    this.taches.set([...this.taches()]);
  }


}
