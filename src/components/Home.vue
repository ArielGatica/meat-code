<template>
    <div>
        <v-img class="background" :src="background">

            <div class="logo-group">
                <v-img class="logo" :src="logo"></v-img>
            </div>
         

            <div class="social">
                <v-img :src="social"></v-img>
            </div>            
            
            <v-img class="hero-shape" :src="shape"></v-img>
            <div class="slogan-group">
                <span class="slogan">El secreto <br>de tu cocina</span>
            </div>

            <v-img class="fade" :src="rectangle"></v-img>
        </v-img>
    </div>
</template>



<script>
    export default {
        data: () =>({
            rectangle: require("../assets/rectangle-180.png"),
            background: require('../assets/hero-background.jpg'),
            logo: require('../assets/logo.svg'),
            shape: require('../assets/hero-shape.png'),
            social: require('../assets/social.png')
        })
    }
</script>

<style>
    .back{
        position: absolute;
        width: 1536px;
        height: 805px;
        left: -96px;
        top: -14px;
    }
    .logo-group{
        position: absolute;
        width: 150.53px;
        height: 90px;
        left: 200px;
        top: 49.32px;
    }   
    .logo{
        position: absolute;
        left: 9.38%;
        right: 80.17%;
        top: 2.05%;
        bottom: 94.22%
    }
    .background{
        position: absolute;
    }
    .social{
        position: absolute;
        width: 246px;
        height: 62px;
        left: 1554px;
        top: 42px;
    }
    .hero-shape{
        position: absolute;
        width: 1312px;
        height: 174px;
        left: -475.85px;
        top: 373.62px;

        transform: rotate(2.4deg);
    }
    .slogan-group{
        position: absolute;
        width: 635px;
        height: 200px;
        left: 130.93px;
        top: 284px;
    }
    .slogan{
        height: 200px;
        width: 635px;
        left: 130.93359375px;
        top: 284px;
        border-radius: nullpx;

        position: absolute;
        left: 10.09%;
        right: 46.81%;
        top: -10%;
        bottom: 79.92%;

        font-family: Caveat;
        font-style: normal;
        font-weight: bold;
        font-size: 110px;
        line-height: 100px;

        display: flex;
        align-items: center;
        color: #3F454A;
    }
    .fade{
        top: 500px;
    }
</style>