<template>
    <v-row class="fill-height" justify="center" align="center">
        <v-col cols="12">
            <v-form
                    ref="billingForm"
                    v-model="valid"
                    lazy-validation
                    class="fill-height">

                <v-row justify="center">
                    <v-col cols="10" md="5">
                        <v-text-field
                                v-model="name"
                                :rules="nameRules"
                                label="Név *"
                                outlined
                                required
                                color="teal"
                        />
                        <v-text-field
                                v-model="company"
                                label="Cégnév"
                                outlined
                                color="teal"
                        />
                        <v-text-field
                                v-model="street"
                                :rules="streetRules"
                                label="Utca, Házszám * (Épület, Emelet, Ajtó)"
                                required
                                outlined
                                color="teal"
                        />
                        <v-text-field
                                v-model="city"
                                :rules="cityRules"
                                label="Város *"
                                required
                                outlined
                                color="teal"
                        />
                        <v-text-field
                                v-model="postalCode"
                                :rules="postalCodeRules"
                                label="Irányítószám *"
                                required
                                outlined
                                color="teal"
                        />
                        <v-text-field
                                label="Ország *"
                                value="Magyarország"
                                readonly
                                outlined
                                color="teal"
                        />
                    </v-col>
                    <v-col cols="10" md="5">
                        <v-checkbox
                                v-model="checkbox"
                                label="Szállítás másik címre?"
                                class="mb-5"
                                outlined
                                color="teal"
                        />
                        <v-form
                                v-if="checkbox"
                                ref="addressForm"
                                v-model="valid"
                                lazy-validation
                                class="fill-height"
                                color="teal">

                            <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Név *"
                                    required
                                    outlined
                                    color="teal"
                            />
                            <v-text-field
                                    v-model="street"
                                    :rules="streetRules"
                                    label="Utca, Házszám * (Épület, Emelet, Ajtó)"
                                    required
                                    outlined
                                    color="teal"
                            />
                            <v-text-field
                                    v-model="city"
                                    :rules="cityRules"
                                    label="Város *"
                                    required
                                    outlined
                                    color="teal"
                            />
                            <v-text-field
                                    v-model="postalCode"
                                    :rules="postalCodeRules"
                                    label="Irányítószám *"
                                    required
                                    outlined
                                    color="teal"
                            />
                            <v-text-field
                                    label="Ország *"
                                    value="Magyarország"
                                    readonly
                                    outlined
                                    color="teal"
                            />
                        </v-form>
                    </v-col>
                </v-row>


                <v-row justify="center">
                    <v-col cols="10" md="8">
                        <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail *"
                                required
                                outlined
                                color="teal"
                        />

                        <v-text-field
                                v-model="phone"
                                label="Telefon"
                                outlined
                                color="teal"
                        />
                        <v-textarea
                                label="Megjegyzés"
                                outlined
                                color="teal"/>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "AddressForm",
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Mező kitöltése kötelező.'
            ],
            company: '',
            companyRules: [
                v => !!v || 'Mező kitöltése kötelező.'
            ],
            street: '',
            streetRules: [
                v => !!v || 'Mező kitöltése kötelező.',
            ],
            city: '',
            cityRules: [
                v => !!v || 'Mező kitöltése kötelező.',
            ],
            postalCode: '',
            postalCodeRules: [
                v => !!v || 'Mező kitöltése kötelező.',
            ],
            email: '',
            emailRules: [
                v => !!v || 'Mező kitöltése kötelező.',
                v => /.+@.+\..+/.test(v) || 'Nem érvényes email cím.',
            ],
            phone: '',
            phoneRules: [
                v => !!v || 'Mező kitöltése kötelező.',
            ],
            checkbox: false,
        }),

        methods: {
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>

<style scoped>

</style>