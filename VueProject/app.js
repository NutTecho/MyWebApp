Vue.component('newbut',{
    data:function()
    {
        return {count : 0}
    },
    template: '<button v-on:click="count++">Click : {{count}}</button>'
    
});

var form1 = new Vue(
    {
    el:"#vue-app",
    data: {
        message:"hello world",
        job:"saleman",
        age:20,
        money:100.50,
        count:10,
        web:"http://www.youtube.com",
        color:[],
        gender:"-",
        food:""
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
var form2 = new Vue(
{
    el:"#con-app",
    data:{
        show:false,
        product:["banana","grave","apple","coconut"],
        price:[100,200,300,400],
        newdata:{district:"",code:0},
        postcode : [
            {district:'Rayong',code:21000},
            {district:'Bankok',code:10900},
            {district:'Chonburi',code:20000}
        ]
    },
    methods:{
        addcode:function()
        {
            this.postcode.push({
                district:this.newdata.district,
                code:this.newdata.code
            });
            this.newdata.district = "";
            this.newdata.code = 0;
        },
        delcode:function()
        {
            this.postcode.pop()
        },
        showmessage:function()
        {
            // console.log("already done")
            alert("save done!!")
        }
    },
    computed:{
        summation:function()
        {
            let sum = this.postcode.reduce((sum,x) => 
                {return sum + Number(x.code);},0
            )
            return sum;
        },
        testmap:function()
        {
            let mapping = this.price.map((x) =>
            {
                if(x >250)
                {
                    return "OK";
                }
                return "NG";
            })
            return mapping;

        }


    }
    ,watch:
    {
        summation:function()
        {
            this.showmessage();
        }
    }
}
)


