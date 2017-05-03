/**
 * Created by Kayvon Rahimi on 3-5-2017.
 */
// Sample recipes database
// Source: https://en.wikibooks.org/wiki/Cookbook
var recipes = [
    {
        name: 'Lasagne',
        category: 'Pasta',
        procedure: 'Steps for making lasagne'
    },
    {
        name: 'Calzone',
        category: 'Pizza',
        procedure: 'Steps to make calzone (pizza)'
    },
    {
        name: 'Tuna Salad',
        category: 'Salad',
        procedure: [
            'Mix ingredients in a bowl',
            'Chill before serving'
        ]
    },
    {
        name: 'Riceroni',
        category: 'Steven\'s microwave ricedish',
        procedure: [
            'Put package contents in a bowl',
            'Microwave before serving',
            'Experience depression'
        ]
    }
];
module.exports = recipes;
