<script>

export default {
    name: 'AppContacts',
}

</script>

<template>
    <div class="container">
        <h1>CONTACTS</h1>

        <form action="">
            <div class="mb-3">
                <label for="name" class="form-label">Nome e Cognome</label>
                <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
                    placeholder="Inserisci il tuo nome qui" />
                <small id="helpId" class="form-text text-muted">Inserisci nome e cognome</small>
            </div>

            <div class="mb-3">
                <label for="mail" class="form-label">Inserisci la tua mail</label>
                <input type="email" class="form-control" name="mail" id="mail" aria-describedby="emailHelpId"
                    placeholder="abc@mail.com" />
                <small id="emailHelpId" class="form-text text-muted">Inserisci la mail dove verrai ricontattato</small>
            </div>

            <div class="mb-3">
                <label for="text" class="form-label">Informazioni</label>
                <textarea class="form-control" name="text" id="text" rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
                Invia
            </button>


        </form>
    </div>

</template>