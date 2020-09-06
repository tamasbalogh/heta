<template>
    <v-col :cols="this.cols">
        <v-img :aspect-ratio="1/1" @click="onUploadClick" class="uploader">
            <v-row class="fill-height" align="center">
                <v-col align="center">
                    <v-icon x-large color="teal lighten-3">mdi-upload</v-icon>
                </v-col>
            </v-row>
            <input class="d-none" ref="uploader" type="file" accept="image/*" @change="onImagePick()" multiple>
        </v-img>
    </v-col>
</template>

<script>
    export default {
        name: "ImageSelector",
        props: {
            cols: {
                type: Number,
                default: 3
            }
        },
        data: () => ({
            selectedImage: null,
            selectedImages: []
        }),
        methods: {
            onUploadClick(){
                this.$refs.uploader.click()
            },
            onImagePick(){
                if (this.$refs.uploader.files.length == 1){
                    console.log('Single image selected.')
                    let reader = new FileReader();
                    reader.readAsDataURL(this.$refs.uploader.files[0]);
                    reader.onload = (e) => {
                        this.selectedImage = e.target.result;
                        this.isImagePicked = true
                        console.log(this.selectedImage)
                    };
                }

                if (this.$refs.uploader.files.length >= 2) {
                    console.log('Multiple images selected.')
                    let files = this.$refs.uploader.files;
                    for (let i = 0; i < files.length; i++){
                        let reader = new FileReader();
                        reader.readAsDataURL(this.$refs.uploader.files[i]);
                        reader.onload = (e) => {
                            this.selectedImages.push(e.target.result);
                        };
                    }
                    this.isImagePicked = true
                    console.log(this.selectedImages)
                }
            },
        }
    }
</script>

<style scoped>
    .uploader{
        border: 3px solid #80CBC4;
        border-radius: 5px;
        animation: blinkingBorder 3s infinite;
    }
</style>