import vuex from 'vuex' 
import axios from 'axios'


export default new vuex.store({
    state: {
        list: [ 
            {id: 0, name: "Ecrire le sujet", todo: true}, 
        {id: 1, name: "Faire le sujet", todo: true}, 
        {id: 2, name: "Vendre le sujet", todo: true}, 
        {id: 3, name: "Partir en vacances", todo: true},
        ]
    }, 
    mutations: {}, 
    getters: {}, 
    actions: {}

});