<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <!-- Para interpolar dois valores dentro do Vue podemos utilizar o "." -->
            <task v-for="task in tasks" :key="task.name"
                :task="task"></task>
            <!-- Nesse caso referenciamos o task com : para reconhecer como objeto e nao string -->
        </template>
        <p v-else class="no-task">Sua vida está em dia!</p>
    </div>
</template>
<script>
import Task from './Task.vue'

export default {
   components: { Task },
   props:{
        tasks: {type: Array, required: true}
    }
}
</script>
<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;   
    }
    .task-grid .task {
        margin: 10px;
    }
    .no-task{
        color: #AAA;
        font-size: 1.7rem;
    }
    
</style>