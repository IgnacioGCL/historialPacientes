import { IntroPage } from '../intro/intro';
import { Component,ViewChild } from '@angular/core';
import { Nav,NavController, NavParams } from 'ionic-angular';
//import{ FichaPacientePage} from '../ficha-paciente/ficha-paciente';
import {PedircitaPage} from "../pedircita/pedircita";
import {VerFichaPropiaPage} from "../ver-ficha-propia/ver-ficha-propia";
//import Auth = firebase.auth.Auth;
import{ FichaPacientePage} from '../ficha-paciente/ficha-paciente';
import {CitasPendientesPage} from "../citas-pendientes/citas-pendientes";
import {HistorialpacientePage} from "../historialpaciente/historialpaciente";
import {AngularFire} from "angularfire2";

import {ListadoMedicosPage} from "../listado-medicos/listado-medicos";

import {PerfilPage} from "../perfil/perfil";

/*
 Generated class for the PantallaPaciente page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-pantalla-paciente',
  templateUrl: 'pantalla-paciente.html',
})
export class IntroPaciente {
  @ViewChild(Nav) nav: Nav;
  user:any;
  Uid = localStorage.getItem("user_uid");
  menuItems=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase: AngularFire) {
    this.firebase.database.object('/usuarios/'+this.Uid,{preserveSnapshot: true}).subscribe(info => {
      this.user = info.val().nombre;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallaPacientePage');

  }
  irAPedirCita(){
    this.navCtrl.push(PedircitaPage,{
      userUid: this.Uid
    });
  }
  buscarPaciente(){
    console.log("Ir a buscar paciente");
  }
  irACitasPendientes(){
    console.log("Ir a Citas pendientes");
    this.navCtrl.push(CitasPendientesPage);
  }
  irAPerfilMedico(){
    console.log("Ir a Perfil");
  }
  irAPerfil(){
    this.navCtrl.push(PerfilPage);
  }
  irAListadoMedicos(){
    this.navCtrl.push(ListadoMedicosPage);
  }

  verFichaPaciente(){
    this.navCtrl.push(VerFichaPropiaPage);
  }
  logout() {
    this.firebase.auth.logout().then(
      () => {
        localStorage.removeItem("user_uid");
        this.navCtrl.setRoot(IntroPage);
      }
    );
  }

}
