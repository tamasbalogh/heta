<template>
  <v-app>
<!--    <router-view/>-->
    <v-container>
        <OrderHeader :title="pages[activePagePointer].title"/>
    </v-container>
    <v-main>
<!--        <v-img src="assets/living-room.jpg" width="100px" height="100px"/>-->
        <v-container class="fill-height">
            <component :is="pages[activePagePointer].component"/>
        </v-container>
    </v-main>
    <v-container>
        <v-card color="teal lighten-3">
            <v-row align="center" justify="space-around" class="ma-0 pa-0">
                <v-col class="ma-0 pa-0" align="center"><v-btn text :disabled="pages[activePagePointer].backDisabled" @click="pagePointer--">Vissza</v-btn></v-col>
                <v-col class="ma-4 pa-0" align="center"><span>{{ pages[activePagePointer].number }}/{{ pages.length }}</span></v-col>
                <v-col class="ma-0 pa-0" align="center"><v-btn text :disabled="pages[activePagePointer].nextDisabled" @click="pagePointer++">Tovább</v-btn></v-col>
            </v-row>
        </v-card>
    </v-container>
  </v-app>
</template>

<script>
    import OrderHeader from "./components/OrderHeader";
    import OrderFooter from "./components/OrderFooter";
    import FrameSelector from "./components/FrameSelector";
    import ImageUploader from "./components/ImageUploader";
    import AddressForm from "./components/AddressForm";

  export default {
    name: "App",
      components: {OrderFooter, OrderHeader},
      data: () => ({
      activePagePointer: 0,
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
