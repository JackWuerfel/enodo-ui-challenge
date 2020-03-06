<template>
    <b-card
        title="Operating Expenses"
        class="mb-2 h-100 d-flex align-items-center"
    >
        <b-card-text>
            <ChartPie
                v-if="loaded"
                :height="300"
                :chartData="chartData"
                :chartOptions="chartOptions"
            ></ChartPie>
        </b-card-text>
    </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ChartPie from '../global/charts/ChartPie.vue';

@Component({
    components: {
        ChartPie
    }
})
export default class OperatingExpensesCard extends Vue {
    private loaded = false;

    private chartData = {
        datasets: [
            {
                data: [20, 30, 50, 10, 60, 80],
                backgroundColor: [
                    '#B2DFDB',
                    '#80CBC4',
                    '#4DB6AC',
                    '#26A69A',
                    '#009688',
                    '#009680'
                ]
            }
        ],
        labels: [
            'Salaries & Personnel',
            'Repairs & Maintenance',
            'Contract Services',
            'Marketing & Advertising',
            'Administrative',
            'Utilities'
        ]
    };
    private chartOptions: object = {
        responsive: true,
        maintainAspectRatio: false
    };

    private mounted() {
        setTimeout(() => {
            this.loaded = true;
        }, 500);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
