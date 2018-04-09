import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { resolvePtr } from 'dns';
import { AthletePage } from '../athlete/athlete';
import { AthletesProvider } from '../../providers/athletes/athletes';

@IonicPage()
@Component({
  selector: 'page-athletes',
  templateUrl: 'athletes.html',
})
export class AthletesPage {

  athletes: any[];

  constructor(private athletesProvider: AthletesProvider, private navCtrl: NavController) {
    this.athletesProvider
        .all()
        .subscribe(athletes => {
                this.athletes = athletes.data;
             });
  }

    launchAthletePage(id) {
      this.navCtrl.push(AthletePage, { athlete_id: id });
  }

}
