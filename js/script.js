
import jsondata from './../data.json' assert {type: 'json'};

const chartlabel = new Array;
const chartdata = new Array;

for(let i=0;i< jsondata.length ;i++)
{
	chartlabel[i] = jsondata[i].day;
	chartdata[i] = jsondata[i].amount;
}

const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: chartlabel,
        datasets: [{
            label: '',
            data: chartdata,
            backgroundColor: [ 
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)'
			],
            borderWidth: 1,
			borderRadius: 10,
        }]
    },
    options: {
        scales: {
			x: {
				grid: {
					display:false
				}	
			},
            y: {
                beginAtZero: true,
				display: false,
				grid: {
					display:false
				}				
            },
        },
		plugins: {
			legend: {
				display: false
			},
			tooltip: {
				enabled: true,
				backgroundColor:'hsl(25, 47%, 15%)',
				xAlign: 'center',
				yAlign: 'bottom',
			}
		},
        onClick: function (evt) {
//            console.log(evt);
			const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
			const bgcolor = [ 
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)',
			  'hsl(10, 79%, 65%)'
			];
			if (points[0]) {
				myChart.config.data.datasets[0].backgroundColor = bgcolor;
				myChart.data.datasets[points[0].datasetIndex].backgroundColor[points[0].index] = 'black';
			}
			myChart.update();
			
        },
		onHover: function(evt, chartElement) {
			
			if(chartElement.length == 1){
				evt.native.target.style.cursor = 'pointer';
				
			}else{
				evt.native.target.style.cursor = 'default';
				
			}
				
		}	
    }	
});

