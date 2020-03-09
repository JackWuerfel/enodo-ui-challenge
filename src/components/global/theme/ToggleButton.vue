<template>
    <div class="toggle-wrapper">
        <label class="toggle m-0 p-0">
            <input
                type="checkbox"
                :checked="mode === 'dark' ? 'checked' : false"
                @change="$emit('toggle')"
            />
            <span class="toggler round"></span>
        </label>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ToggleButton extends Vue {
    @Prop()
    private mode!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.toggle {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 25px;
}
.toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.toggler {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #15202b;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}
.toggler:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}
input:checked + .toggler {
    background: #a0c46d;
}
input:focus + toggler {
    box-shadow: 0 0 2px #a0c46d;
}
input:checked + .toggler:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
}
.toggler.round {
    border-radius: 34px;
}
.toggler.round:before {
    border-radius: 50%;
}
</style>
