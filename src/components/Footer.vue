<template>
    <v-footer class="grey darken-2" padless>
        <v-row justify="center" no-gutters>
            <v-dialog v-model="privacyDialog" fullscreen hide-overlay transition="dialog-bottom-transition" scrollable>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="white" text rounded class="my-2" @click="privacyDialog = true" v-bind="attrs" v-on="on">
                        Adatkezelési tájékoztató
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>Adatkezelési tájékoztató</v-card-title>
                    <v-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</v-card-text>
                </v-card>
            </v-dialog>
            <v-dialog v-model="aszfDialog" fullscreen hide-overlay transition="dialog-bottom-transition" scrollable>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="white" text rounded class="my-2" @click="aszfDialog = true" v-bind="attrs" v-on="on">
                        Általános Szerződési Feltételek (ÁSZF)
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>Általános Szerződési Feltételek (ÁSZF)</v-card-title>
                    <v-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</v-card-text>
                </v-card>
            </v-dialog>
            <v-col class="grey darken-3 lighten-2 py-4 text-center white--text" cols="12">
                {{ new Date().getFullYear() }} — <strong>HeTa Canvas & Pic</strong>
            </v-col>

        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: 'Footer.vue',
        data () {
            return {
                privacyDialog: null,
                aszfDialog: null

            }
        }
    }
</script>

<style scoped>

</style>
