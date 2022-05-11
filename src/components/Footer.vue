<template>
    <footer>
        <div class="link">
            <a class="discord" href="https://discord.gg/ttR85ZNjUd" target="_blank"><img src="../assets/img/logo-discord.png">discord.gg/chillgames</a>
            <a class="github" href="https://github.com/OscarM-Code/chillgames" target="_blank"><img src="../assets/img/logo-github.png">github.com/chillgames</a>
            <a class="email" href="mailto:contact.chillgames@gmil.com" target="_blank"><img src="../assets/img/logo-email.png">contact.chillgames@gmail.com</a>
        </div>
        <div class="name">
            <p class="firstp">CHILLGAMES</p>
            <p class="secondp">© 2022 All right reserved</p>
        </div>
        <div class="img">
            <img src="../assets/img/footer-pic.svg" alt="image d'un enfant qui coure au milieu de plusieurs papillons">
        </div>
    </footer>
</template>

<script>

</script>

<style>

footer
{
    width: 100%;
    height: 200px;
    background: #161616;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.5);
}

footer a
{
    font-family: 'Oswald';
    font-size: 18px;
    text-decoration: none;
    color: #ffffff;
    margin-left: 50px;
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    transition: 0.3s;
}

footer a:hover
{
    color: #758edf;
}

footer a img
{
    max-height: 100%;
    max-width: 30px;
    margin-right: 22px;
}

.link
{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.img
{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
}

footer .img img
{
    height: 80%;
    filter: invert(100%);
}

.link p
{
    margin-left: 50px;
}

.firstp
{
    font-family: 'Oswald-Bold';
    font-size: 50px;
}

.secondp
{
    font-family: 'Oswald';
    font-size: 18px;
}

.name
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>