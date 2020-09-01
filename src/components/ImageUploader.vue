<template>
    <v-row align="center" justify="center" v-resize="imageHeight">
        <v-col cols="3" align="center">
            <div  @click="onUploadClick()" class="uploader" :width="imageWidth">
                <v-icon class="uploaderIcon" color="teal" x-large>mdi-upload</v-icon>
            </div>
            <input class="d-none" ref="uploader" type="file" accept="image/*" @change="onImagePick()">
        </v-col>
        <v-col cols="3" v-for="image in croppedImages" :key="image">
            <v-img v-if="croppedImages != null" :src="image"/>
        </v-col>
        <v-dialog  v-model="isImagePicked" persistent max-width="500px" :aspect-ratio="1/1">
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
            imageWidth: 0,
            selectedImages: [],
            selectedImage: null,
            croppedImages: [],
            croppedImage: null,
            isImagePicked: false
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
            },
            imageHeight() {
                var cols=3
                var size=0
                if (cols == 2) {
                    switch (this.$vuetify.breakpoint.name) {
                        case 'xs':
                            size=59
                            break
                        case 'sm':
                            size=93
                            break
                        case 'md':
                            size=126
                            break
                        case 'lg':
                            size=174
                            break
                        case 'xl':
                            size=274
                            break
                    }
                }
                if (cols == 3) {
                    switch (this.$vuetify.breakpoint.name) {
                        case 'xs':
                            size=101
                            break
                        case 'sm':
                            size=152
                            break
                        case 'md':
                            size=201
                            break
                        case 'lg':
                            size=272
                            break
                        case 'xl':
                            size=422
                            break
                    }
                }
                if (cols == 4) {
                    switch (this.$vuetify.breakpoint.name) {
                        case 'xs':
                            size=142
                            break
                        case 'sm':
                            size=210
                            break
                        case 'md':
                            size=276
                            break
                        case 'lg':
                            size=371
                            break
                        case 'xl':
                            size=571
                            break
                    }
                }
                this.imageWidth = size
            }
        }
    }
</script>

<style scoped>
    .uploader{
        border: 2px solid teal;
        border-radius: 10px;
        background: white;
        animation: blinkingBorder 3s infinite;
        width: 270px;
        height: 270px;
        padding-top: 110px;
    }

    @keyframes blinkingBorder{
        50%		{ border-color: pink; }
    }
</style>
