<template>
    <div class="new-task">
        <!-- Utilizando o keydown escolhemos o que determinada tecla do teclado ira fazer
        no caso abaixo keydown.enter reserva a tecla enter para quando for acionada disparar a funcção
        add -->
        <input v-model="name" @keydown.enter="add" type="text"
            class="form-element" placeholder="Nova tarefa?">
        <!-- Click do botao tambem dispara a função adicionar -->
       <button class="form-element" @click="add">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            // Emite o evento e limpa o campo para que novos eventos possam ser realizados 
            // (atraves do this.$emit)
            this.$emit('taskAdded', { name: this.name })
            // Limpando Input
            this.name = ''
        }
    }
}
</script>

<style>
    .new-task {
        margin: 35px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color: #FFF;
    }

    input.form-element {
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>
