<template>
    <v-row class="fill-height" align="center" justify="space-around">
        <v-col align="center" cols="3">
            <v-btn x-large icon @click="onUploadClick()" ><v-icon>mdi-upload</v-icon></v-btn>
            <input class="d-none" ref="uploader" type="file" accept="image/*" @change="onImagePick()">
        </v-col>
        <v-col v-for="image in croppedImages" :key="image" cols="3">
            <v-img aspect-ratio="1" v-if="croppedImages != null" :src="image"/>
        </v-col>
        <v-dialog v-model="isImagePicked" persistent max-width="50%">
            <v-card>
                <Cropper ref="cropper" class="cropper" :src="selectedImage" :stencil-props="{ aspectRatio: 1/1 }"/>
                <v-card-actions>
                    <v-btn color="green darken-1" text @click="doCrop()">Mentés</v-btn>
                    <v-spacer/>
                    <v-btn color="red darken-1" text @click="isImagePicked = false">Elvetés</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

    import { Cropper } from 'vue-advanced-cropper'

    export default {
        name: "ImageUploader",
        components: {
          Cropper
        },
        data: () => ({
            height: 0,
            selectedImages: [],
            selectedImage: null,
            croppedImages: [],
            croppedImage: null,
            isImagePicked: false,
            windowSize: {
                x: 0,
                y: 0,
            },
        }),
        methods: {
            //trick because button acts as input
            onUploadClick(){
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
    }
</script>

<style scoped>

</style>