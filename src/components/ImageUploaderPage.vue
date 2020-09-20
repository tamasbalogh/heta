<template>
    <v-row align="center" :justify="this.images.length == 0 ? 'center' : 'start'">
        <ImageSelector v-on:addImage="addImage($event)"/>

        <v-col cols="4" lg="3" v-for="(imageObj, index) in images" :key="index">
             <HetaImage :index="index" :src="imageObj.image" :coordinates="imageObj.coordinates" v-on:deleteImage="deleteImage($event)"/>
        </v-col>
    </v-row>
</template>

<script>
    import ImageSelector from "./ImageSelector";
    import HetaImage from "./HetaImage";

    export default {
        name: "ImageUploader",
        components: {
            HetaImage,
            ImageSelector
        },
        data: () => ({
            images: [],
        }),
        methods: {
            addImage(selectedImage){
                this.images.push({'image': selectedImage, 'coordinates': {width: 0, height: 0, left: 0, top: 0}})
            },
            deleteImage(index){
                this.images.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>
