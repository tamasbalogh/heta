<template>
    <v-row align="center" :justify="croppedImages.length ? 'center' : 'start'">
        <ImageSelector/>
        <v-col cols="4" lg="3" v-for="image in croppedImages" :key="image">
            <v-img v-if="croppedImages != null" :src="image"/>
        </v-col>
        <v-dialog  v-model="isImagePicked" persistent :max-width="this.$vuetify.breakpoint.width/1.5" :max-height="this.$vuetify.breakpoint.height/1.5">
            <v-card>
                <Cropper ref="cropper" :src="selectedImage" :stencil-props="{ aspectRatio: 1/1 }"/>
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
            selectedImage: null,
            selectedImages: [],
            croppedImages: [],
            croppedImage: null,
            isImagePicked: false
        }),
        methods: {
            doCrop(){
                const { coordinates, canvas } = this.$refs.cropper.getResult()
                console.log(coordinates)
                this.croppedImages.push(canvas.toDataURL())
                this.isImagePicked = false
            }
        }
    }
</script>

<style scoped>

</style>
