<template>
    <v-row align="center" :justify="this.croppedImages.length === 0 ? 'center' : 'start'">
        <ImageSelector v-on:updateSelectedImage="updateSelectedImage($event)"/>


        <v-col cols="4" lg="3" v-for="image in croppedImages" :key="image">
            <v-img v-if="croppedImages != null" :src="image"/>
        </v-col>

        <ImageEditor v-if="newlySelectedImages.length!=0" :selected-image="newlySelectedImages[0]"/>
    </v-row>

</template>

<script>
    import ImageSelector from "./ImageSelector";
    import ImageEditor from "./ImageEditor";

    export default {
        name: "ImageUploader",
        components: {
            ImageEditor,
            ImageSelector
        },
        data: () => ({
            allSelectedImages: [],
            newlySelectedImages: [],
            croppedImages: [],
            croppedImage: null,
            isImagePicked: false
        }),
        methods: {
            updateSelectedImage(selectedImages){
                if (selectedImages.count === 1){
                    this.newlySelectedImages.push(selectedImages.image)
                }

                if (selectedImages.count >= 2){
                    for(let i=0; i < selectedImages.count; i++){
                        this.newlySelectedImages.push(selectedImages.array[i])
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
