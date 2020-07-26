<template>
    <v-container>
        <v-row class="fill-height" align="center" justify="center">
            <template v-for="(frame, i) in frames">
                <v-col :key="i" cols="12" md="2">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="mx-2" :elevation="hover ? 12 : 2" :class="[{'on-hover': hover}, {'selected': frame.selected}]" v-on:click="selectFrame(frame)">
                            <v-img :src="require('@/assets/frames/' + frame.id + '.png' )"/>
                        </v-card>
                    </v-hover>
                </v-col>
            </template>
        </v-row>
        <v-row justify="center">
            <v-col class="image-full col-3 mx-2">
                    <v-img aspect-ratio="1" contain src="@/assets/test.png"></v-img>
                    <v-img class="frame-full" src="@/assets/frames/1.png"></v-img>
            </v-col>
            <v-col class="image-paspartou col-3 mx-2">
                <v-img aspect-ratio="1" contain src="@/assets/test.png"></v-img>
                <v-img class="frame-paspartou" src="@/assets/frames/2.png"></v-img>
            </v-col>
            <v-col class="image-full col-3 mx-2">
                <v-img aspect-ratio="1" contain src="@/assets/test.png"></v-img>
                <v-img class="frame-full" src="@/assets/frames/3.png"></v-img>
            </v-col>
            <v-col class="image-paspartou col-3 mx-2">
                <v-img aspect-ratio="1" contain src="@/assets/test.png"></v-img>
                <v-img class="frame-paspartou" src="@/assets/frames/4.png"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            frames: [
                {
                    id: 1,
                    title: 'Világos keret',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Világos keret paszpartuval',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Sötét keret',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Sötét keret paszpartuval',
                    selected: false
                },
            ],
            selectedFrame: -1
        }),
        methods: {
            selectFrame(frame){
                for (var i = 0; i < this.frames.length; i++) {
                    this.frames[i].selected = false;
                }
                frame.selected = true
                console.log("selected frame.id is: " + frame.id)
                this.selectedFrame = frame.id
            }
        }
    }
</script>

<style scoped>
    .image-full {
        position: relative;
        padding: 15px;
    }
    .image-paspartou {
        position: relative;
        padding: 70px;
    }
    .frame-full {
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .frame-paspartou {
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .v-card {
        transition: opacity .3s ease-in-out;
    }
    .v-card:not(.on-hover) {
        opacity: 0.4;
    }
    .v-card.selected {
        opacity: 1;
    }
</style>
