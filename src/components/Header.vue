<template>
    <header>
        <h2>CHILLGAMES</h2>
        <div class="nav">
            <button @click="goHome" class="btn-home" :ref="refHome" >Home</button>
            <button @click="goGames" class="btn-games" :ref="refGames" >Games</button>
            <button v-if="token && token != ''" @click="goProfil" class="btn-profil" :ref="refProfil" >Profil</button>
            <button v-if="!token || token === ''" @click="goLogin" class="btn-login" >Login</button>
            <button v-if="!token || token === ''" @click="goRegister" class="btn-register" >Register</button>
        </div>
        <div class="options">
            <img v-if="token && token != ''" src="../assets/img/user-icon.png" alt="icone représentant une personne" class="profilPic">
            <img src="../assets/img/options-icon.png" alt="icone représentant un engrenage" @click="openOptions" class="roll">
        </div>
        <div class="optionsOpen" :ref="optionsRef">
            <div class="optionsOpen-content">
                <div v-if="token && token != ''" class="optionsOpen-content-item" @click="goProfilOptions">
                    <img src="../assets/img/user-icon.png" alt="icone représentant une personne">
                    <p>{{userData && userData.user ? userData.user : ''}}</p>
                </div>
                <div v-if="token && token != ''" class="separator"></div>
                <div class="optionsOpen-content-item">
                    <img v-if="language == 'English'" src="../assets/img/english-flag.png" alt="icone représentant le drapeau d'un pays">
                    <p>{{language}}</p>
                </div>
                <div v-if="token && token != ''" class="separator"></div>
                <div v-if="token && token != ''" class="optionsOpen-content-item" @click="logout">
                    <img src="../assets/img/logout-icon.png" alt="icone représentant une porte de sortie">
                    <p>Logout</p>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode';

export default {
    name: "Header",
    data() {
        return {
            refHome: 'btnHome',
            refGames: 'btnGames',
            refProfil: 'btnProfil',
            token: localStorage.getItem('token'),
            userData: localStorage.getItem("token") ? VueJwtDecode.decode(localStorage.getItem("token")) : null,
            optionsRef: 'optionsOpen',
            language: this.userData && this.userData.language ? this.userData.language : 'English'
        }
    },
    methods: {
        goHome(){
            this.$router.push('/');
        },
        goGames(){
            this.$router.push('/games');
        },
        goProfil(){
            this.$router.push('/profil');
        },
        goLogin(){
            this.$router.push('/login');
        },
        goRegister(){
            this.$router.push('/register');
        },
        openOptions(){
            this.$refs.optionsOpen.classList.toggle('optionsOpen-active');
            document.querySelector('.roll').classList.toggle('roll-active');
        },
        logout(){
            localStorage.removeItem('token');
            this.token = null;
            this.userData = null;
            this.$refs.optionsOpen.classList.toggle('optionsOpen-active');
            document.querySelector('.roll').classList.toggle('roll-active');
            this.$router.push('/');
        },
        goProfilOptions(){
            this.$refs.optionsOpen.classList.toggle('optionsOpen-active');
            document.querySelector('.roll').classList.toggle('roll-active');
            this.$router.push('/profil');
        },
    },
    props: ['page'],
    mounted(){
        if(this.page == 'Home'){
            this.$refs.btnHome.classList.add('active');
        } else if(this.page == 'Games'){
            this.$refs.btnGames.classList.add('active');
        } else if(this.page == 'Profil'){
            this.$refs.btnProfil.classList.add('active');
        }
    },
}
</script>

<style>

    header
    {
        display: flex;
        align-items: center;
        width: 100%;
        height: 90px;
        background: none;
        color: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    header h2
    {
        font-family: 'Oswald-Bold';
        font-size: 50px;
        margin-left: 30px;
    }

    header .nav
    {
        display: flex;
        align-items: center;
        margin-left: 100px;
    }

    header .nav button
    {
        font-family: 'Oswald';
        font-size: 25px;
        text-decoration: none;
        color: #ffffff;
        background: none;
        border: none;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition: 0.3s;
    }

    header .nav button:hover
    {
        color: #758edf;
    }

    header .nav button.active::after
    {
        width: 100%;
        height: 3px;
        content: '';
        background: #ffffff;
        transition: 0.3s;
    }

    header .nav button.active:hover::after
    {
        background: #758edf;
    }

    header .options
    {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        justify-self: flex-end;
        position: absolute;
        right: 30px;
        top: 0;
        height: 100%;
    }

    .profilPic
    {
       filter: invert(100%);
       margin-right: 30px;
    }

    header .options img
    {
        max-height: 40px;
        max-width: 40px;
        cursor: pointer;
        transition: 0.3s;
    }

    header .roll:hover {
        filter: invert(58%) sepia(40%) saturate(725%) hue-rotate(192deg) brightness(91%) contrast(92%);
    }

    header .optionsOpen
    {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 10px;
        top: -300px;
        background: rgba(0,0,0,0.5);
        transition: 0.3s;
        z-index: 2;
    }

    header .optionsOpen-active
    {
        top: 90px;
        z-index: 2;
    }

    header .optionsOpen-content
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        background: #ffffff;
        color: black;
        transition: 0.3s;
        border-radius: 5px;
    }

    header .optionsOpen-content-item
    {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        transition: 0.3s;
    }

    header .optionsOpen-content-item img
    {
        margin-left: 10px;
        margin-right: 40px;
        max-height: 40px;
        max-width: 40px;
    }

    header .optionsOpen-content-item p
    {
        font-family: 'Oswald';
        font-size: 20px;
    }
    
    .separator
    {
        width: 100%;
        height: 1px;
        background: #010124;
    }

    .optionsOpen-content-item:hover
    {
        background: #758edf;

    }

    .roll
    {
        transition: 0.3s;
    }

    .roll-active
    {
        transform: rotate(180deg);
    }

</style>