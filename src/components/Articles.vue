<template>
    <v-container>
        <v-row align="center" justify="center">
            <h2 class="sub-title mb-12">Nuestros artículos</h2>
            <v-img :src="brush" class="brush mb-12"></v-img>
        </v-row>
        
        <v-row>
            <v-col cols="12" sm="3">
                <v-card  height="319" width="255" class="mx-auto">
                    <v-navigation-drawer>                            
                        <v-list-item
                            @click="sideSettings(item.title)"
                            :prepend-icon="item.icon"
                            v-for="item in itemsSide" :key="item.title"
                            >
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-navigation-drawer>
                </v-card>
            </v-col>

            <v-col cols="12" sm="9">                
                <v-row>                    
                    <v-col v-for="item in articles" :key="item.id">
                        <v-card  class="cards">
                            <v-img class="images" :src="item.image" height="200px"></v-img>
                            <v-card-title>{{ item.title }}</v-card-title>
                            <v-card-subtitle class="card-text">{{ item.content }}</v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
    import axios from "axios";
    import { environments } from "../environments/environments";

    export default {
        data: () => ({
            brush: require("../assets/brush.png"),
            articles: [],
            itemsSide: [
                { title: 'TODOS' },
                { title: 'PRODUCTOS' },
                { title: 'RECETAS' },  
                { title: 'CONSEJOS' },         
            ]
        }),
        beforeMount() {
            this.getAllArticles();
        },
        methods: {
            async getAllArticles(){ 
                await axios.get(`${environments.API_MEAT_ARTICLES}`)
                .then(response => {
                    if(response.status == 200)
                        this.articles = response.data.map(val => val);
                })
                .catch(err => console.error(err));
            },
            async getProductsArticles(){ 
                await axios.get(`${environments.API_MEAT_ARTICLES}?filter=Productos`)
                .then(response => {
                    if(response.status == 200)
                        this.articles = response.data.map(val => val);
                })
                .catch(err => console.error(err));
            },
            async getRecipesArticles(){ 
                await axios.get(`${environments.API_MEAT_ARTICLES}?filter=Recetas`)
                .then(response => {
                    if(response.status == 200)
                        this.articles = response.data.map(val => val);
                })
                .catch(err => console.error(err));
            },
            async getTipsArticles(){ 
                await axios.get(`${environments.API_MEAT_ARTICLES}?filter=Consejos`)
                .then(response => {
                    if(response.status == 200)
                        this.articles = response.data.map(val => val);
                })
                .catch(err => console.error(err));
            },
            sideSettings(title){
                if(title == 'TODOS')
                    return this.getAllArticles();
                else if(title == 'PRODUCTOS')
                    return this.getProductsArticles();
                else if(title == 'RECETAS')
                    return this.getRecipesArticles();
                else if(title == 'CONSEJOS')
                    return this.getTipsArticles();
            }
        }
    };
</script>

<style>
    .brush {
        position: absolute;
        width: 464px;
        height: 85px;
        left: 710px;
        top: 1019px;
    }
    .sub-title {
        font-family: Caveat;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 38px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #3F454A;
    }
    .cards{
        height: 438px;
        width: 270px;   
    }

</style>