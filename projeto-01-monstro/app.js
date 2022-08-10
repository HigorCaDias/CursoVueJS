new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
          // começando o jogo
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
          // dentro do Vue para uma Função chamar outra função utilizamos o metodo This
        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            if(this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },
         // Função de calculo do ataque 
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')
        },
        getRandom(min, max) {
              // Realizando ataque randomico de cada personagem
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
             // unshift() -> Significa que o log mais recente sempre ficara em primeiro
            // assim ficnado do mais recente para o mais antigo 
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        // Botao de iniciar novo jogo (ocultando outros botoes)
        hasResult(value) {
            if (value) this.running = false
        }
    }
})