import { Component } from '@angular/core';
import {NgBttvService} from '@nggondolas/ng-bttv';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'bttvTest';

    omegalul = this.emoteService.getOMEGALUL(1);
    pogU = this.emoteService.getPogU(1);
    sadge = this.emoteService.getSadge(1);
    zulul = this.emoteService.getZULUL(1);
    okayge = this.emoteService.getOkayge(1);
    monkaW = this.emoteService.getMonkaW(1);
    lulw = this.emoteService.getLULW(1);
    monkaPickle = this.emoteService.getMonkaPickle(1);
    weirdChamp = this.emoteService.getWeirdChamp(1);
    forsenCD = this.emoteService.getForsenCD(1);
    pogOh = this.emoteService.getPogOh(1);
    yepp = this.emoteService.getYEPP(1);
    ez = this.emoteService.getEZ(1);
    pepeLaugh = this.emoteService.getPepeLaugh(1);
    feelsWeirdMan = this.emoteService.getFeelsWeirdMan(1);
    forsenSmug = this.emoteService.getForsenSmug(1);
    pagMan = this.emoteService.getPagMan(1);
    megalul = this.emoteService.getMEGALUL(1);
    pajaThink = this.emoteService.getPajaThink(1);
    gachiGASM = this.emoteService.getGachiGASM(1);

    forsenPls = this.emoteService.getForsenPls(1);
    FEELSWAYTOOGOOD = this.emoteService.getFEELSWAYTOOGOOD(1);
    HACKERMANS = this.emoteService.getHACKERMANS(1);
    forsenSWA = this.emoteService.getForsenSWA(1);
    WAYTOODANK = this.emoteService.getWAYTOODANK(1);
    monkaE = this.emoteService.getMonkaE(1);
    forsenDiscoSnake = this.emoteService.getForsenDiscoSnake(1);
    gondolaPls = this.emoteService.getGondolaPls(1);
    NODDERS = this.emoteService.getNODDERS(1);
    TeaTime = this.emoteService.getTeaTime(1);
    WEEBSDETECTED = this.emoteService.getWEEBSDETECTED(1);

    constructor(private emoteService: NgBttvService) {
    }
}
