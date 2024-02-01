import Vue from 'vue'

Vue.mixin({
	methods: {
		$_hasRoute(route) {
			var resolved = this.$router.resolve(route)
      return !(resolved.href == '/'+this.$_getLocale()+'/') 
		},
		$_getRouteBrowse(role, key) {
			var route = {name:'Page'+role+key+'Browse'}
			if(!this.$_hasRoute(route)) route = {name:'Page'+role+'DataBrowse',params:{object:this.$_lcfirst(key)}}
			return route
		},
		$_getRouteRead(role, key, id, self=false) {
			var route = {name:'Page'+role+key+'Read',params:{id:id,self:self}}
			if(!this.$_hasRoute(route)) route = {name:'Page'+role+'DataRead',params:{object:this.$_lcfirst(key),id:id,self:self}}
			return route
		},
		$_getRouteAdd(role, key) {
			var route = {name:'Page'+role+key+'Add'}
			if(!this.$_hasRoute(route)) route = {name:'Page'+role+'DataAdd',params:{object:this.$_lcfirst(key)}}
			return route
		},
		$_getRouteEdit(role, key, id, self=false) {
			var route = {name:'Page'+role+key+'Edit',params:{id:id,self:self}}
			if(!this.$_hasRoute(route)) route = {name:'Page'+role+'DataEdit',params:{object:this.$_lcfirst(key),id:id,self:self}}
			return route
		},
		$_getRouteDelete(role, key, id, self=false) {
			var route = {name:'Page'+role+key+'Delete',params:{id:id,self:self}}
			if(!this.$_hasRoute(route)) route = {name:'Page'+role+'DataDelete',params:{object:this.$_lcfirst(key),id:id,self:self}}
			return route
		},
		$_getRouteChildRead(role, key, id, self=false, parentKey, parentId, parent=false) {
			var route = {name:'Page'+role+parentKey+key+'Read',params:{id:id,self:self,parentId:parentId,parent:parent}}
			if(!this.$_hasRoute(route)) route = {name:'Page'+role+'DataChildRead',params:{object:this.$_lcfirst(key),id:id,self:self,parentId:parentId,parent:parent}}
			return route
		},
		$_getRouteChildEdit(role, key, id, self=false, parentKey, parentId, parent=false) {
			var route = {name:'Page'+role+parentKey+key+'Edit',params:{id:id,self:self,parentId:parentId,parent:parent}}
			if(!this.$_hasRoute(route)) route = {name:'Page'+role+'DataChildEdit',params:{object:this.$_lcfirst(key),id:id,self:self,parentId:parentId,parent:parent}}
			return route
		},
		$_getRouteChildDelete(role, key, id, self=false, parentKey, parentId, parent=false) {
			var route = {name:'Page'+role+parentKey+key+'Delete',params:{id:id,self:self,parentId:parentId,parent:parent}}
			if(!this.$_hasRoute(route)) route = {name:'Page'+role+'DataChildDelete',params:{object:this.$_lcfirst(key),id:id,self:self,parentId:parentId,parent:parent}}
			return route
		},
	}
})