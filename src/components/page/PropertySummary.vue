<template>
    <b-card
        img-src="https://maps.googleapis.com/maps/api/streetview?size=400x200&pitch=10&fov=180&location=320%20N%20Canal%20St,%20Chicago,%20IL%2060606&key=AIzaSyApsGVNO-Ms2sIJM4PtmwC5VfeutsZSExo"
        img-alt="Image"
        img-top
        tag="property"
        class="w-100 text-left"
        no-body
    >
        <div class="w-100 px-3">
            <div class="pt-4 pb-3">
                <h3>{{ property.name }}</h3>
                <h6 class="pt-2">
                    <strong>Street Address:</strong> <br />{{
                        property.address
                    }}
                </h6>
            </div>
            <hr class="mt-0" />
            <div class="d-flex flex-column">
                <b-container class="p-0" fluid>
                    <b-row no-gutters>
                        <b-col lg="4">
                            <strong># Units:</strong> <br />
                            {{
                                property.numberUnits
                                    ? property.numberUnits
                                    : '--'
                            }}
                        </b-col>
                        <b-col lg="4">
                            <strong>Type:</strong> <br />
                            {{
                                property.propetyType
                                    ? property.propetyType
                                    : '--'
                            }}
                        </b-col>
                        <b-col lg="4">
                            <strong>Year Built:</strong> <br />
                            {{ property.yearBuilt ? property.yearBuilt : '--' }}
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <hr />
            <p class="text-success">
                <strong
                    >{{
                        property.avm
                            ? property.avm
                            : '--'
                              | currency('$', 0, { thousandsSeparator: ',' })
                    }}
                    AVM</strong
                >
            </p>
            <hr />

            <LateralNav :options="propertySections" />
        </div>
    </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LateralNav from '../global/navigation/LateralNav.vue';

@Component({
    components: {
        LateralNav
    }
})
export default class NavBar extends Vue {
    @Prop()
    private property!: object;

    private propertySections: object[] = [
        { name: 'Comparables', selected: false },
        { name: 'Operating Expenses', selected: true },
        { name: 'Rent roll / Unit Mix', selected: false },
        { name: 'Amenities', selected: false },
        { name: 'Market', selected: false }
    ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.max-w-115px {
    overflow-x: scroll;
    max-width: 115px;
}
</style>
