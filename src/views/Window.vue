<template>
    <v-container class="py-0">
        <v-row no-gutters>
            <v-col>
                <v-row>
                    <v-col align="center" v-resize="testFunc">
                        <v-card class="pa-4 teal lighten-3" :min-height="testHeaderFooter">
                            <span class="font-weight-regular">{{ pages[activePagePointer].title }}</span>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col>
                        <v-card class="teal lighten-5" :min-height="testBody">
                            <component :is="pages[activePagePointer].component"/>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="space-around">
                    <v-col>
                        <v-card class="teal lighten-3" :min-height="testHeaderFooter">
                            <v-row>
                                <v-col align="center" cols="4"><v-btn class="white" :disabled="pages[activePagePointer].backDisabled" @click="activePagePointer--">Vissza</v-btn></v-col>
                                <v-col align="center" cols="4"><span>{{ pages[activePagePointer].number }}/{{ pages.length }}</span></v-col>
                                <v-col align="center" cols="4"><v-btn :disabled="pages[activePagePointer].nextDisabled" @click="activePagePointer++">Tovább</v-btn></v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
    import FrameSelector from "../components/FrameSelector";
    import ImageUploader from "../components/ImageUploader";
    import AddressForm from "../components/AddressForm";

    export default {
        components: {
            FrameSelector
        },
        data: () => ({
            testHeaderFooter: 0,
            testBody: 0,
            activePagePointer: 0,
            activeFame: null,
            pages: [
                {
                    title: 'Keret Választás',
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
                    title: 'Számlázási és Szállítási Adatok',
                    number: 3,
                    backDisabled: false,
                    nextDisabled: false,
                    component: AddressForm
                },
                {
                    title: 'Fizetési Mód',
                    number: 4,
                    backDisabled: false,
                    nextDisabled: false,
                    component: null
                },
                {
                    title: 'Áttekintés és Vásárlás',
                    number: 5,
                    backDisabled: false,
                    nextDisabled: true,
                    component: null
                }
            ]
        }),
        methods: {
            testFunc(){
                var headerPnM = 56
                var footerPnM = 48
                var realHeight = this.$vuetify.breakpoint.height - headerPnM - footerPnM
                this.testHeaderFooter = Math.floor(realHeight * 0.07)
                this.testBody = Math.floor(realHeight * 0.92)
                console.log('header ' + this.testHeaderFooter + ' body ' + this.testBody)
                this.$nextTick(() => {

                })
            }
        }
    }
</script>

<style scoped>
</style>