<template>
    <div class="mb-3">
        <div
            v-for="(value, x) in options"
            :key="x"
            class="my-2 px-3 py-2 d-flex text-left w-100 pointer  align-items-center f-s-18px"
            :class="value.selected ? 'bg-primary text-white' : 'text-success'"
        >
            <b-icon :icon="value.icon" class="mr-3"></b-icon>{{ value.name }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LateralNav extends Vue {
    @Prop()
    private options!: object[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pointer {
    cursor: pointer !important;
}
.f-s-18px {
    font-size: 18px;
}
.bg-primary {
    background-color: #37474f !important;
}
</style>
