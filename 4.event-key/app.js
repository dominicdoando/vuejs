new Vue({
	el:"#vue-app",
	data:{
		age:20,
		a:"",
		b:"",
	},
	methods:{
		// nameInput:function(){
		// 	console.log("Nhập vào tên");
		// },
		// ageInput:function(){
		// 	console.log("Nhập vào tuổi");
		// },
	},
	computed:{
		addToA:function(){
			return this.a + this.age;
		},
		addToB:function(){
			return this.b + this.age;
		}
	}
});