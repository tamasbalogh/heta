<template>
    <div>
        <AppBar/>
        <v-content>
            <HomeContent/>
        </v-content>
        <Footer/>
    </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import HomeContent from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
      AppBar,
      HomeContent,
      Footer
  }
}
</script>
