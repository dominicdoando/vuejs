new Vue({
	el:"#vue-app",
	data:{
		name:'Doan',
		job:'Ninja',
		website:'http://www:thenetninja.net',
		websiteTag:'<a href="http://www:google.com">GOOGLE</a>'
	},
	methods:{
		greet:function(time){
			return 'Good'  + time + ' ' + this.name;
}
	}
});