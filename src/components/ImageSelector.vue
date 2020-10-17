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
                type: String,
                default: "3"
            }
        },
        data: () => ({
        }),
        methods: {
            onUploadClick(){
                this.$refs.uploader.click()
            },

            onImagePick(){

                let vue_instance = this

                if (this.$refs.uploader.files.length == 1){
                    let reader = new FileReader();
                    reader.readAsDataURL(this.$refs.uploader.files[0]);
                    reader.onloadend = (e) => {
                        const img = new Image()
                        img.onload = function() {
                            vue_instance.$emit("addImage", { base64: this.src, width: this.width, height: this.height})
                        }
                        img.src = e.target.result
                    };
                }

                if (this.$refs.uploader.files.length >= 2) {
                    for (let i = 0; i < this.$refs.uploader.files.length; i++){
                        let reader = new FileReader();
                        reader.readAsDataURL(this.$refs.uploader.files[i]);
                        reader.onloadend = (e) => {
                            const img = new Image()
                            img.onload = function() {
                                vue_instance.$emit("addImage", { base64: this.src, width: this.width, height: this.height})
                            }
                            img.src = e.target.result
                        };
                    }
                }
            }
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