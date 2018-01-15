Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">{{ task.task }}</task>
		</div>
	`,

	data() {
		return {
			tasks: [
				{ task: 'Go to the shops', completed: true },
				{ task: 'Go to work', completed: false },
				{ task: 'Go to IKEA', completed: true },
				{ task: 'Go to the Tower of London', completed: false },
			]
		}
	}
})


Vue.component('task', {

	template: '<li><slot></slot></li>'

});

new Vue({

	el: '#root'

});
