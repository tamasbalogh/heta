<template>
  <v-app>
<!--    <router-view/>-->
    <v-container>
        <OrderHeader :title="pages[activePagePointer].title"/>
    </v-container>
    <v-main>
        <v-container class="fill-height">
            <component :is="pages[activePagePointer].component"
                       :selected-frame="pages[0].resultFrame"
                       :images="pages[1].resultImages"
                       v-on:updateSelectedFrame="updateSelectedFrame($event)"
                       v-on:updateImages="updateImages($event)"
                       v-on:updateAddress="updateAddress($event)"/>
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
                  nextDisabled: true,
                  component: FrameSelectorPage,
                  resultFrame: null,
              },
              {
                  title: 'Képek Feltöltése',
                  number: 2,
                  backDisabled: false,
                  nextDisabled: true,
                  component: ImageUploaderPage,
                  resultImages: []
              },
              {
                  title: 'Számlázási és Szállítási Adatok',
                  number: 3,
                  backDisabled: false,
                  nextDisabled: false,
                  component: AddressFormPage,
                  resultAddress: null
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
              this.pages[0].nextDisabled = false
              this.pages[0].resultFrame = selectedFrame
          },
          updateImages(images){
              if (images.length >= 3){
                  this.pages[1].nextDisabled = false
              } else {
                  this.pages[1].nextDisabled = true
              }
              this.pages[1].resultImages = images
          },
          updateAddress(address){
              this.pages[2].resultAddress = address
          }
      },
  }
</script>
