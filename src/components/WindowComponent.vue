<template>
    <div>
        <v-app-bar app rounded color="teal lighten-3">
            <v-row>
                <v-col align="center">
                    <span>{{ pages[activePagePointer].title }}</span>
                </v-col>
            </v-row>
        </v-app-bar>
        <v-main style="border: 1px solid blue">
            <v-container style="border: 1px solid red">
                <component :is="pages[activePagePointer].component"/>
            </v-container>
        </v-main>
        <v-footer app rounded color="teal lighten-3">
            <v-row justify="space-around">
                <v-col align="center"><v-btn text :disabled="pages[activePagePointer].backDisabled" @click="activePagePointer--">Vissza</v-btn></v-col>
                <v-col align="center"><span>{{ pages[activePagePointer].number }}/{{ pages.length }}</span></v-col>
                <v-col align="center"><v-btn text :disabled="pages[activePagePointer].nextDisabled" @click="activePagePointer++">Tovább</v-btn></v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
    import FrameSelector from "./FrameSelector";
    import ImageUploader from "./ImageUploader";
    import AddressForm from "./AddressForm";

    export default {
        name: "WindowComponent",
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
    }
</script>

<style scoped>

</style>
