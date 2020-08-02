<template>
    <v-container fill-height>
        <v-row class="fill-height">
            <v-col>
                <v-row  style="height: 5%">
                    <v-col align="center">{{ pages[activePagePointer].title }}</v-col>
                </v-row>
                <v-row class="fill-height" align="stretch" style="height: 90%">
                    <v-col>
                        <v-card class="fill-height">
                            <component :is="pages[activePagePointer].component"/>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row style="height: 5%" justify="space-around">
                    <v-col align="center" cols="4"><v-btn icon :disabled="pages[activePagePointer].backDisabled" @click="activePagePointer--"><v-icon>mdi-arrow-left</v-icon></v-btn></v-col>
                    <v-col align="center" cols="4">{{ pages[activePagePointer].number }}/{{ pages.length }}</v-col>
                    <v-col align="center" cols="4"><v-btn icon :disabled="pages[activePagePointer].nextDisabled" @click="activePagePointer++"><v-icon>mdi-arrow-right</v-icon></v-btn></v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
    import FrameSelector from "../components/FrameSelector";
    import ImageUploader from "../components/ImageUploader";

    export default {
        components: {
            FrameSelector
        },
        data: () => ({
            activePagePointer: 0,
            pages: [
                {
                    title: 'Keret Választása',
                    number: 1,
                    backDisabled: true,
                    nextDisabled: false,
                    component: FrameSelector
                },
                {
                    title: 'Képek Feltöltése',
                    number: 2,
                    backDisabled: false,
                    nextDisabled: false,
                    component: ImageUploader

                },
                {
                    title: 'Szállítási cím',
                    number: 3,
                    backDisabled: false,
                    nextDisabled: false,
                    component: null
                },
                {
                    title: 'Fizetési mód',
                    number: 4,
                    backDisabled: false,
                    nextDisabled: false,
                    component: null
                },
                {
                    title: 'Vásárlás',
                    number: 5,
                    backDisabled: false,
                    nextDisabled: true,
                    component: null
                }
            ]
        })
    }
</script>
<style scoped>

</style>