<template>
  <v-app>
<!--    <router-view/>-->
    <v-container>
        <OrderHeader :title="pages[activePagePointer].title"/>
    </v-container>
    <v-main>
        <v-container class="fill-height">
            <component :is="pages[activePagePointer].component" v-on:updateSelectedFrame="updateSelectedFrame($event)"/>
        </v-container>
    </v-main>
    <v-container>
        <OrderFooter :actual-page="pages[activePagePointer].number"
                     :max-page="pages.length"
                     :back-button="pages[activePagePointer].backDisabled"
                     :next-button="pages[activePagePointer].nextDisabled"
                     v-on:updatePagePointer="updatePagePointer($event)"
        />
    </v-container>
  </v-app>
</template>

<script>
    import OrderHeader from "./components/OrderHeader";
    import OrderFooter from "./components/OrderFooter";
    import FrameSelectorPage from "./components/FrameSelectorPage";
    import ImageUploaderPage from "./components/ImageUploaderPage";
    import AddressFormPage from "./components/AddressFormPage";

  export default {
    name: "App",
      components: {
        OrderFooter,
        OrderHeader
      },
      data: () => ({
          activePagePointer: 0,
          pages: [
              {
                  number: 1,
                  title: 'Keret Választás',
                  backDisabled: true,
                  nextDisabled: false,
                  component: FrameSelectorPage,
                  result: null,
              },
              {
                  title: 'Képek Feltöltése',
                  number: 2,
                  backDisabled: false,
                  nextDisabled: false,
                  component: ImageUploaderPage
              },
              {
              title: 'Számlázási és Szállítási Adatok',
              number: 3,
              backDisabled: false,
              nextDisabled: false,
              component: AddressFormPage
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
          updatePagePointer(updatedPagePointer){
              this.activePagePointer = updatedPagePointer-1
          },
          updateSelectedFrame(selectedFrame){
              this.pages[0].result = selectedFrame
              console.log('SelectedFrame: ' + this.pages[0].result  .title)
          }
      },
  }
</script>
