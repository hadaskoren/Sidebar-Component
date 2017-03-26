'use strict';

const BASEURL = 'http://localhost:3003/';
import CompItem from '../comp-item/index.vue';

export default {
    
    data() {
        return {
            itemList: [],
            filteredList:[],
            isShown: true,
            inputValue: '',
            gIsAscend: true,
        }
    },
    created() {
        this.refreshItems();
    },
    methods: {
        /**
         * Refreshes the list with the initials JSON items
         *
         */
        refreshItems() {
            this.inputValue = '';
            this.filteredList = [];
            fetch(BASEURL).then(res => res.json())
                .then(items => {
                    this.itemList = items;
                })
           
            //-------------------Another option to get json without adding server.js
            // this.updateItemList();
            // fetch('http://localhost:3003/sidebar.json').then(res => res.json())
            //     .then(items => {
            //         console.log(items);
            //     })
        },
        /**
         * Updates the filteredList according to the searched values
         *
         */
        searchItems(e) {
            if (e.keyCode === 8) {
                this.inputValue = e.target.value;
            }
             this.filteredList = this.itemList.filter((item) => {
                return item.name.includes(this.inputValue);
            });
        },
        /**
         * Checks if we are filtering the list or using the original one
         *
         */
        listViewed() {
            if (this.filteredList.length === 0) {
                return this.itemList;
            } else {
                return this.filteredList;
            }
        },
        /**
         * Sorts items according to the updated field in JSON
         *
         */
        sortItemsByDate() {
            this.gIsAscend = !this.gIsAscend;
            var list = this.listViewed();
            if(this.gIsAscend){
                list.sort(function(a, b) {
                    return (a.updated > b.updated) - (a.updated < b.updated);
                });
            } else {
                list.sort(function(a, b) {
                    return (a.updated < b.updated) - (a.updated > b.updated);
                });
            }
        }
    },
    components: {
        CompItem
    }
}