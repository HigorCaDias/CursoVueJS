<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>idade fdo usuario: <strong>{{ idade }} </strong></p>
        <button @click="alterarIdade"> Alterar idade</button>
    </div>
</template>

<script>
export default {
    props: {
        idade: Number,
    },
        methods: {
            alterarIdade(){
                this.idade = 33
                // chamando um methodo dentro de um evento
                this.$emit('idadeMudou', this.idade)
            }
            
        },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
