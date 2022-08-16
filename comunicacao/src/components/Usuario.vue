<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Idade é  <strong> {{ idade }} </strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- utilizar somente : é a mesma coisa que chamar o v-bind: -->
            <!-- Habilitando função dentro de cada View  -->
            <app-usuario-info :nome="nome" 
            :reiniciarFN="reiniciarNome"
            :idade="idade"
            />
            <app-usuario-editar  
            :idade="idade"
             @idadeMudou="idade = $event" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'pedro',
            idade: 21
        }   
    },
    methods: {
        alterarNome(){
            this.nome = 'ana'
        },
        reiniciarNome(){
            this.nome = 'pedro'
        }
    },
}

</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
