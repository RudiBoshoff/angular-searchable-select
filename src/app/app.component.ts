import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  currentItem: string = "";
  selectedItem: string;
  items = ["one", "two", "three"];

  onItemChanged(item) {
    console.log(item);
    this.selectedItem = this.getSelectedItem(item);
  }

  getSelectedItem(selectedItem: string) {
    return this.items.find(item => item === selectedItem);
  }
}
