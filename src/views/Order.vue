<template>
    <v-container>
        <v-flex class="xs6 md3 lg2">
            <v-card class="ma-4 pa-4">
                <v-row>
                    <v-col>
                        <v-hover v-slot:default="{ hover }">
                            <v-card :elevation="hover ? 10 : 2" align="center" class="pa-4" v-on:click="onInputClick()">
                                <p>Képek feltöltése</p>
                                <v-icon large>mdi-upload</v-icon>
                                <input ref="uploader" type="file" accept="image/*" @change="onImagePick()">
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-card>
        </v-flex>

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
            <v-col v-for="image in croppedImages" :key="image" :class="'image' + selectedFrame.type" cols="12" class="xs4">
                <v-img aspect-ratio="1" v-if="croppedImages != null" :src="image"/>
                <v-img class="imageFrame" :src="require('@/assets/frames/' + selectedFrame.id + '.png' )"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { Cropper } from 'vue-advanced-cropper'

    export default {
        data: () => ({

            selectedImages: [],
            selectedImage: null,
            croppedImages: [],
            croppedImage: null,
            isImagePicked: false,
        }),
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

    .img-border {
        border: 35px solid transparent;
        border-image: url(../assets/frames/1.png) 100 stretch;
    }

    .imageFull {
        position: relative;
        padding: 60px;
    }
    .imageMount {
        position: relative;
        padding: 310px;
    }

    .imageFrame {
        position: absolute;
        top: 0px;
        left: 0px;
    }

</style>
