<template>
    <v-main>
        <v-container fluid class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
                <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item
                            src="@/assets/carousel/1.jpg"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    />
                    <v-carousel-item
                            src="@/assets/carousel/2.jpg"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    />
                    <v-carousel-item
                            src="@/assets/carousel/3.jpg"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    />
                    <v-carousel-item
                            src="@/assets/carousel/4.jpg"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    />
                </v-carousel>
            </v-row>
            <v-row id='information' justify="center" class="pa-2 grey lighten-4">
                <h1 class="font-weight-light ma-2">Információk</h1>
            </v-row>
            <v-row class="pa-2 grey lighten-4">
                <v-col>
                    <div>
                        <p v-for="question in questions" :key="question">
                            {{ question }}
                        </p>
                        <p align="right" v-for="answer in answers" :key="answer">
                            {{ answer }}
                        </p>
                    </div>
                </v-col>
            </v-row>
            <v-row id='products' justify="center" class="pa-2 grey lighten-3">
                <h1 class="font-weight-light">Termékek</h1>
            </v-row>
            <v-row class="grey lighten-3">
                <v-col sm="6">
                    <v-hover v-slot:default="{ hover }">
                        <v-card @click="$router.push('order/Vászonkép')" shaped class="ma-2 grey lighten-5">
                            <v-expand-transition>
                                <v-img height="250" src="../assets/canvas.jpg">
                                    <div
                                            v-if="hover"
                                            class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                                            style="height: 100%;"
                                    >
                                        Vászonkép Rendelés
                                    </div>
                                </v-img>
                            </v-expand-transition>
                            <v-card-title class="headline">Vászonkép</v-card-title>
                            <v-card-subtitle>Méret: 20x20</v-card-subtitle>
                            <v-card-text>Keret: fa</v-card-text>
                            <v-card-text>Keret Színe: világos, sötét</v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col sm="6">
                    <v-hover v-slot:default="{ hover }">
                        <v-card @click="$router.push('order/Falikép')" shaped class="ma-2 grey lighten-5">
                            <v-expand-transition>
                                <v-img height="250" src="../assets/pic.jpg">
                                    <div
                                            v-if="hover"
                                            class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                                            style="height: 100%;"
                                    >
                                        Falikép Rendelés
                                    </div>
                                </v-img>
                            </v-expand-transition>
                            <v-card-title class="headline">Falikép</v-card-title>
                            <v-card-subtitle>Méret: 21x21</v-card-subtitle>
                            <v-card-text>Keret: fa</v-card-text>
                            <v-card-text>Keret Színe: világos, sötét</v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
            <v-row id='contactus' justify="center" class="pa-2 grey lighten-4">
                <h1 class="font-weight-light">Kapcsolat</h1>
            </v-row>
            <v-row class="grey lighten-4">
                <v-col sm="6">
                    <v-row class="ma-2">
                        <v-text-field outlined label="Név"/>
                    </v-row>
                    <v-row class="ma-2">
                        <v-text-field outlined label="Telefon"/>
                    </v-row>
                    <v-row class="ma-2 mb-0">
                        <v-text-field class="pa-0 ma-0" outlined label="Email"/>
                    </v-row>
                </v-col>
                <v-col sm="6">
                    <v-row class="ma-2 mb-0">
                        <v-textarea class="pa-0 ma-0" height="245" outlined label="Üzenet" />
                    </v-row>
                </v-col>
            </v-row >
            <v-row justify="center" no-gutters class="grey lighten-4">
                <v-btn outlined class="mb-12">Küldés</v-btn>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        name: 'Content',
        data () {
            return {
                questions: [
                    'Egyedivé szeretnéd varázsolni otthonod?',
                    'A tökéletes, személyre szabott ajándékot keresed?',
                    ''],
                answers: [
                    'Itt a megoldás!',
                    'Rendeld meg egyedi fotó vagy vászonkép kollázsodat pár perc alatt!',
                    'A felhelyezéséhez nincs szükség fúrásra, egyszerűen pár mozdulattal felragaszthatod képeidet.',
                    'A képek elrendezését később is változtathatod, a ragasztó nem hagy nyomot a falon.',
                    'Ugye milyen egyszerű? :)'
                ],
                products: [
                    {
                        title: 'Vászonkép',
                        description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                    },
                    {
                        title: 'Falikép',
                        description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                    }
                ],
                overlay: false
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .7;
        position: absolute;
        width: 100%;
    }

</style>
