function getAttackDmg(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data() {
        return {
            winner: "",
            myPokemon: {
                name: "Charizard",
                img: "./img/Chari.png",
                myHp: 100,
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
                enemyHp: 100,
                lvl: 50,
                ability: {
                    n1: "Hydro Pump",
                    n2: "Aqua Tail",
                    n3: "Flash Cannon",
                    n4: "Protect"
                }
            },
            startFight: false,
            switchAbili: "",
            attackPhase: false,


        }
    },
    computed: {
        enemyPokemonBarStyle() {
            if (this.enemyPokemon.enemyHp < 0) {
                return { width: '0%' }
            }
            return { width: this.enemyPokemon.enemyHp + '%' }
        },
        myPokemonBarStyle() {
            if (this.myPokemon.myHp < 0) {
                return { width: '0%' }
            }
            return { width: this.myPokemon.myHp + '%' }
        },

        myHp() {
            if (this.myPokemon.myHp <= 0) {
                this.winner = "Blastoise"
            } else if (this.enemyPokemon.enemyHp <= 0 && this.myPokemon.myHp <= 0) {
                this.winner = "draw"
            } else if (this.enemyPokemon.enemyHp <= 0) {
                this.winner = "Charizard"
            }
            return this.winner
        },


    },
    methods: {
        startNewBattle() {
            this.myPokemon.myHp = 100
            this.enemyPokemon.enemyHp = 100
            this.winner = ""

        },
        toggleFight() {
            this.startFight = !this.startFight
        },
        myPokemonAttack(ability) {



            if (this.attackPhase !== true) {
                this.attackPhase = true
                let attack = getAttackDmg(5, 12)
                this.enemyPokemon.enemyHp -= attack;
                if (this.enemyPokemon.enemyHp <= 0) {
                    this.enemyPokemon.enemmyHp = 0;
                }
                this.switchAbili = this.myPokemonAbilityMessage(ability)
                console.log(this.switchAbili);
                if (this.enemyPokemon.enemyHp !== 0 ) {
                    setTimeout(() => {
                        this.enemyPokemonAttack()
                        this.enemyPokemonMessage()
                        this.attackPhase = false;
                    }, 2000)
                }

            } else {
                this.attackPhase == false;
            }





        },
        enemyPokemonAttack() {
            this.attackPhase = true
            let attack = getAttackDmg(5, 12)
            this.myPokemon.myHp -= attack;
            if (this.myPokemon.myHp <= 0) {
                this.myPokemon.myHp = 0;
            }

        },
        myPokemonAbilityMessage(ability) {
            switchAbili = ability
            if (this.myPokemon.ability.n1 === ability) {
                return switchAbili = "Charizard is using " + this.myPokemon.ability.n1
            } else if (this.myPokemon.ability.n2 === ability) {
                return "Charizard attack with " + this.myPokemon.ability.n2
            } else if (this.myPokemon.ability.n3 === ability) {
                return "Charizard is making things hot using " + this.myPokemon.ability.n3
            } else if (this.myPokemon.ability.n4 === ability) {
                return "Charizard hellrage using " + this.myPokemon.ability.n4
            }

        },
        enemyPokemonMessage() {
            let casual = getAttackDmg(1, 4)
            if (casual === 1) {
                this.switchAbili = "Blastoise uses Hydro Pump"
            } else if (casual === 2) {
                this.switchAbili = "Blastoise repose with Aqua Tail"
            } else if (casual === 3) {
                this.switchAbili = "Blastoise repose with Flash Cannon"
            } else {
                this.switchAbili = "Blastoise uses Protect"
            }
        }

    }
})
app.mount('#vue-container')
