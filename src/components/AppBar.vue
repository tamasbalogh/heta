<template>
    <span>
        <v-navigation-drawer app right temporary dark v-model="drawer" class="grey darken-1">
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content class="ma-2" @click="$vuetify.goTo(item.goTo, scrollingOptions)">
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar height="64" hide-on-scroll class="grey darken-2">
            <v-list height="100%" class="grey darken-2 ma-0 pa-0">
                <v-list-item>
                    <v-list-item-avatar class="ma-0 pb-1" size="55">
                        <v-img src="https://vectr.com/lamangra/a1tFsmc2E0.svg?width=200&height=200&select=a1tFsmc2E0page0"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content class="hidden-xs-only">
                        <v-list-item-title class="white--text text-center">HeTa</v-list-item-title>
                        <v-list-item-subtitle class="white--text text-center">Vászon és Kép</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <div class="text-center hidden-sm-and-down">
                <v-btn color="white" class="pa-2" text @click="$vuetify.goTo('#information', scrollingOptions)">Információk</v-btn>
                <v-btn color="white" class="pa-2" text @click="$vuetify.goTo('#products', scrollingOptions)">Termékek</v-btn>
                <v-btn color="white" class="pa-2" text @click="$vuetify.goTo('#contactus', scrollingOptions)">Kapcsolat</v-btn>
            </div>
            <div class="hidden-md-and-up">

                <v-btn color="white" icon @click="drawer = !drawer">
                    <v-icon >mdi-menu</v-icon>
                </v-btn>

<!--                <v-menu absolute offset-y transition="slide-y-transition">-->
<!--                    <template v-slot:activator="{ on, attrs }">-->
<!--                        <v-btn color="white" icon v-bind="attrs" v-on="on">-->
<!--                            <v-icon >mdi-menu</v-icon>-->
<!--                        </v-btn>-->
<!--                    </template>-->
<!--                    <div class="grey darken-2">-->
<!--                        <v-btn color="white" class="pa-2" text @click="$vuetify.goTo('#information', scrollingOptions)">Információk</v-btn>-->
<!--                    </div>-->
<!--                    <div class="grey darken-2">-->
<!--                        <v-btn color="white" class="pa-2" text @click="$vuetify.goTo('#products', scrollingOptions)">Termékek</v-btn>-->
<!--                    </div>-->
<!--                    <div class="grey darken-2">-->
<!--                        <v-btn color="white" class="pa-2" text @click="$vuetify.goTo('#contactus', scrollingOptions)">Kapcsolat</v-btn>-->
<!--                    </div>-->
<!--                </v-menu>-->
            </div>
        </v-app-bar>
    </span>
</template>

<script>
    export default {
        name: 'AppBar.vue',
        data () {
            return {
                drawer: false,
                items: [
                    { title: 'Információk', goTo: '#information'  },
                    { title: 'Termékek', goTo: '#products' },
                    { title: 'Kapcsolat', goTo: '#contactus' }
                ]
            }
        },
        computed: {
            scrollingOptions () {
                return {
                    duration: 850,
                    offset: 0
                }
            }
        }
    }
</script>

<style scoped>

</style>
