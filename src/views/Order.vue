<template>
<!--        <v-app-bar height="64" class="grey darken-2 white&#45;&#45;text">-->
<!--            <v-row>-->
<!--                <v-col>-->
<!--                    <v-toolbar-title class="d-flex justify-space-around"> {{ this.$route.params.type }} kollázs összeállítás</v-toolbar-title>-->
<!--                </v-col>-->
<!--            </v-row>-->
<!--        </v-app-bar>-->
        <v-container fluid fill-height class="bg-img">
            <v-row justify="center">
                <v-flex class="xs6 md3 lg2">
                    <v-card class="pa-4">
                        <v-row>
                            <v-col>
                                <div>
                                    <v-hover v-slot:default="{ hover }">
                                        <v-card :elevation="hover ? 10 : 2" align="center" class="pa-4" v-on:click="imageUpload()">
                                            <p>Képek feltöltése</p>
                                            <v-icon large>mdi-upload</v-icon>
                                            <input multiple ref="uploader" class="d-none" type="file" accept="image/*" @change="onFileChanged()">
                                        </v-card>
                                    </v-hover>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-hover v-slot:default="{ hover }">
                                    <v-card :elevation="hover ? 10 : 2" align="center" class="pa-4" v-on:click="imageOnline()">
                                        <p>Online képek</p>
                                        <v-row>
                                            <v-col><v-icon large>mdi-facebook</v-icon></v-col>
                                            <v-col><v-icon large>mdi-instagram</v-icon></v-col>
                                        </v-row>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-flex>
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
                selectedFiles: []
            }
        },
        methods: {
            imageUpload(){
                this.$refs.uploader.click()
            },
            imageOnline(){

            },
            onFileChanged(){
                this.selectedFiles = this.$refs.uploader.files
                console.log(this.selectedFiles.length)
            }
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

@keyframes blinkingBackground{
    50%		{ border-color: orange;}
}

</style>
