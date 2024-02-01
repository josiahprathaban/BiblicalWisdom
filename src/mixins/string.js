import Vue from 'vue'

Vue.mixin({
	methods: {
		$_ucfirst(string) {
			return string.charAt(0).toUpperCase() + string.slice(1)
		},
		$_lcfirst(string) {
			return string.charAt(0).toLowerCase() + string.slice(1)
		},
	}
})