<template>
    <div id="register">
        <div id="form">
            <p class="goHome" @click="this.$router.push('/')">Go back Home</p>
            <h1>Register</h1>
            <form @submit.prevent="register">
                <label for="userName">Username</label>
                <input type="text" id="userName" placeholder="Ex: StrongBald" v-model="userName">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Ex: titon@gmail.com" v-model="mail">
                <label for="password">Password</label>
                <input type="password" id="password" minlength="8" maxlength="15" placeholder="8 to 15 characteres" v-model="password">
                <button>Créer</button>
            </form>
            <p>Already have an account ? <a @click="this.$router.push('/login')"> Login</a></p>
        </div>
    </div>
    <Footer></Footer>
</template>
<script>
import { createToast } from "mosha-vue-toastify";
import Footer from "../components/Footer.vue"
export default {
    name: 'Register',
    data() {
        return {
            userName: null,
            mail: null,
            password: null,
        }
    },
    components: {
        Footer
    },
    methods: {
        register() {
            console.log(this.userName, this.mail, this.password);
            if (this.userName && this.mail && this.password) {
                fetch('http://localhost:3000/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        username: this.userName,
                        mail: this.mail,
                        password: this.password
                    })
                })
                .then(response => response.json())
                .then(r => {
                    console.log(r);
                    if (r.status && r.status === 200) {
                        this.toast(r.message, 'success');
                        localStorage.setItem("token", r.token);
                        this.$router.push(`/`);
                    } else {
                        this.toast(r.message, 'danger');
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.toast("Something went wrong", 'danger');
                });
            }else {
                this.toast("Please fill all the fields.", "danger");
            }
        }
    },
    setup() {
    const toast = (message, type) => {
      createToast(message, {
        position: "top-left",
        timeout: 5000,
        type: type,
        showIcon: true,
      });
    };
    return { toast };
  },
}
</script>
<style scoped>
#register {
    height: 100vh;
    background-image: url("../assets/img/bg-register.jpg");
    background-size: cover;
    background-position: right;
}
#register #form
{
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #ffffff;
}
#register #form > form
{
    margin-top: 5rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
#register #form h1
{
    margin-top: 5rem;
    font-size: 2.5rem;
    color: #000000;
    text-shadow: none;
    text-align: center;
}
#register #form > form > label
{
    font-size: 1.5em;
    font-weight: bold;
    color: #000000;
    text-shadow: none;
    margin-top: 1rem;
}
#register #form > form > input
{
    width: 100%;
    height: 3rem;
    border: none;
    border-bottom: 2px solid #000000;
    margin-bottom: 2rem;
    font-size: 1.5rem;
}
#register #form > form > input:focus
{
    outline: none;
}
#register #form > form > button
{
    width: 100%;
    height: 4rem;
    border: none;
    border-radius: 5px;
    background: #000000;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}
#register #form > form > button:hover
{
    transform: scale(1.1);
}
#form > p
{
    font-size: 1.2rem;
    color: #000000;
    text-shadow: none;
    margin-top: 1rem;
}
#form > p > a
{
    color: #461e61;
    text-decoration: underline;
    cursor: pointer;
}

.goHome
{
    cursor: pointer;
    color: #758edf !important;
    align-self: flex-start;
    margin-top: 1rem;
    margin-left: 1rem;
    font-weight: bold;
}

@media only screen and (max-width : 420px) and (orientation: portrait) {
    #register #form
    {
        width: 100%;
    }
    #register #form > form
    {
        margin-top: 1rem;
    }
    #register #form h1
    {
        margin-top: 4rem;
    }
}
@media only screen and (max-width : 900px) and (orientation: landscape) {
    #register #form
    {
        width: 70%;
    }
    #register #form > form
    {
        margin-top: 1rem;
    }
    #register #form h1
    {
        margin-top: 4rem;
    }
    #register {
    background-size: 100% auto;
    height: auto;
    width: 100%;
    }
}
@media (min-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    #register #form
    {
        width: 70%;
    }
    #register {
    background-size: cover;
    background-position: left 45% bottom;
    }
}
@media (width: 1024px) and (orientation: landscape) {
    #register #form
    {
        width: 50%;
    }
    #register #form > form
    {
        margin-top: 1rem;
    }
    #register #form h1
    {
        margin-top: 4rem;
    }
}
</style>