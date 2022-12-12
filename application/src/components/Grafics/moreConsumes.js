import React, {Component} from "react";
import ApexCharts from "react-apexcharts";

class ChartDashboardMoreConsume extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: props.consume,
            options: {
                chart: {
                    width: 380,
                    type: 'polarArea',
                    toolbar: {
                        show: true,
                    }
                },
                labels: props.cities,
                fill: {
                    opacity: 1
                },
                title: {
                    text: 'Maiores consumos por cidade(total)',
                    align: 'left',
                    style: {
                        color:  '#fff'
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                yaxis: {
                    show: false
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0
                        },
                        spokes: {
                            strokeWidth: 0
                        },
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        shadeTo: 'light',
                        shadeIntensity: 0.6
                    }
                }
            },
        }
    };

    render(){
        return(
            <ApexCharts
            options={this.state.options} series={this.state.series} type="polarArea" height={350}
            />
            
        )
    }
}
export default ChartDashboardMoreConsume;