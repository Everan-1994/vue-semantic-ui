<template>
    <div class="hello">
        <h1>{{ msg }} 111111111</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <div class="ui three column stackable grid">
            <div class="column">
                <div class="ui raised segment">
                    <div class="ui placeholder">
                        <div class="image header">
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="paragraph">
                            <div class="medium line"></div>
                            <div class="short line"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui raised segment">
                    <div class="ui placeholder">
                        <div class="image header">
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="paragraph">
                            <div class="medium line"></div>
                            <div class="short line"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui raised segment">
                    <div class="ui placeholder">
                        <div class="image header">
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="paragraph">
                            <div class="medium line"></div>
                            <div class="short line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3>Ecosystem {{ everan }}</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                   rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        <div class="ui labeled button" tabindex="0">
            <div class="ui red button"><i class="heart icon"></i> Like </div>
            <a class="ui basic red left pointing label">
                1,048
            </a>
        </div>
        <div class="ui labeled button" tabindex="0">
            <div class="ui basic blue button"><i class="fork icon"></i> Forks </div>
            <a class="ui basic left pointing blue label">
                1,048
            </a>
        </div>
        <button class="ui positive basic button" @click="_modal">Modal</button>
        <div class="ui modal">
            <i class="close icon"></i>
            <div class="header">
                Profile Picture
            </div>
            <div class="image content">
                <div class="ui medium image">
                    <img src="../assets/logo.png">
                </div>
                <div class="description">
                    <div class="ui header">We've auto-chosen a profile image for you.</div>
                    <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </div>
            </div>
            <div class="actions">
                <div class="ui black deny button">
                    Nope
                </div>
                <div class="ui positive right labeled icon button">
                    Yep, that's me
                    <i class="checkmark icon"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: {
                type: String,
                default: '123'
            }
        },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
