<template>
    <span>
        <v-app-bar height="64" class="grey darken-2 white--text">
            <v-row>
                <v-col>
                    <v-toolbar-title class="d-flex justify-space-around"> {{ this.$route.params.type }} kollázs összeállítás</v-toolbar-title>
                </v-col>
            </v-row>
        </v-app-bar>
        <v-container fluid fill-height class="bg-img">
        </v-container>
        <v-footer class="grey darken-2" absolute padless>
            <v-row>
                <v-col>
                    <div class="text-center">
                        <v-btn color="white" class="pa-2" outlined >Rendelés</v-btn>
                   </div>
                </v-col>
            </v-row>
        </v-footer>
    </span>
</template>

<script>
    export default {
        name: "Order",
        data () {
            return {
            }
        },
        methods: {
        }
    }

</script>


<style scoped>

    .bg-img {
        background: url('../assets/living-room.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
    }

</style>
