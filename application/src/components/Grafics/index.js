import React, {Component} from "react";
import ApexCharts from "react-apexcharts";

class ChartDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
            series: [{
                name: "consumo",
                data: props.consume
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Consumos por litro(anual)',
                    align: 'left',
                    style: {
                        color:  '#fff'
                    },
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: props.month,
                }
            },
        };
    }

  

    render(){
        return(
            <ApexCharts
            options={this.state.options} series={this.state.series} type="line" height={350}
            />
            
        )
    }
}
export default ChartDashboard;