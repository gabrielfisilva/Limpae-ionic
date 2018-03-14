import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController,
    //geolocation
    private geo: Geolocation,
    private plataform: Platform) { }

  geolocation() {
    this.plataform.ready().then(() => {

      this.geo.getCurrentPosition().then(res => {
      alert("latitude: " + res.coords.latitude);
      alert("longitude: " + res.coords.longitude);
      }).catch(() => {
      alert("erro ao pegar geolocalizacao ");
      })
      })
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}