<template>
    <div id="app" :class="mode">
        <NavBar
            :avatar="avatar"
            :userInitials="userInitials"
            :menuItems="menuItems"
            :remainingProperties="remainingProperties"
            :mode="mode"
            @toggle="toggle"
        />
        <SecondNavBar :property="property" />
        <b-container class="my-5 px-2 px-md-5 mx-auto max-w-1440px" fluid>
            <b-row>
                <b-col md="5" lg="4" xl="3">
                    <PropertySummary :property="property" />
                </b-col>
                <b-col md="7" lg="8" xl="9">
                    <b-row>
                        <b-col xs="12" xl="7" class="my-5 mt-md-0 my-xl-0">
                            <GPRCard />
                        </b-col>
                        <b-col xs="12" xl="5">
                            <OperatingExpensesCard />
                        </b-col>
                    </b-row>
                    <b-row class="my-5">
                        <b-col>
                            <HistoricalOperatingExpenses
                                :headers="opexHeaders"
                                :items="opexItems"
                            />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/global/navigation/NavBar.vue';
import SecondNavBar from './components/global/navigation/SecondNavBar.vue';
import PropertySummary from './components/page/PropertySummary.vue';
import HistoricalOperatingExpenses from './components/page/HistoricalOperatingExpenses.vue';
import GPRCard from './components/page/GPRCard.vue';
import OperatingExpensesCard from './components/page/OperatingExpensesCard.vue';
@Component({
    components: {
        NavBar,
        PropertySummary,
        HistoricalOperatingExpenses,
        SecondNavBar,
        GPRCard,
        OperatingExpensesCard
    }
})
export default class App extends Vue {
    private avatar: object = {
        hasImg: true
    };

    private remainingProperties: string = '2';

    private userInitials: string = 'AP';

    private menuItems: object[] = [
        { name: 'Property Analysis', active: true },
        { name: 'Rent Roll Analyzer', active: false },
        { name: 'Operating Statement Parser', active: false },
        { name: 'Markert Analysis', active: false }
    ];

    private property: object = {
        name: 'West Loop Luxury',
        address: '320 N Canal St, Chicago, IL 60606',
        yearBuilt: '--',
        numberUnits: '--',
        propetyType: '--',
        avm: 7403292
    };

    private opexHeaders = ['T12', 'T9', 'T6'];
    private opexItems = [
        {
            name: 'Gross Potential Rent (GPR)',
            values: [-27887, -30447, -32964],
            isTotal: false
        },
        {
            name: 'Less Vacancy Loss',
            values: [-97156, -73531, -89770],
            isTotal: false
        },
        {
            name: 'Less Bad Debt',
            values: [-40569, -50379, -64320],
            isTotal: false
        },
        {
            name: 'Less Concessions',
            values: [-61595, -59964, -71150],
            isTotal: false
        },
        {
            name: 'Net Rentable Income',
            values: [-227207, -214321, -258204],
            isTotal: true
        },
        {
            name: 'Laundry/Vending Income (Net)',
            values: [0, 0, 0],
            isTotal: false
        },
        {
            name: 'Parking Income (Net)',
            values: [0, 0, 0],
            isTotal: false
        },
        {
            name: 'Commercial Income (Net)',
            values: [0, 0, 0],
            isTotal: false
        },
        {
            name: 'RUBS (income line item)',
            values: [71476, 71509, 64466],
            isTotal: false
        },
        {
            name: 'RUBS (expense line item)',
            values: [0, 0, 0],
            isTotal: false
        },
        {
            name: 'Other Income (Allowable)',
            values: [70599, 74488, 65118],
            isTotal: false
        },
        {
            name: 'App Fee',
            values: [5440, 4693, 3320],
            isTotal: false
        },
        {
            name: 'Forfeit Deposits',
            values: [10600, 7771, 7946],
            isTotal: false
        },
        {
            name: 'Late/Early Term Fees',
            values: [39292, 37328, 35122],
            isTotal: false
        },
        {
            name: 'Pet Deposits',
            values: [8371, 7407, 6830],
            isTotal: false
        },
        {
            name: 'Premiums',
            values: [7134, 7881, 8074],
            isTotal: false
        },
        {
            name: 'Corporate Prem.',
            values: [0, 0, 0],
            isTotal: false
        },
        {
            name: 'Medicare/Medicaid',
            values: [0, 0, 0],
            isTotal: false
        },
        {
            name: 'Nursing/Medical Income',
            values: [0, 0, 0],
            isTotal: false
        },
        {
            name: 'Meals Income',
            values: [0, 0, 0],
            isTotal: false
        },
        {
            name: 'Second Res. Income',
            values: [0, 0, 0],
            isTotal: false
        },
        {
            name: 'Unallowable',
            values: [1122, 1421, 2010],
            isTotal: false
        },
        {
            name: 'EGI',
            values: [-13173, -1823, -65318],
            isTotal: true
        }
    ];
    private mode: string = localStorage.getItem('themeMode');
    private mounted() {
        localStorage.setItem('themeMode', 'light');
    }

    private toggle() {
        if (this.mode === 'dark') {
            this.mode = 'light';
            localStorage.setItem('themeMode', 'light');
        } else {
            this.mode = 'dark';
            localStorage.setItem('themeMode', 'dark');
        }
    }
}
</script>

<style lang="scss">
body {
    margin: 0;
    border: 0 none;
    padding: 0;
}

html,
body,
#app {
    min-height: 100vh;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden !important; /* Firefox scroll-bar */
}

.light {
    background-color: #fafafa !important;
}

.dark {
    background-color: #11100e !important;
}

.max-w-1440px {
    max-width: 1440px;
}
</style>
