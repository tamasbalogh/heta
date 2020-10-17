<template>

<!--    <div class="frame">-->
<!--        <div class="mat">-->
<!--            <div class="art">-->
<!--                <v-img :src="getSrc" :aspect-ratio="1/1" />-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

<!--    <v-hover  v-slot:default="{ hover }">-->
<!--            <v-img :src="getSrc" :aspect-ratio="1/1" >-->
<!--                <v-container class="fill-height">-->
<!--                    <v-row v-if="hover"  align="center">-->
<!--                        <v-col align="center">-->
<!--                            <v-btn block small color="teal lighten-3" @click="editImage">Szerkesztés</v-btn>-->
<!--                        </v-col>-->
<!--                    </v-row>-->
<!--                    <v-row v-if="hover" align="center">-->
<!--                        <v-col align="center">-->
<!--                            <v-btn block small color="red lighten-1" @click="deleteImage"> Törlés</v-btn>-->
<!--                        </v-col>-->
<!--                    </v-row>-->
<!--                </v-container>-->
<!--            </v-img>-->
<!--    </v-hover>-->

    <v-hover  v-slot:default="{ hover }">
        <v-img class="frame" :src="require('@/assets/frames/'+ frameObject.image )">
            <v-img :style="imageStyle" :src="getSrc" :aspect-ratio="1/1"/>
            <v-container v-if="hover" class="fill-height" style="position: absolute">
                <v-row   align="center">
                    <v-col align="center">
                        <v-btn block small color="teal lighten-3" @click="editImage">Szerkesztés</v-btn>
                    </v-col>
                </v-row>
                <v-row align="center">
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
            },
            frameObject: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            dialog: false,
            frameToArt: 26,
            frameToMat: 5,

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
            },
            imageStyle(){
                var resultStyle = {
                    'position': 'absolute',
                    'top': this.frameObject.style.top + '%',
                    'bottom': this.frameObject.style.bottom + '%',
                    'left': this.frameObject.style.left + '%',
                    'right': this.frameObject.style.right + '%'
                }
                return resultStyle
            }
        },
    }
</script>

<style scoped>

/*    .frame {*/
/*        position: relative;*/
/*        width: 100%;*/
/*        padding-bottom: 100%;*/
/*        background: #423530;*/
/*        background: #eddec8;*/
/*        box-shadow: 0 10px 7px -5px rgba(0, 0, 0, 0.3);*/
/*    }*/
/*    .mat {*/
/*        position: absolute;*/
/*        background: white;*/
/*        top: 5%; bottom: 5%; left: 5%; right: 5%;*/
/*        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5) inset;*/
/*    }*/
/*    .art {*/
/*        position: absolute;*/
/*        top: 0%; bottom: 0%; left: 0%; right: 0%;*/
/*        top: 29%; bottom: 29%; left: 29%; right: 29%;*/
/*    }*/

/*    .art v-img {*/
/*        width: 100%;*/
/*    }*/

    .frame {
        box-shadow: 7px 7px 10px -1px rgba(0,0,0,0.55);
    }

    /*.image {*/
    /*    position: absolute;*/
    /*    top: 26.5%; bottom: 26.5%; left: 26.5%; right: 26.5%;*/
    /*    top: 5%; bottom: 4.8%; left: 5%; right: 4.5%;*/
    /*}*/
</style>