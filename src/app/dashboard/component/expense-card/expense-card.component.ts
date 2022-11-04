import { Component, OnInit } from '@angular/core';
import Chart, { Title } from 'chart.js/auto';
@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss']
})
export class ExpenseCardComponent implements OnInit {

  imageSrc = '/src/assets/img/Googel.png'

  constructor() { }
  labels = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
  ];
  labels1= ['Grocery','household','other']
  data1 = {
    labels : this.labels1,
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        '#121d5e','#2e4468', '#1a6d87'
      ],
      hoverOffset: 4
    }]
  };
  ngOnInit(): void {
    const data = {
      labels: this.labels,
      datasets: [{
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45],
      }]
    };

    const myChart = new Chart("myChart", {
      type: 'line',
      data: data,
      options: {
        
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
      }
    });
    const myChart2 = new Chart("myChart2", {
      type: 'line',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
      }
    });

    const myChart3 =new Chart("myChart3", {
      type: 'doughnut',
      data: this.data1,
      options:{
        plugins: {
          legend: {
            display: true,
            position:'bottom',
            labels:{
              font:{
                size:20,
                family:  'sans-serif',
              },
            },
          },
            
        },
    
      }
    });
  }
}
