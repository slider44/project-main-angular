import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/shared/services/skills.service';
import { Skill } from 'src/app/shared/model/skill';
import { Chart} from 'chart.js';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];
  name = [];
  year= [];
  chart = [];

  constructor(private skillService: SkillsService) { }

  ngOnInit() {
      this.skillService.getAllSkills().subscribe((res: Skill[]) => {

      
          res.forEach(y => {
              this.name.push(y.name);
              this.year.push(y.years);
             
          });

          console.log("Test", this.year);
          this.chart = new Chart ('canvas',{
              type: 'bar',
              data: {
                labels: this.name,
                datasets: [
                  {
                  
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: this.year,
                    borderColor: "#3cba9f",
                    fill: true
                  }
                ]
              },

              options: {
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [
                    {
                    display: true,
                    stacked: true
                  }
                ],
                  
                  yAxes: [{
                    display: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }],
                }
              }
            }
          )
        
      })

  }

}
