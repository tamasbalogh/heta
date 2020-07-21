<template>
    <v-container>
        <v-row justify="center">
            <v-col class="col-3">
                <div class="heta-image">
                    <v-img aspect-ratio="1" contain src="@/assets/test.png"></v-img>
                    <div class="heta-image-border"></div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Test.vue"
    }
</script>

<style scoped>
    .heta-image {
        box-shadow: 8px 10px 10px grey;
    }
</style>
