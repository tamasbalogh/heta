<template>
    <v-row align="center" :justify="this.croppedImages.length === 0 ? 'center' : 'start'">
        <ImageSelector v-on:updateSelectedImage="updateSelectedImage($event)"/>
        <v-col cols="4" lg="3" v-for="image in croppedImages" :key="image">
            <v-img v-if="croppedImages != null" :src="image"/>
        </v-col>
        <v-dialog persistent :max-width="this.$vuetify.breakpoint.width/1.5" :max-height="this.$vuetify.breakpoint.height/1.5">
            <v-card>
                <Cropper ref="cropper" :src="newlySelectedImages[0]" :stencil-props="{ aspectRatio: 1/1 }"/>
                <v-card-actions class="elevation-12">
                    <v-btn color="red darken-1" text @click="isImagePicked = false">Elvetés</v-btn>
                    <v-spacer/>
                    <v-btn color="green darken-1" text @click="doCrop()">Mentés</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import { Cropper } from 'vue-advanced-cropper'
    import ImageSelector from "./ImageSelector";

    export default {
        name: "ImageUploader",
        components: {
            ImageSelector,
            Cropper
        },
        data: () => ({
            allSelectedImages: [],
            newlySelectedImages: [],
            croppedImages: [],
            croppedImage: null,
            isImagePicked: false
        }),
        methods: {
            doCrop(){
                const { coordinates, canvas } = this.$refs.cropper.getResult()
                console.log(coordinates)
                this.croppedImages.push(canvas.toDataURL())
                this.newlySelectedImages = []
            },
            updateSelectedImage(selectedImages){
                console.log(selectedImages)

                if (selectedImages.count === 1){

                    this.newlySelectedImages.push(selectedImages.image)
                    this.allSelectedImages.push(selectedImages.image)
                }

                if (selectedImages.count >= 2){
                    for(let i=0; i < selectedImages.count; i++){
                        this.newlySelectedImages.push(selectedImages.array[i])
                        this.allSelectedImages.push(selectedImages.array[i])
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
