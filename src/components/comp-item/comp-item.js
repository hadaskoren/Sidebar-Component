'use strict';

import moment from 'moment'

export default {
    props: ['items'],
    methods: {
        /**
         * Check the length of item name and add 3 dots if too long
         *
         */
        checkName(item) {
            var name = item.name;
            if(name.length > 28) {
                return name.substr(0,28)+'...';
            } else {
                return name;
            }
        },
        /**
         * Returs new date object with the relevant format
         *
         */
        returnDate(date) {
            let newDate = moment(date).format('MMM DD');
            return newDate;
        },
        /**
         * Returs new time object with the relevant format
         *
         */
        returnTime(time) {
            let newTime = moment(time).format('LT');
            return newTime;
        }
    }
}