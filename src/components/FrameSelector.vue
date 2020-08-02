<!--<template v-for="(frame, i) in frames">-->
<!--    <v-col :key="i" cols="12" md="2">-->
<!--        <v-hover v-slot:default="{ hover }">-->
<!--            <v-card class="frame mx-2" :elevation="hover ? 12 : 2" :class="[{'on-hover': hover}, {'selected': frame.selected}]" v-on:click="selectFrame(frame)">-->
<!--                <v-img :src="require('@/assets/frames/' + frame.id + '.png' )"/>-->
<!--            </v-card>-->
<!--        </v-hover>-->
<!--    </v-col>-->
<!--</template>-->

<template>
    <v-row class="fill-height" align="center" justify="space-around">
        <v-hover v-slot:default="{ hover }">
            <v-col cols="2" xs="6">
                <v-card class="frame" :elevation="hover ? 12 : 2" :class="[{'on-hover': hover}, {'selected': frames[0].selected}]" v-on:click="selectFrame(frames[0])">
                    <v-img :src="require('@/assets/frames/1.png' )"/>
                </v-card>
            </v-col>
        </v-hover>
        <v-hover v-slot:default="{ hover }">
            <v-col cols="2" xs="6">
                <v-card class="frame" :elevation="hover ? 12 : 2" :class="[{'on-hover': hover}, {'selected': frames[1].selected}]" v-on:click="selectFrame(frames[1])">
                    <v-img :src="require('@/assets/frames/2.png' )"/>
                </v-card>
            </v-col>
        </v-hover>
        <v-hover v-slot:default="{ hover }">
            <v-col cols="2" xs="6">
                <v-card class="frame" :elevation="hover ? 12 : 2" :class="[{'on-hover': hover}, {'selected': frames[2].selected}]" v-on:click="selectFrame(frames[2])">
                    <v-img :src="require('@/assets/frames/3.png' )"/>
                </v-card>
            </v-col>
        </v-hover>
        <v-hover v-slot:default="{ hover }">
            <v-col cols="2" xs="6">
                <v-card class="frame" :elevation="hover ? 12 : 2" :class="[{'on-hover': hover}, {'selected': frames[3].selected}]" v-on:click="selectFrame(frames[3])">
                    <v-img :src="require('@/assets/frames/4.png' )"/>
                </v-card>
            </v-col>
        </v-hover>
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
                    title: 'Világos keret',
                    selected: false,
                    color: 'Bright',
                    type: 'Full'
                },
                {
                    id: 2,
                    title: 'Világos keret paszpartuval',
                    selected: false,
                    color: 'Bright',
                    type: 'Mount'
                },
                {
                    id: 3,
                    title: 'Sötét keret',
                    selected: false,
                    color: 'Dark',
                    type: 'Full'
                },
                {
                    id: 4,
                    title: 'Sötét keret paszpartuval',
                    selected: false,
                    color: 'Dark',
                    type: 'Mount'
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