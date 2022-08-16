<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario <strong>{{ inverterNome() }}</strong></p>
        <!-- chamando Funcao com () no click significa que a função está
        vindo de outro arquvo{Callback} referenciando o arquivo Usuario.Vue 
        tambem é necessario referenciala em prorps: "reiniciarFN: Function"-->
        <button @click="reiniciarFN()">Reiniciar nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            default: 'anonimo'
        },
        reiniciarFN: Function,
        idade: Number,



    },
    methods: {
        inverterNome() {
                // Maneira mais utilizada para reverter nome 
            return this.nome
        },
    },
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
