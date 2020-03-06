<template>
    <b-navbar
        toggleable="lg"
        type="dark"
        variant="primary"
        class="bv-example-row"
    >
        <b-navbar-brand href="#" class="app-logo ml-3 mr-5">
            <img class="w-100" src="../../../assets/logo_green.svg"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item-dropdown
                    text="Search"
                    toggle-class="d-flex align-items-center mx-2 text-white"
                    right
                >
                    <b-dropdown-item href="#">
                        <b-nav-form>
                            <b-form-input
                                size="sm"
                                class="mr-sm-2"
                                placeholder="Search"
                            ></b-form-input>
                            <b-button
                                size="sm"
                                class="my-2 my-sm-0"
                                type="submit"
                                >Search</b-button
                            >
                        </b-nav-form></b-dropdown-item
                    >
                </b-nav-item-dropdown>

                <b-nav-item-dropdown
                    text="Lang"
                    toggle-class="d-flex align-items-center mx-2 text-white"
                    right
                >
                    <template v-slot:button-content>
                        <b-icon icon="flag-fill"></b-icon
                        ><span class="mx-2">Lang</span>
                    </template>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown
                    toggle-class="d-flex align-items-center mx-2 text-white"
                >
                    <template v-slot:button-content>
                        <b-icon icon="tools"></b-icon
                        ><span class="mx-2">Tools</span>
                    </template>
                    <b-dropdown-item
                        v-for="item in menuItems"
                        :key="item.name"
                        :class="item.active ? 'active' : ''"
                        >{{ item.name }}</b-dropdown-item
                    >
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto d-flex align-items-center">
                <b-nav-item-dropdown
                    toggle-class="d-flex align-items-center mx-2 text-white"
                    right
                >
                    <!-- Using 'button-content' slot -->

                    <template v-slot:button-content>
                        <span
                            class="d-flex font-weight-bold bg-secondary rounded-circle user-circle align-items-center justify-content-center mr-1"
                            >{{ userInitials }}</span
                        >
                    </template>

                    <b-dropdown-item
                        href="https://app.enodoinc.com/dashboard/home"
                        >Go to Old Platform</b-dropdown-item
                    >
                    <b-dropdown-item href="#">Account</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
    @Prop()
    private userInitials!: string;

    @Prop()
    private menuItems!: object[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-logo {
    width: 56px;
}
.user-circle {
    width: 35px;
    height: 35px;
}
</style>
