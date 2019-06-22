<template>
    <div class="hello">
        {{everan}} - gogo!
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                everan: 'Hello Laravel'
            }
        },
        mounted() {

        },
        methods: {
            _modal() {
                $('.ui.modal')
                    .modal('setting', 'closable', false)
                    .modal('show')

            }
        }
    }
</script>

<style scoped>

</style>
