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
                                v-model="bName"
                                :rules="nameRules"
                                label="Név *"
                                outlined
                                required
                                color="teal"
                        />
                        <v-text-field
                                v-model="bCompany"
                                label="Cégnév"
                                outlined
                                color="teal"
                        />
                        <v-text-field
                                v-model="bStreet"
                                :rules="streetRules"
                                label="Utca, Házszám * (Épület, Emelet, Ajtó)"
                                required
                                outlined
                                color="teal"
                        />
                        <v-text-field
                                v-model="bCity"
                                :rules="cityRules"
                                label="Város *"
                                required
                                outlined
                                color="teal"
                        />
                        <v-text-field
                                v-model="bPostalCode"
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
                                    v-model="aName"
                                    :rules="nameRules"
                                    label="Név *"
                                    required
                                    outlined
                                    color="teal"
                            />
                            <v-text-field
                                    v-model="aStreet"
                                    :rules="streetRules"
                                    label="Utca, Házszám * (Épület, Emelet, Ajtó)"
                                    required
                                    outlined
                                    color="teal"
                            />
                            <v-text-field
                                    v-model="aCity"
                                    :rules="cityRules"
                                    label="Város *"
                                    required
                                    outlined
                                    color="teal"
                            />
                            <v-text-field
                                    v-model="aPostalCode"
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
            bName: '',
            aName: '',
            nameRules: [
                v => !!v || 'Mező kitöltése kötelező.'
            ],
            bCompany: '',
            companyRules: [
                v => !!v || 'Mező kitöltése kötelező.'
            ],
            bStreet: '',
            aStreet: '',
            streetRules: [
                v => !!v || 'Mező kitöltése kötelező.',
            ],
            bCity: '',
            aCity: '',
            cityRules: [
                v => !!v || 'Mező kitöltése kötelező.',
            ],
            aPostalCode: '',
            bPostalCode: '',
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
        },
    }
</script>

<style scoped>

</style>