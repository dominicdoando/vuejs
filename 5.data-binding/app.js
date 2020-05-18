new Vue({
	el:"#vue-app",
	data:{
		age:27,
		x:0,
		y:0
	},
	methods:{
		nameInput:function(){
			console.log("Nhập vào tên");
		},
		ageInput:function(){
			console.log("Nhập vào tuổi");
		},
	}
});