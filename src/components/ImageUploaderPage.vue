<template>
    <v-row align="center" :justify="this.images.length == 0 ? 'center' : 'start'">
        <ImageSelector cols="3" v-on:addImage="addImage($event)"/>
<!--        <ImageSelector :cols="this.$vuetify.breakpoint.smAndDown ? 3 : 6" v-on:addImage="addImage($event)"/>-->

        <v-col cols="6" sm="3" v-for="(imageObj, index) in this.images" :key="index">
             <HetaImage :index="index"  :image-object="imageObj" :frame-object="selectedFrame" v-on:deleteImage="deleteImage($event)" v-on:editImage="editImage($event)"/>
        </v-col>

        <v-dialog v-if="dialog" v-model="dialog" scrollable :height="this.$vuetify.breakpoint.height/2" :width="this.$vuetify.breakpoint.width/2" >
            <v-card>
                <Cropper ref="cropper" :default-position="defaultPosition" :default-size="defaultSize" :src="this.images[imageToEdit].image"/>
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
            },
            selectedFrame: {
                type: Object,
                required: false
            }
        },
        data: () => ({
            imageToEdit: null,
            dialog: false
        }),
        methods: {
            addImage(selectedImage){
                this.images.push({'image': selectedImage.base64, 'width': selectedImage.width, 'height': selectedImage.height, 'croppedImage': null, 'co0ordinates': {'width': 0, 'height': 0, 'left': 0, 'top': 0}})
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
                var result = this.$refs.cropper.getResult()
                this.images[this.imageToEdit].croppedImage = result.canvas.toDataURL()
                this.images[this.imageToEdit].coordinates = result.coordinates
                this.$emit('updateImages', this.images)
                this.dialog = false
                this.imageToEdit = null
            },
            defaultPosition(){
                var defaultPosition = null
                var image = this.images[this.imageToEdit]

                if (image.croppedImage != null){
                    defaultPosition = {
                        left: image.coordinates.left,
                        top: image.coordinates.top
                    }
                } else {
                    if (image.width <= image.height) {
                        defaultPosition = {
                            left: (image.width / 2)  - (image.width/ 2 / 2),
                            top: (image.height / 2) - (image.width / 2 / 2)
                        }
                    } else {
                        defaultPosition = {
                            left: (image.width / 2)  - (image.height/ 2 / 2),
                            top: (image.height / 2) - (image.height / 2 / 2)
                        }
                    }
                }
                return defaultPosition
            },
            defaultSize() {

                var defaultSize = null
                var image = this.images[this.imageToEdit]

                if (image.croppedImage != null) {
                    defaultSize = {
                        width: image.coordinates.width,
                        height: image.coordinates.height
                    }
                } else {
                    if (image.width <= image.height) {
                        defaultSize = {
                            width: image.width / 2,
                            height: image.width / 2
                        }
                    } else {
                        defaultSize = {
                            width: image.height / 2,
                            height: image.height / 2
                        }
                    }
                }
                return defaultSize
            }
        }
    }
</script>

<style scoped>

</style>
