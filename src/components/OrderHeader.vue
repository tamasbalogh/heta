<template>
    <v-row align="center" justify="center">
        <v-col>
            <v-card align="center" color="teal lighten-3">
                <p class="pa-4">{{ title }}</p>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "OrderHeader",
        props: ['title'],
    }
</script>

<style scoped>

</style>
