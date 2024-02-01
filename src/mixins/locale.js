import Vue from 'vue'

Vue.mixin({
	methods: {
		$_getLocale() {
			var locale = window.location.pathname.replace(/^\/([^/]+).*/i,'$1')
			if(locale == '/') locale = 'en'
			return locale
		},
	}
})