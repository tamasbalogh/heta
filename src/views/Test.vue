<template>
    <v-container>
        <v-row justify="center">
            <v-col class="col-3">
                <div class="heta-image-div">
                    <v-img class="heta-image" aspect-ratio="1" contain src="@/assets/test.png"></v-img>
                    <v-img class="heta-frame" src="@/assets/hovsta_bright_full.png"></v-img>
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
    .heta-image-div {
        position: relative;
        padding: 20px;
    }
    .heta-frame {
        position: absolute;
        box-shadow: 8px 10px 10px grey;
        box-shadow: 8px 10px 10px grey inset;
        top: 0px;
        left: 0px;
    }
</style>
