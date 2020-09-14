<template>
    <v-dialog v-model="dialog" persistent :max-width="this.$vuetify.breakpoint.width/1.5" :max-height="this.$vuetify.breakpoint.height/1.5">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                    v-bind="attrs"
                    v-on="on"
            >
                Open Dialog
            </v-btn>
        </template>
        <v-card>
            <Cropper ref="cropper" :src="selectedImage" :stencil-props="{ aspectRatio: 1/1 }"/>
            <v-card-actions class="elevation-12">
                <v-btn color="red darken-1" text @click="dialog = false">Elvetés</v-btn>
                <v-spacer/>
                <v-btn color="green darken-1" text @click="doCrop()">Mentés</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ImageEditor",
        props: {
            selectedImage: {
                type: String,
                required: true
            }
        },
        data: () => ({
            dialog: false
        }),
        methods: {
            doCrop(){
                const { coordinates, canvas } = this.$refs.cropper.getResult()
                console.log(coordinates)
                this.croppedImages.push(canvas.toDataURL())
                this.newlySelectedImages = []
            }
        }
    }
</script>

<style scoped>

</style>