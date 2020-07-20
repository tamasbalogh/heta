<template>
    <v-container>
        <v-row justify="center">
            <v-col class="col-3">
                <div class="image-border">
                    <v-img aspect-ratio="1" contain src="@/assets/test.png"></v-img>
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
    .image-border {
        background-image: url(../assets/hovsta_bright_full.png);
        width: 100%;git
        height: 100%;
    }

</style>
