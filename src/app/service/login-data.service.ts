import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class LoginDataService {
    constructor(private http: HttpClient) {
    }

    getUserCredentials(login: string) {
        const mocJson = {id: 2, user: 'Mercedes-Benz Melbourne'};
        return of(mocJson);
    }

    getUsers() {
        const mockJson = [
            {id: 1, user: '3 Point Motors Mercedes-Benz'},
            {id: 2, user: 'Mercedes-Benz Melbourne'},
            {id: 3, user: 'Mercedes-Benz Toorak'},
            {id: 4, user: '3 Point Motors Fairfield'},
            {id: 5, user: 'Silver Star Motors'}
        ];
        return of(mockJson);
    }
}

//private getFutureAttendance(user: string, password: string)
// {
//     const json = [
//         {
//             id: 26,
//             type: 3,
//             source: 0,
//             dayPeriodType: 0,
//             groupId: null,
//             yearLevelId: null,
//             reasonType: 17,
//             notes: '',
//             estArrival: ' ',
//             estDeparture: '',
//             communicationType: null,
//             studentIds: [],
//             dates: [
//                 '2016-04-01T00:00:00'
//             ],
//             parentPortalId: 21,
//             userId: null,
//             recurringAbsenceId: null
//         },
//         {
//             id: 26,
//             type: 0,
//             source: 2,
//             dayPeriodType: 0,
//             groupId: null,
//             yearLevelId: null,
//             reasonType: 29,
//             notes: '',
//             estArrival: ' ',
//             estDeparture: '',
//             communicationType: null,
//             studentIds: [
//                 74
//             ],
//             dates: [
//                 '2016-04-01T00:00:00'
//             ],
//             parentPortalId: 21,
//             userId: null,
//             recurringAbsenceId: null
//         },
//         {
//             id: 26,
//             type: 2,
//             source: 0,
//             dayPeriodType: 0,
//             groupId: null,
//             yearLevelId: null,
//             reasonType: 9,
//             notes: '',
//             estArrival: ' ',
//             estDeparture: '',
//             communicationType: null,
//             studentIds: [],
//             dates: [
//                 '2016-04-02T00:00:00'
//             ],
//             parentPortalId: 42,
//             userId: null,
//             recurringAbsenceId: null
//         },
//         {
//             id: 26,
//             type: 0,
//             source: 2,
//             dayPeriodType: 2,
//             groupId: 109,
//             yearLevelId: 4,
//             reasonType: 24,
//             notes: '',
//             estArrival: ' ',
//             estDeparture: '',
//             communicationType: null,
//             studentIds: [
//                 98
//             ],
//             dates: [
//                 '2016-04-02T00:00:00'
//             ],
//             parentPortalId: 42,
//             userId: null,
//             recurringAbsenceId: null
//         },
//         {
//             id: 26,
//             type: 0,
//             source: 1,
//             dayPeriodType: 0,
//             groupId: null,
//             yearLevelId: null,
//             reasonType: 16,
//             notes: '',
//             estArrival: ' ',
//             estDeparture: '',
//             communicationType: null,
//             studentIds: [
//                 125,
//                 94,
//                 95,
//                 96,
//                 97,
//                 98
//             ],
//             dates: [
//                 '2016-04-03T00:00:00'
//             ],
//             parentPortalId: 22,
//             userId: null,
//             recurringAbsenceId: null
//         },
//         {
//             id: 26,
//             type: 0,
//             source: 2,
//             dayPeriodType: 1,
//             groupId: null,
//             yearLevelId: null,
//             reasonType: 30,
//             notes: '',
//             estArrival: '',
//             estDeparture: '',
//             communicationType: null,
//             studentIds: [
//                 110
//             ],
//             dates: [
//                 '2016-04-20T00:00:00'
//             ],
//             parentPortalId: '',
//             userId: 1,
//             recurringAbsenceId: 8
//         }
//     ];
//     return of(json);
// }
