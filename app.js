new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        attack: function () {
        },
        specialAttack: function () {

        },
        monsterAttack: function () {

        },
        heal: function () {

        },
        startNewGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRunning = true;
            this.turns = [];
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        calculateDamage: function (min, max) {
            var damage = Math.max(Math.floor(Math.random() * max + 1), min);
            return damage;
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                this.gameIsRunning = false;
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                this.gameIsRunning = false;
                return true;
            }
            return false;
        }
    }
});
