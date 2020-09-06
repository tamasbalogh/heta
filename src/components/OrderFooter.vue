<template>
    <v-row align="center" justify="center">
        <v-col>
            <v-card color="teal lighten-3">
                <v-row align="center" justify="space-around" class="ma-0 pa-0">
                    <v-col class="ma-0 pa-0" align="center"><v-btn text :disabled="backButton" @click="decreasePagePointer">Vissza</v-btn></v-col>
                    <v-col class="ma-4 pa-0" align="center"><span>{{ actualPage }} / {{ maxPage }}</span></v-col>
                    <v-col class="ma-0 pa-0" align="center"><v-btn text :disabled="nextButton" @click="increasePagePointer">Tovább</v-btn></v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "OrderFooter",
        props: {
            backButton: {
                type: Boolean,
                default: false
            },
            nextButton: {
                type: Boolean,
                default: false
            },
            actualPage: {
                type: Number,
                required: true
            },
            maxPage: {
                type: Number,
                required: true
            }
        },
        methods: {
            increasePagePointer(){
                let newPage= this.actualPage + 1
                this.$emit('updatePagePointer', newPage)
            },
            decreasePagePointer(){
                let newPage= this.actualPage - 1
                this.$emit('updatePagePointer', newPage)
            }
        },
    }
</script>

<style scoped>

</style>
