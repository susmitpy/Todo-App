<template>

        <div class="todo">
            <h3 class="title"> {{ todo.title }} </h3>
            <b :style = "{color:priorityColorMapping[todo.priority]}" class="priority"> . </b>

        </div>
</template>

<script>

export default {
    name : "Todo",
    props : ["todo"],
    data (){
        return {
            priorityColorMapping : {
                "High" : "red",
                "Medium" : "orange",
                "Low" : "blue"
            },
            showModal: false
        }
    },
}
</script>

<style scoped>
.todo {
        border: 1px solid #ccc;
        background: #ffffff;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }

       .priority {
        font-size:45px;
        position: absolute;
        bottom:0px;
        right:5px;
    }
</style>