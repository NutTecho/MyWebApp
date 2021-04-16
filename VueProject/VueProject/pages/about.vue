<template>
    <div class="con-center">
        <h1 v-if="ok">About {{UpperName}}</h1>
        <h2 v-show="ok">test {{UpperName}} </h2>
        <!-- one way binding -->
        <input type="text" v-bind:value="name" />
        <!-- two way binding -->
        <input type="text" v-model="name"/>
        <button @click="doSave">SAVE</button>
        <ul>
            <li v-for="st in student" :key="st.name" 
        :class="{fail:st.score < 70,good : st.score >=80}">
                <span>{{st.name}}</span> |
                <span>{{st.age}}</span> |
                <span>{{st.score}}</span>
            </li>
        </ul>
        <ul>
            <li v-for="(uname,index) in namelist" :key="index">
                {{uname}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return{
            name:"Test",
            ok:true,
            namelist : ["banana"],
            student:[{name : "james" ,age : 10, score : 50},
                    {name : "jack" ,age : 10 ,score : 60},
                    {name : "jojo" ,age : 10 , score : 70},
                    {name : "jim" ,age : 10 , score : 80}]
            }
    },
    computed:{
        UpperName(){
            return this.name.toUpperCase()
        }
    },
    watch :{
        namelist(){
            if(this.namelist.length > 4)
            {
                alert("Length : " + this.namelist.length);
            }
        }

    },
    methods:{
        doSave(){
            this.ok = !this.ok;
            this.namelist.push(this.name);
            console.log('SAVE');
        }
    }
}
</script>

<style>
    .con-center{
        text-align: center;
        margin-top: 1rem;
    }
    .fail{
        color : red;
    }
    .good{
        color:green;
        font-weight:bold;
    }
</style>