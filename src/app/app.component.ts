import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex = -1;

  onVoteClick(index){
    if(this.isSelected(index)){
      console.log('in if')
      this.selectedIndex = -1
    } else{
      console.log('else')
      this.selectedIndex = index;
    }
  }

  isSelected(indexNum){
    return this.selectedIndex === indexNum
  }

  anySelected(){
    return this.selectedIndex !== -1
  }

  getButtonText(index){
    if(this.isSelected(index)){
      return "Unvote"
    }else
    return "Vote"
  }

}
