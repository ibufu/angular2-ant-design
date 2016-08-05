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
    selector: 'ad-row',
    template: '<div [class]="classes" [style]="rowStyle"></div>'
})
export class AdRow {
    @Input() gutter: number = 0;
    @Input() type: 'flex';
    @Input() align: 'top' | 'middle' | 'bottom' = 'top';
    @Input() justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' = 'start';
    @Input() className: string;
    prefixCls: string = 'ant-row';

    get classes() {
        return classNames({
            [this.prefixCls]: !this.type,
            [`${this.prefixCls}-${this.type}`]: this.type,
            [`${this.prefixCls}-${this.justify}`]: this.justify,
            [`${this.prefixCls}-${this.align}`]: this.align,
            [this.className]: this.className,
        } as ClassArray)
    }

    get rowStyle() {
        return this.gutter > 0 ? `margin-left: ${this.gutter / -2};margin-right: ${this.gutter / -2}` : '';
    }

    // TODO: change children padding
}