<template>
    <b-container class="py-3 border-bottom bg-white" fluid>
        <b-row>
            <b-col
                xs="12"
                sm="8"
                lg="10"
                class="d-flex flex-row align-items-center justity-content-start"
            >
                <h5 class="font-weight-bold mb-0 mt-0 p-0">
                    Property Analysis
                </h5>
                <span class="mx-3">
                    |
                </span>
                <p class="m-0 p-0">
                    {{ property.name ? property.name : property.address }},
                    {{
                        property.address
                            ? property.address
                            : 'Exact address is not available'
                    }}
                </p>
            </b-col>
            <b-col xs="12" sm="4" lg="2">
                <div
                    class="d-flex flex-row align-items-center justify-content-center mt-3 mt-md-0"
                >
                    <b-button variant="outline-success" v-b-modal.modal-2>
                        <span class="mx-2">Share</span></b-button
                    >
                    <b-modal id="modal-2" title="Share" hide-footer>
                        <p>Share</p>
                    </b-modal>

                    <b-button variant="success" class="mx-2" v-b-modal.modal-3>
                        <span class="mx-2">Export</span></b-button
                    >
                    <b-modal id="modal-3" title="Export" hide-footer>
                        <p>Export</p>
                    </b-modal>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SecondNavBar extends Vue {
    @Prop()
    private property!: object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
