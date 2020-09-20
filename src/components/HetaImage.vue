<template>
    <div>
        <v-hover  v-slot:default="{ hover }">
            <v-img :src="src" :aspect-ratio="1/1" >
                <v-container class="fill-height">
                    <v-row v-if="hover" align="center">
                        <v-col align="center">
                            <v-btn block small color="teal lighten-3" @click="test">Szerkeszt</v-btn>
                        </v-col>
                    </v-row>
                    <v-row v-if="hover" align="center">
                        <v-col align="center">
                            <v-btn block small color="red lighten-1" @click="deleteImage"> Töröl</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </v-hover>
        <v-dialog persistent :max-width="this.$vuetify.breakpoint.width/1.5" :max-height="this.$vuetify.breakpoint.height/1.5">
            <v-card>
                <Cropper ref="cropper" :src="src" :stencil-props="{ aspectRatio: 1/1 }"/>
                <v-card-actions class="elevation-12">
                    <v-btn color="red darken-1" text @click="this.dialog = false">Elvetés</v-btn>
                    <v-spacer/>
                    <v-btn color="green darken-1" text @click="cropImage()">Mentés</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>

</template>

<script>

    import { Cropper } from 'vue-advanced-cropper'

    export default {
        name: "HetaImage",
        components: {
            Cropper,
        },
        props: {
            index: {
                type: Number,
                required: true
            },
            src: {
                type: String,
                required: true
            },
            coordinates: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            dialog: false
        }),
        methods: {
            test(){
                console.log(this.index)
            },
            deleteImage(){
                this.$emit('deleteImage', this.index)
            },
            cropImage(){
                let coordinates = this.$refs.cropper.getResult().coordinates
                console.log(coordinates)
            }
        }
    }
</script>

<style scoped>

</style>