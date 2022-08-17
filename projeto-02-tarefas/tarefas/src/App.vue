<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid :tasks="tasks"
					@taskDeleted="deleteTask" 
					@taskStateChanged="toggleTaskState" />
	</div>
</template>

<script>
import TasksProgress from './components/TasksProgress.vue'
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'

export default {
	components: { TasksProgress, NewTask, TaskGrid },
	data() {
		return {
			tasks: []
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			// Pegando os valores que não estão pendentes 
			const done = this.tasks.filter(t => !t.pending).length
			// Realizando calculo da progress bar
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			// monitora qualquer alteração no codigo, não somente um item excluido
			deep: true,
			handler() {
				// Pegando a lista de tasks(this.tasks) convertendo para string (JSON),
				// setando o local Storage atraves da chave 'tasks'
				// Assim quando atualizarmos a pagina deixamos salvos no Cache
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		// paramentro task vem junto ao evento que ocorreu ao acionar o botão
		addTask(task) {
			const sameName = t => t.name === task.name
			// Usando o filtro para comparar se os nomes sao iguais assim podendo criar um novo campo
			// ou não
			const reallyNew = this.tasks.filter(sameName).length == 0
			if(reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},
		deleteTask(i) {
			this.tasks.splice(i, 1)
		},
		// Mudando o estado (Realizado nao realizado)
		toggleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		const array = JSON.parse(json)
		this.tasks = Array.isArray(array) ? array : []
	}
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
