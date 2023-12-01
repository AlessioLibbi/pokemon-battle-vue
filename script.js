const app = Vue.createApp({
    data() {
        return {
            myPokemon: {
                name: "Charizard",
                img: "./img/Chari.png",
                hp: 100,
                lvl: 50,
                ability: {
                    n1: "Dragon Claw",
                    n2: "Ember",
                    n3: "Heat",
                    n4: "Dragon Breath"
                }
            },
            enemyPokemon: {
                name: "Blastoise",
                img: "./img/009.png",
                hp: 100,
                lvl: 50,
                ability: {
                    n1: "Hydro Pump",
                    n2: "Aqua Tail",
                    n3: "Flash Cannon",
                    n4: "Protect"
                }
            },
            startFight: false,
            
        }
    },
    methods: {
        toggleFight() {
            this.startFight = !this.startFight
        }
    }
})
app.mount('#vue-container')