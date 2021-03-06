import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MedaltallyComponent } from '../medaltally/medaltally.component';
import { CommonUtils } from '../../../shared/utils/common.utils';
import { Router } from '@angular/router';
import { IMedal } from '../../../shared/model/medal';
import { VotingComponent } from '../voting/voting.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options = {
    duration: 3
  };
  dialogRef: MatDialogRef<MedaltallyComponent>;
  medals: IMedal[];
  dialogRefVoting: MatDialogRef<VotingComponent>;

  constructor(private dialog: MatDialog, private route: Router) {

  }

// facebook, medal method unit test
  ngOnInit() {
    const options = {
      strings: ['Inter Departmental Sports Event\'19'],
      typeSpeed: 20,
      smartBackspace: true
    };
    // new Typed('#typed-strings', options);
  }

  scrollToSection(id: string) {
    if (!id) {
      return;
    }
    document.getElementById(id).scrollIntoView();


  }

  medalTally() {

    let dialogConfig = {
      width: '40%',
      height: '90%'
    };
    if (CommonUtils.isOnMobile()) {
      dialogConfig.width = '95%';
    }
    this.dialogRef = this.dialog.open(MedaltallyComponent, dialogConfig);

  }

  voting() {

    let dialogConfig = {
      width: '40%',
      height: '70%'
    };
    if (CommonUtils.isOnMobile()) {
      dialogConfig.width = '95%';
    }
    this.dialogRefVoting = this.dialog.open(VotingComponent, dialogConfig);

  }

  facebook() {
    this.route.navigate(['facebook']);
  }


}

