<template>
    <v-container class="py-0" fill-height id="v-container" >
        <v-row>
            <v-col>
                <v-row>
                    <v-col align="center">
                        <v-card class="pa-4 teal lighten-3">
                            <span class="font-weight-regular">{{ pages[activePagePointer].title }}</span>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col>
                        <v-card class="teal lighten-5">
                            <component :is="pages[activePagePointer].component"/>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="space-around">
                    <v-col>
                        <v-card class="teal lighten-3">
                            <v-row>
                                <v-col align="center" cols="4"><v-btn class="white" :disabled="pages[activePagePointer].backDisabled" @click="activePagePointer--">Vissza</v-btn></v-col>
                                <v-col align="center" cols="4">{{ pages[activePagePointer].number }}/{{ pages.length }}</v-col>
                                <v-col align="center" cols="4"><v-btn class="white" :disabled="pages[activePagePointer].nextDisabled" @click="activePagePointer++">Tovább</v-btn></v-col>
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
        }
    }
</script>

<style scoped>
</style>