<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<!--Se o formulario for diferente de enviado exibir informações abaixo -->
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<!-- Linkando usuario.email do components com a view atraves do 
					V-model;
					O .lazy serve para os dados serem atualizados somente quando sairmos do campo 
					input, e não ficar sendo atualizado simultanemanete com a escrita -->
					<input type="text" v-model.lazy.trim="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model.number="usuario.idade">
				</Rotulo>
				<Rotulo nome="Mensagem">
					// Utilizando o textarea e salvando quebra de linhas
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<!-- Criando um V-model para cada checkbox que queremos utilizar -->
					<span class="mr-4"><input type="checkbox" v-model="caracteristicas"
						value="reproduzivel"> Reproduzível</span>
					<span><input type="checkbox" v-model="caracteristicas"
						value="intermitente"> Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<!-- Para o radio diferente do checkBox precisamos passar um 
					value diferente para cada campo e utilizar o v-model, assim o Vue interpreta
					que as tres opções são opções de um mesmo grupo a qual somente uma pode ser escolhida-->
					<span class="mr-4"><input type="radio" value="web" v-model="produto"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="produto"> Mobile</span>
					<span><input type="radio" value="outro" v-model="produto"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="prioridade">
					<!-- Função para prioridade do select -->
						<option v-for="prioridade in prioridades"
							:value="prioridade.codigo"
							:key="prioridade.codigo"
							:selected="prioridade.codigo === 3">
							{{ prioridade.codigo }} - {{ prioridade.nome }}</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="escolha" />
				</Rotulo>
				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>
			<!-- Caso o formulario tenha sido enviado exibir informações abaixo -->
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ usuario.idade }} {{ tipoIdade }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span style="white-space: pre;">{{ mensagem }}</span>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span>
						<ul>
							<!-- Função para exibir cehckbox do outro lado da tela -->
							<li v-for="c in caracteristicas" :key="c">{{ c }}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ produto }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ prioridade }} {{ tipoPrioridade }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ escolha }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	// Tipos de prioridade dentro do Select 
	computed: {
		tipoIdade() {
			return typeof this.usuario.idade
		},
		tipoPrioridade() {
			return typeof this.prioridade
		},
	},
	// Função de envio do formulario ao clickar no botão enviar 
	methods: {
		enviar() {
			this.enviado = true
		}
	},
	data() {
		return {
			// Utilizando o textarea e salvando quebra de linhas
			mensagem: '',
			// Criando array para utilizar checkbox
			caracteristicas: [],
			produto: 'web',
			prioridade: 1,
			// Criando lista de objetos para Campo Select
			prioridades: [
				{ codigo: 1, nome: 'Baixa' },
				{ codigo: 2, nome:  'Moderada' },
				{ codigo: 3, nome: 'Alta' }
			],
			usuario: {
				email: '',
				senha: '',
				idade: 25
			},
			escolha: true,
			enviado: false
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

.painel button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
