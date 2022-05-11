<template>
    <Header :page="'Profil'"></Header>
    <main>
        <section class="content">
            <div class="informations">
                <h2>Informations</h2>
                <section class="infoContent">
                    <div class="userData">
                        <p>MySuperUserName</p>
                        <button>Change</button>
                        <p>bruh@gmail.com</p>
                        <button>Change</button>
                        <button>Change password</button>
                        <p>Create the 01/01/2022</p>
                        <p>At 13h12</p>
                        <p>Last Update the 02/03/2022</p>
                        <p>At 22h01 (Profil Picture)</p>
                    </div>
                    <div class="prfilPic">
                        <img src="../assets/img/footer-pic.svg" alt="image d'un enfant qui coure au milieu de plusieurs papillons">
                        <button>Change your profil Picture</button>
                    </div>
                </section>
            </div>
            <div class="stats">
                <h2>Stats</h2>
                <section>
                    <div>
                        <p>Level</p>
                        <p>1</p>
                    </div>
                    <div>
                        <p>Rank</p>
                        <p>1</p>
                    </div>
                    <div>
                        <p>Money</p>
                        <p>0</p>
                    </div>
                </section>
                <section>
                    <div>
                        <p>Favorite Game</p>
                        <p>ChillCode (5 played)</p>
                    </div>
                    <div>
                        <p>Games played</p>
                        <p>12</p>
                    </div>
                </section>
                <section>
                    <p>History</p>
                    <div v-if="userStats.history.length > 0">
                        <p v-for="game in userStats.history" :key="game">{{game.name}} - <span :class="game.result">{{game.result}} - {{game.time}}</span></p>
                    </div>
                    <p v-else>You haven't played any game yet.</p>
                    <button>See More</button>
                </section>
            </div>
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
    data() {
        return {
            userData: {
                username: '',
                email: '',
                createdAt: '',
                updatedAt: '',
                profilPic: '',
            },
            userStats: {
                games: '',
                wins: '',
                loses: '',
                history: [],
            }
        }
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
        background: rgb(34, 1, 1);
        background-size: cover;
    }

    main section.content
    {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        color: #ffffff;
    }

    main section.content > div
    {
        width: 47%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }

    main section.content div > *
    {
        margin: 0 20px;
    }
    main section.content div h2
    {
        margin: 150px 0;
    }

</style>