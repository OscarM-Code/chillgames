<template>
    <Header :page="'Home'"></Header>
    <main>
      <section>
        <h1>Welcome to ChillGames</h1>
        <p>Here you can play some games for chill with your friends.</p>
      </section>
    </main>
    <Footer></Footer>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default {
    name: "Profil",
    components: {
        Header,
        Footer
    },
}
</script>

<style scoped>

    main
    {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        background: url('../assets/img/bg-home.jpg') no-repeat top right fixed;
        background-size: cover;
    }

    main section
    {
        width: 800px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 150px 0 0 75px;
        color: #ffffff;
    }

    main section h1
    {
        font-family: 'ZenLoop';
        font-size: 90px;
        letter-spacing: 10px;
        font-weight: lighter;
    }

    main section p
    {
        font-family: 'ReemKufi';
        font-size: 42px;
        text-align: left;
    }

</style>