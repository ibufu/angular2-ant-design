/**
 * Created by lcx on 2016/8/4.
 */
import {
    Component,
    Input
} from '@angular/core';

import * as classNames from 'classnames';

@Component({
    moduleId: module.id,
    selector: 'ad-icon',
    template: '<i [class]="classes"></i>',
    styleUrls: ['icon.css']
})
export class AdIcon {

    @Input() type: string;
    @Input() className: string;

    prefixCls: string = 'anticon';

    get classes() {
        return  classNames({
            [`${this.prefixCls}-${this.type}`]: this.type,
            [this.className]: this.className,
            [this.prefixCls]: true
        } as ClassArray)
    }

}