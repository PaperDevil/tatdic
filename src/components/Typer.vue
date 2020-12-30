<template>
    <div class="main">
        <img alt="Vue logo" src="../assets/GUlogo.png">
        <input type="text" placeholder="Начните кертергә..." v-model="inputs">
        <div v-if="inputs.length >= 2" class="templates">
            <div class="" v-for="word in complete_words" :key="word">
                <button @click="inputs = word">{{ word }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import data from "../assets/tatcorpus2.lemmas_frequency_n"

export default {
    name: 'Typer',
    data() {
        return {
            inputs: ""
        }
    },
    methods: {
        similarWords(preWord, allWords) {
            console.log(allWords)
            return allWords.filter(function (word) {
                if (word.startsWith(preWord)) {
                    return word
                }
            })
        }
    },
    computed: {
        complete_words() {
            let result = []
            data.forEach((el) => {
                result.push(el[2])
            })
            console.log(result)
            return this.similarWords(this.inputs, result)
        }
    }
}
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
    height: 100vh;
}
input {
    width: 350px;
    height: 40px;
    font-size: 35px;
}
img {
    width: 350px;
}
button {
    width: 350px;
    height: 30px;
    font-size: 20px;
    margin-top: 2px;
}
</style>