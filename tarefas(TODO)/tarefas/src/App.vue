<template>
	<div id="app">
		<h1>Tarefas</h1>
		<NewTask/>
		<!-- Precisamos colocar : para que o vue interprete o "tasks" -->
		<TaskGrid :tasks="tasks"/>
	</div>
</template>

<script>
import NewTask from './componentes/NewTask.vue'
import TaskGrid from './componentes/TaskGrid.vue';
import NewTask from './componentes/NewTask.vue';
	
	components:{ NewTask,TaskGrid }
export default {
    data() {
        return {
            tasks: [
                { name: "lavar a louça", pending: false },
                { name: "Comprar blusa ", pending: true }
            ]
        };
    },
    components: { TaskGrid, NewTask }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
