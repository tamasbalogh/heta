<template>
    <v-row align="center" justify="center">
        <v-col>
            <v-card color="teal lighten-3">
                <v-row align="center" justify="space-around" class="ma-0 pa-0">
                    <v-col class="ma-0 pa-0" align="center"><v-btn text :disabled="pages[pagePointer].backDisabled" @click="pagePointer--">Vissza</v-btn></v-col>
                    <v-col class="ma-4 pa-0" align="center"><span>{{ page }}</span></v-col>
                    <v-col class="ma-0 pa-0" align="center"><v-btn text :disabled="pages[pagePointer].nextDisabled" @click="pagePointer++">Tovább</v-btn></v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "OrderFooter",
        props: ['backButton', 'nextButton', 'page'],
        data: () => ({
            pagePointer: 0,
        }),
    }
</script>

<style scoped>

</style>
