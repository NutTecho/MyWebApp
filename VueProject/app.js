new Vue({
    el:"#vue-app",
    data: {
        message:"hello world",
        job:"saleman",
        age:20,
        money:100.50,
        count:10,
        web:"http://www.youtube.com"
    },
    methods:{
        getName:function(){
        return this.name
        },
        setName:function(n){
            return this.name = n

        },
        adddata:function()
        {
            this.age++;
            console.log(this.age);
        },  
        subdata:function()
        {
            this.age--;
            console.log(this.age);
        },
        counting:function()
        {
            this.count++;
            console.log(this.count);
        }
    }

})