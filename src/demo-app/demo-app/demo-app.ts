/**
 * Created by lcx on 2016/8/2.
 */
import {Component, ViewEncapsulation} from '@angular/core';

import {AdButton} from '@angular2-ant-design/button/button';

import {AdButtonGroup} from '@angular2-ant-design/button/button-group';

import {AdIcon} from '@angular2-ant-design/icon/icon'

@Component({
    selector: 'home',
    template: `
        <p>Welcome to the development demos for Angular Ant Design!</p>
        <p>Open the sidenav to select a demo. </p>
    `
})
export class Home {}

@Component({
    moduleId: module.id,
    selector: 'demo-app',
    providers: [],
    templateUrl: 'demo-app.html',
    directives: [AdButton, AdButtonGroup, AdIcon],
    pipes: [],
    encapsulation: ViewEncapsulation.None
})
export class DemoApp {

}