<script>

export default {
    name: 'AppHome',
}

</script>

<template>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col d-flex gap-4">
                    <div class="img"></div>
                    <div class="me">
                        <div>Simone Vacca</div>
                        <div>Full-Stack Developer</div>
                        <div>25 anni</div>
                        <div>Roma</div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section class="description">
        <div class="container">
            <h1>Chi sono:</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, eius odio. Impedit libero ea dolorem
                placeat ut quod iure vel dolores assumenda, cupiditate aut! Natus assumenda quam mollitia. Minus cum
                quia aspernatur assumenda et iste eaque sit quod error corrupti aut, itaque, quae harum iusto, cumque
                numquam distinctio ipsam architecto natus! Consectetur ipsa, iusto excepturi dolorum magni repellat,
                vitae blanditiis quam sit maiores quidem accusantium veritatis et, magnam temporibus. Asperiores
                inventore a molestiae quod magni unde perferendis optio odio, dicta, provident similique nemo fugit aut?
                Asperiores modi nobis beatae aut! Autem earum maiores architecto consequatur debitis labore laborum, at
                odit.</p>
        </div>
    </section>

    <section class="training">
        <div class="container">
            <h2>Formazione:</h2>
            <ul>
                <li>2012 - 2017 ITIS E. Fermi, titolo acquisito: Perito elettronico specializzato in automazione.</li>
                <li>2024 Boolean, attestato di full stack developer.</li>
            </ul>
        </div>
    </section>



    <section class="experience">
        <div class="container">
            <h2>Esperienze lavorative:</h2>
             <ul>
                <li>2017 - 2023 Europe Net s.r.l.</li>
             </ul>
        </div>
    </section>

    <section class="skills">
        <div class="container">
            <h2>SKILLS</h2>
            <ul class="skills-list">
                <li>HTML-5</li>
                <li>CSS-3</li>
                <li>BOOTSTRAP</li>
                <li>JS</li>
                <li>VUE.JS</li>
                <li>PHP</li>
                <li>LARAVEL</li>
                <li>MYSQL</li>
            </ul>
        </div>
    </section>
</template>


<style>
.jumbotron {
    background-color: rgb(52, 52, 52);
    height: 250px;

    .row {
        position: absolute;

        .col {
            position: relative;
            bottom: -80px;

            .img {
                height: 250px;
                width: 200px;
                background-color: white;
            }

            .me {
                color: white;
                line-height: 40px;
                font-size: 1.5rem;
            }
        }
    }
}

section{
    padding-bottom: 4rem;
}

.description {
    padding-top: 6rem;
}

.skills{
    padding: 2rem;
    background-color: black;
    color:white;
    text-align: center;
    h2{
        padding-bottom: 2rem;
    }

    .skills-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        li{
            margin-bottom: 1rem;
            font-weight: bold;
            color: black;
            background-color:white;
            padding: 0 1rem;
            border-radius: 10px;
        }
    }
}
</style>