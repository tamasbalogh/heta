<template>
    <v-row align="center" :justify="this.images.length == 0 ? 'center' : 'start'">
        <ImageSelector :cols="this.$vuetify.breakpoint.smAndDown ? 6 : 3" v-on:addImage="addImage($event)"/>

        <v-col cols="6" sm="3" v-for="(imageObj, index) in this.images" :key="index">
             <HetaImage :index="index"  :image-object="imageObj" v-on:deleteImage="deleteImage($event)" v-on:editImage="editImage($event)"/>
        </v-col>

        <v-dialog v-model="dialog" persistent :max-width="this.$vuetify.breakpoint.width/1.5" :max-height="this.$vuetify.breakpoint.height/1.5">
            <v-card>
                <Cropper v-if="imageToEdit != null" ref="cropper" :src="this.images[imageToEdit].image" :stencil-props="{ aspectRatio: 1/1 }"/>
                <v-card-actions>
                    <v-btn color="red lighten-1" text @click="dialog = false">Elvetés</v-btn>
                    <v-spacer/>
                    <v-btn color="teal lighten-3" text @click="saveCroppedImage()">Mentés</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-row>
</template>

<script>
    import ImageSelector from "./ImageSelector";
    import HetaImage from "./HetaImage";
    import { Cropper } from 'vue-advanced-cropper'


    export default {
        name: "ImageUploader",
        components: {
            ImageSelector,
            HetaImage,
            Cropper
        },
        props: {
            images: {
                type: Array,
                required: false
            }
        },
        data: () => ({
            //images: [],
            imageToEdit: null,
            dialog: false
        }),
        methods: {
            addImage(selectedImage){
                this.images.push({'image': selectedImage, croppedImage: null, 'coordinates': {width: 0, height: 0, left: 0, top: 0}})
                this.$emit('updateImages', this.images)
            },
            deleteImage(index){
                this.images.splice(index,1)
                this.$emit('updateImages', this.images)
            },
            editImage(index){
                this.imageToEdit = index
                this.dialog = true
            },
            saveCroppedImage(){
                let canvas = this.$refs.cropper.getResult().canvas
                this.images[this.imageToEdit].croppedImage = canvas.toDataURL();
                this.$emit('updateImages', this.images)
                this.dialog = false
                this.imageToEdit = null
            },
        }
    }
</script>

<style scoped>

</style>
