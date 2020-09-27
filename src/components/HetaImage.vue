<template>
    <v-hover  v-slot:default="{ hover }">
        <v-img :src="getSrc" :aspect-ratio="1/1" >
            <v-container class="fill-height">
                <v-row v-if="hover" align="center">
                    <v-col align="center">
                        <v-btn block small color="teal lighten-3" @click="editImage">Szerkesztés</v-btn>
                    </v-col>
                </v-row>
                <v-row v-if="hover" align="center">
                    <v-col align="center">
                        <v-btn block small color="red lighten-1" @click="deleteImage"> Törlés</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </v-hover>
</template>

<script>

    export default {
        name: "HetaImage",
        props: {
            index: {
                type: Number,
                required: true
            },
            imageObject: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            dialog: false
        }),
        methods: {
            deleteImage(){
                this.$emit('deleteImage', this.index)
            },
            editImage(){
                this.$emit('editImage', this.index)
            }
        },
        computed: {
            getSrc(){
                if(this.imageObject.croppedImage != null ){
                    return this.imageObject.croppedImage
                } else {
                    return this.imageObject.image
                }
            }
        }
    }
</script>

<style scoped>

</style>