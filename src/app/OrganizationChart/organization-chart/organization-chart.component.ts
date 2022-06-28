import { Component, OnInit } from '@angular/core';
import { MyTreeNode } from '../Interfaces/interfaces';

@Component({
  selector: 'app-organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.css']
})
export class OrganizationChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tree: MyTreeNode = {
    name: 'Felines',
    description: 'Cute playful animals',
    image: 'assets/chart-images/9.png',
    onClick: () => alert('Death to dogs'),
    children: [
        {
            name: 'Big Cats',
            image: 'assets/chart-images/9.png',
            css: 'background-color: #F00000',
            children: [
                {
                    name: 'Lion',
                    image: 'assets/chart-images/9.png',
                    children: []
                },
                {
                    name: 'Tiger',
                    cssClass: 'yellow-on-hover',
                    image: 'assets/chart-images/9.jpg',
                    children: []
                },
                {
                    name: 'Cheetah',
                    image: 'assets/chart-images/9.png',
                    children: []
                }
            ]
        },
        {
            name: 'Small Cats',
            description: 'Cute, but can also be crude. Like when they defecate on your lap, that would be a good example of crudeness on their part',
            image: 'assets/chart-images/9.png',
            children: [
                {
                    name: 'House Cat',
                    image: 'assets/chart-images/9.png',
                    children: []
                },
                {
                    name: 'Street Cat',
                    image: 'assets/chart-images/9.png',
                    children: [
                        {
                            name: 'Dumb Cat',
                            image: 'assets/chart-images/9.png',
                            children: [
                                {
                                    name: 'Sorry For Bad Example',
                                    image: 'assets/chart-images/9.png',
                                    children: []
                                }
                            ],
                        },
                        {
                            name: 'Good Cat',
                            image: 'assets/chart-images/9.png',
                            children: [
                                {
                                    name: 'Binary Search Tree',
                                    image: 'assets/chart-images/9.png',
                                    children: [
                                        {
                                            name: '7',
                                            image: 'assets/chart-images/9.png',
                                            children: [
                                                {
                                                    name: '3',
                                                    image: 'assets/chart-images/9.png',
                                                    children: [
                                                        {
                                                            name: '2',
                                                            image: 'assets/chart-images/9.png',
                                                            children: []
                                                        },
                                                        {
                                                            name: '5',
                                                            image: 'assets/chart-images/9.png',
                                                            children: []
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: '13',
                                                    description: 'An odd yet funny number.',
                                                    image: 'assets/chart-images/9.png',
                                                    children: [
                                                        {
                                                            name: '11',
                                                            description: 'All nodes to the right are greater',
                                                            image: 'assets/chart-images/9.png',
                                                            children: []
                                                        },
                                                        {
                                                            name: '17',
                                                            image: 'assets/chart-images/9.png',
                                                            description: 'This number is less that 17.00000001',
                                                            children: []
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Fake Cats',
            image: 'assets/chart-images/9.png',
            children: [],
            onClick: () => console.log('Google chrome stole some RAM')
        }
    ]
};

}
