<template>
    <v-app>
        <Home/>
        <Articles/>
        <ContactUs/>
    </v-app>
</template>

<script>
    import Home from './components/Home';
    import Articles from './components/Articles';
    import ContactUs from './components/ContactUs';

    export default {
        name: "App",
        components: {
            Home,
            Articles,
            ContactUs
        },
        data: () => ({
            //
        })
    };
</script>
