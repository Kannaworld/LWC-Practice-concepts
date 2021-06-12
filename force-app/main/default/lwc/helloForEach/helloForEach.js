import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts=[
        {Id:1,
        Name:'Amy Tylor',
        Title:'VP of Engineering'
        },
        {
            Id:2,
            Name:'Michael Jones',
            Title:'VP of Sales'
        },
        {
            Id:3,
            Name:'Jennifer Wu',
            Title:'CEO'
        }
    ];
}