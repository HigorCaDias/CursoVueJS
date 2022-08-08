new Vue({
    el: '#app',
    data:{
        running: false,
        playerlife: 100,
        monsterlife: 100,
    },
    computed: {
        hasResult(){
            return this.playerlife == 0 || this.monsterlife == 0
        }
    },
    methods:{
        startGame(){
            // começando o jogo
            this.running = true
            this.playerlife = 100
            TouchList.monsterlife = 100
        },
        attack(especial){
            // dentro do Vue para uma Função chamar outra função utilizamos o metodo This
          this.hurt('monsterlife', 5, 10, especial)
          this.hurt('playerlife', 7, 12, false)
        },
        // Função de calculo do ataque 
        hurt(prop, min, max, especial){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this.[prop] = Math.max(this.playerlife - hurt, 0)
        },
        getRandom(min, max){
            // Realizando ataque randomico de cada personagem
            const value = Math.random() * (max - min) + min
            return Math.roud(value)

        }
    },
    watch:{
        hasResult(value){
            // Botao de iniciar novo jogo (ocultando outros botoes)
            if(value) this.running = false
        
        }
            
        
    }

})
