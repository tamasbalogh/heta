<template>
    <v-row justify="center" align="center">
        <v-col cols="6" sm="3" v-for="frame in frames" :key="frame.id">
            <v-hover v-slot:default="{ hover }">
                <v-card v-ripple="{ center: true }" class="frame pa-2 justify-center" :elevation="hover ? 12 : 2" :class="[{'on-hover': hover}, {'selected': frame.selected}]" @click="selectFrame(frame)">
                    <v-img :src="require('@/assets/frames/'+ frame.image )"/>
                    <p class="mt-5 text-center"  :class="[`text-caption`]">{{ frame.title }}</p>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "FrameSelector",
        data: () => ({
            selectedFrame: null,
            frames: [
                {
                    id: 1,
                    title: 'Világos',
                    image: 'bright.png',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Világos Paszpartuval',
                    image: 'bright_pp.png',
                    selected: false

                },
                {
                    id: 3,
                    title: 'Sötét',
                    image: 'dark.png',
                    selected: false,

                },
                {
                    id: 4,
                    title: 'Sötét Paszpartuval',
                    image: 'dark_pp.png',
                    selected: false
                }
            ]
        }),
        methods: {
            selectFrame(frame){
                for (var i = 0; i < this.frames.length; i++) {
                    this.frames[i].selected = false;
                }
                frame.selected = true
                console.log("selected frame.id is: " + frame.id)
                this.selectedFrame = frame
            }
        }
    }
</script>

<style scoped>
    .frame {
        transition: opacity .3s ease-in-out;
    }
    .frame:not(.on-hover) {
        opacity: 0.4;
    }
    .frame.selected {
        opacity: 1;
    }
</style>
