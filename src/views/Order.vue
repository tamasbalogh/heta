<template>
<!--        <v-app-bar height="64" class="grey darken-2 white&#45;&#45;text">-->
<!--            <v-row>-->
<!--                <v-col>-->
<!--                    <v-toolbar-title class="d-flex justify-space-around"> {{ this.$route.params.type }} kollázs összeállítás</v-toolbar-title>-->
<!--                </v-col>-->
<!--            </v-row>-->
<!--        </v-app-bar>-->
        <v-container fluid fill-height class="bg-img">
            <v-row>
                <div class="upload-button">
                    <div class="upload-button-content">
                        <div class="upload-button-top">1</div>
                        <div class="upload-button-bottom">2</div>
                    </div>
                </div>
                <v-col style="height: 200px; width: 200px">col1.1</v-col>
            </v-row>
            <v-row>
                <v-col>col2.1</v-col>
                <v-col>col2.2</v-col>
            </v-row>

            <v-row align="center" justify="center">
                <v-col><v-btn>Képek feltöltése<v-icon right>mdi-upload</v-icon></v-btn></v-col>
                <v-col><v-btn>Képek Facebookról<v-icon right>mdi-facebook</v-icon></v-btn></v-col>
                <v-col><v-btn>Képek Instagramról<v-icon right>mdi-instagram</v-icon></v-btn></v-col>
            </v-row>
        </v-container>
<!--        <v-footer class="grey darken-2" absolute padless>-->
<!--            <v-row>-->
<!--                <v-col>-->
<!--                    <div class="text-center">-->
<!--                        <v-btn color="white" class="pa-2" outlined >Rendelés</v-btn>-->
<!--                   </div>-->
<!--                </v-col>-->
<!--            </v-row>-->
<!--        </v-footer>-->
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

.upload-button {
    margin: 10px;
    width: 250px;
    height: 250px;
    line-height: 190px;
    border-style: solid;
    border-radius: 15px;
    animation: blinkingBackground 3s infinite;
}

.upload-button-content {
    position: absolute;
    width: 100%;
    height: 50%;
}

@keyframes blinkingBackground{
    50%		{ border-color: orange;}
}

</style>
