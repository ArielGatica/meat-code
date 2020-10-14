<template>
    <v-container>
        <v-row align="center" justify="center">
            <h2 class="sub-title mt-12 mb-12">Contáctanos</h2>
        </v-row>

            <v-form ref="form" v-model="valid">
                <v-row align="center" justify="center">
                    <v-col cols="6">
                        <v-text-field
                            class="fields"                           
                            v-model="dataSubscribe.firstname"
                            :rules="required"
                            label="NOMBRE"
                            color="primary"
                            outlined>                                
                        </v-text-field>
                    </v-col>

                    <v-col cols="6">                        
                        <v-text-field
                            class="fields-1"
                            v-model="dataSubscribe.lastname"
                            :rules="required"
                            label="APELLIDO"
                            color="primary"
                            outlined>
                        </v-text-field>
                    </v-col>

                    <v-col cols="6">
                        <v-text-field
                            class="fields"
                            v-model="dataSubscribe.email"
                            :rules="email"
                            label="EMAIL"
                            color="primary"
                            outlined>
                            
                        </v-text-field>
                    </v-col>

                    <v-col cols="6">
                        <v-text-field   
                            class="fields-1"
                            v-model="dataSubscribe.phone"
                            :rules="min"
                            label="TELÉFONO"
                            color="primary"
                            outlined>

                        </v-text-field>
                    </v-col>
                </v-row>
            </v-form>

        <v-row>
            <v-spacer></v-spacer>
            <v-btn
                class="btn-send"
                :disabled="!valid"
                @click="subscribe()"
                style="color:#FFF"
                color="primary"
                rounded>
                Enviar
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import { environments } from '../environments/environments';

    export default {
        data: ()=>({
            brush: require("../assets/brush.png"),
            valid: true,
            required: [ v => !! v || 'Requerido.'],
            min: [ v => v.length >= 9 || 'Número incorrecto, min 9 dígitos' ],
            email: [ v => /.+@.+\..+/.test(v) || 'Debe ser un E-mail válido' ],
            dataSubscribe: {
                firstname: '',
                lastname: '',
                email: '',
                phone: ''
            }
        }),
        methods: {
            reset(){
                this.$refs.form.reset();
            },
            async subscribe(){
                await axios.post(`${environments.API_SUBSCRIBE}`, this.dataSubscribe)
                .then(response =>{
                    if(response.status == 200){
                        this.reset();
                        alert('SUSCRITO A MEAT!!')
                    }
                }).catch((err) => {alert(err)})
            }
        }
    }
</script>

<style>
    .btn-send{
        height: 85px;
        width: 170px;
        border-radius: 50px;
    }
    .fields{
        width: 350px;
        left: 55.18%;
    }
    .fields-1{
        width: 350px;
    }
</style>