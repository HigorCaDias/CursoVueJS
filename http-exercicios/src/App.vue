<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-input
			
		</b-card>
	</div>
</template>

<script>
export default {
	data(){
		return{
			usuario:{
				nome: '',
				email:'',

			}
		}
	},
	
	created() {
		this.$http.post('usuarios.json',{
			nome:'maria',
			email:'maria@maria'
		}).then(res => console.log(res))
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
