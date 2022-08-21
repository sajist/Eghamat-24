<template>
  <main class="app">
		
		

		<section class="todo">
			<h3>CREATE A TODO</h3>

			<form id="new-todo-form" @submit.prevent="todo">
				<h4>What's on your todo list?</h4>
				<input 
					type="text" 
					name="content" 
					id="content" 
					placeholder="Add Todo"
					v-model="input_content" />
				
				<button onclick="submit()"> ثبت</button>

			<div></div>	
			</form>

		</section>
    
  </main>
  
</template>


<script setup>

  

 localStorage.setItem("content","input_content");







</script>

<style>

</style>