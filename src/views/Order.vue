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
                                <v-hover v-slot:default="{ hover }">
                                    <v-card :elevation="hover ? 10 : 2" align="center" class="pa-4" v-on:click="onInputClick()">
                                        <p>Képek feltöltése</p>
                                        <v-icon large>mdi-upload</v-icon>
                                        <input ref="uploader" class="d-none" type="file" accept="image/*" @change="onImagePick()">
                                    </v-card>
                                </v-hover>
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

            <v-dialog v-model="isImagePicked" persistent max-width="600px">
                <v-card>
                    <Cropper ref="cropper" class="cropper" :src="selectedImage" :stencil-props="{ aspectRatio: 1/1 }"/>
                    <v-card-actions>
                        <v-btn color="green darken-1" text @click="doCrop()">Mentés</v-btn>
                        <v-spacer/>
                        <v-btn color="red darken-1" text @click="isImagePicked = false">Elvetés</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-row justify="center">
                <v-col v-for="image in croppedImages" :key="image" class="col-3">
                    <v-img v-if="croppedImages != null" :src="image"></v-img>
                </v-col>
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

    import { Cropper } from 'vue-advanced-cropper'

    export default {
        name: "Order",
        data () {
            return {
                selectedImages: [],
                selectedImage: null,

                croppedImages: [],
                croppedImage: null,

                isImagePicked: false,
            }
        },
        methods: {
            //trick because button acts as input
            onInputClick(){
                this.$refs.uploader.click()
            },
            //called after the image picked in input
            onImagePick(){
                this.selectedImage = this.$refs.uploader.files
                if (this.$refs.uploader.files && this.$refs.uploader.files[0]) {
                    var reader = new FileReader();
                    reader.readAsDataURL(this.$refs.uploader.files[0]);
                    reader.onload = (e) => {
                        this.selectedImage = e.target.result;
                        this.isImagePicked = true
                    };
                }
            },
            doCrop(){
                const { coordinates, canvas } = this.$refs.cropper.getResult()
                console.log(coordinates)
                this.croppedImages.push(canvas.toDataURL())
                this.isImagePicked = false
            }
        },
        components: {
            Cropper
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

.cropper {
    height: 400px;
    background: #DDD;
}

</style>
