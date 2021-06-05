const app = {
	data(){
		return{
			sumCredut : 20_000,
			sumPercent: 20,
			sumTerm :24

		}
	},
	computed:{
			overpayment(){
				return((this.sumCredut*((this.sumPercent/12/100)*(1+this.sumPercent/12/100)**this.sumTerm)/((1+this.sumPercent/12/100)**this.sumTerm)-1).toFixed(2))
			},
			bodyPart(){
				return((this.sumCredut/this.sumTerm).toFixed(2));
			},
			payment(){
				return(((this.sumCredut/this.sumTerm)+(this.sumCredut*((this.sumPercent/12/100)*(1+this.sumPercent/12/100)**this.sumTerm)/((1+this.sumPercent/12/100)**this.sumTerm)-1)).toFixed(2))
			}
		}
}
Vue.createApp(app).mount('#app');
