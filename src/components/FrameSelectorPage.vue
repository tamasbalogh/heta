<template>
    <v-row justify="center" align="center">
        <v-col cols="6" sm="3" v-for="frame in frames" :key="frame.id" @click="selectFrame(frame.id)">

            <v-hover v-slot:default="{ hover }">
               <v-card v-if="hover" class="frame pa-2 justify-center on-hover" elevation="12">
                    <v-img :src="require('@/assets/frames/'+ frame.image )"/>
                    <p class="mt-5 text-center" :class="[`text-caption`]">{{ frame.title }}</p>
                </v-card>
                <v-card v-else-if="frame.selected" class="frame pa-2 justify-center selected" elevation="2">
                    <v-img :src="require('@/assets/frames/'+ frame.image )"/>
                    <p class="mt-5 text-center" :class="[`text-caption`]">{{ frame.title }}</p>
                </v-card>
                <v-card v-else class="frame pa-2 justify-center" elevation="2">
                    <v-img :src="require('@/assets/frames/'+ frame.image )"/>
                    <p class="mt-5 text-center" :class="[`text-caption`]">{{ frame.title }}</p>
                </v-card>
            </v-hover>

        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "FrameSelector",
        props: {
            selectedFrame: {
                type: Object,
                required: false
            }
        },
        created() {
            if (this.selectedFrame != null) {
                this.selectFrame(this.selectedFrame.id)
            }
        },
        data: () => ({
            frames: [
                {
                    id: 0,
                    title: 'Világos',
                    image: 'bright.png',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Világos Paszpartuval',
                    image: 'bright_pp.png',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Sötét',
                    image: 'dark.png',
                    selected: false,

                },
                {
                    id: 3,
                    title: 'Sötét Paszpartuval',
                    image: 'dark_pp.png',
                    selected: false
                }
            ]
        }),
        methods: {
            selectFrame(id){
                for (let i = 0; i < this.frames.length; i++) {
                    if(this.frames[i].id == id){
                        this.frames[i].selected = true
                        this.$emit('updateSelectedFrame', this.frames[i])
                    } else {
                        this.frames[i].selected = false;
                    }
                }
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