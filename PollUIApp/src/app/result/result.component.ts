import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PollService } from '../poll.service';
import { Poll } from '../polls.type';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  public result = {
    total: 0,
    options: [{
      option: "A",
      value: 5
    }]
  };

  constructor(@Inject(MAT_DIALOG_DATA) public poll: Poll,
    private httpClient: HttpClient,
    private pollService: PollService,
    public dialogRef: MatDialogRef<ResultComponent>){
    
  }

  ngOnInit(): void {
    this.getResult(this.poll.id);
  }

  getResult(id: number) {
    this.pollService.getResult(id).subscribe(
      data => {
        if(data){
          this.result.options.pop();
          const keys = Object.keys(data);
          let sum = 0;
          for(let k of keys){
            var option = {
              option: k,
              value: data[k]
            }
            sum += data[k];
            this.result.options.push(option);
          }
          this.result.total = sum;
        }
        console.log(this.result);
      }, error => {
        console.log("unable to get the results")
      }
    )
  }

  getPersentage(curr: number, total: number): string {
    if(total === 0) return "0%"
    return ((curr*100)/total).toFixed(1) + "%";
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
