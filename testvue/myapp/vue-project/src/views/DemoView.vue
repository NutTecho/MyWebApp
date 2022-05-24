<template>
    <div>
        <h1>Test Demo</h1>
        <p>{{message}}</p>
        <button type="button" v-on:click="show=!show">Show_data</button>
        <h1 v-if="show">my web app</h1>
        
        <div>
            <h2>{{countlist}}</h2>
            <ul>
                <li v-for="post in postcode">
                    {{post.district}} : {{post.code}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data()
    {
        return {
            show : false,
            message: 'hello',
            product:["banana","grave","apple","coconut"],
            price:[100,200,300,400],
            newdata:{district:"",code:0},
            postcode : [
                {district:'Rayong',code:21000},
                {district:'Bankok',code:10900},
                {district:'Chonburi',code:20000}
            ]
        }
    },

    methods:{

    },
    computed:{
        getdate(){
            return Date.now();
        },
        countlist()
        {
            let cnt  =  this.postcode.length;
            return cnt;
        }

    },
    watch:{

    }
}
</script>
