<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <input
            id="keyin"
            ref="securyInput"
            type="text"
            value=""
            readonly="true"
            @focus="showKeyboard"
        />
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String
        },
        methods: {
            showKeyboard() {
                this.$CFCAKeyboard.showKeyboard()
            }
        },
        mounted() {
            this.$CFCAKeyboard.bindInputBox(this.$refs.securyInput)
            this.$CFCAKeyboard.setSymbolKeyboardDisplay(true)
            let ServerRandom = "01234567890123456789"
            this.$CFCAKeyboard.setServerRandom(ServerRandom)
            let CIPHER_TYPE_RSA = 1
            let RSA_PUBLIC_KEY =
                "308188028180C4420E53A3B40AABA065E44E1F172FA163B0EC23267AD37131AA6663B32CA81D47448FA767610839A3D699185A3929804E789516B13A76B8000ACBD148E20BAA291911F0889A8B3664486BC730D958FD4C675402B2A5EFCE5CCC9A688BBAD90590B834867C81C7FE45C0F4F8AFB53E886B5D24938DED5C29CEAFEA4A51BE89990203010001"
            let RSA_PUBLIC_KEY_SIG =
                "464CF0CDE7EE26CAA05B3923EB1D1A7B7455718B33602F4B4A3562F66E5671768CF9DD1D43C5E1A960880EDDFBCD1246F676381AC23D075DB35148E95E9C56E8AF3A2B4AD71EC6BE7910741B657649F749411ACD21E6C081E6C01A77EA64B0E720156B17622BB5B71C53EDF1A39D7F6D02B46535C68DC6D6DE9B1D164A2C6E7E"
            this.$CFCAKeyboard.setPublicKey(
                CIPHER_TYPE_RSA,
                RSA_PUBLIC_KEY,
                RSA_PUBLIC_KEY_SIG
            )
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>