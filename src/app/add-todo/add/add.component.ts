import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/Todo";
import {TodoService} from "../../todo/todo.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm = this.formBuilder.group({summary:"",description:""})

  constructor(
    private service: TodoService,
    private formBuilder: FormBuilder) {}


  ngOnInit(): void {
  }

  onSubmit(): void {
    let inf = this.addForm.value;
    this.service.addTodo({
      id: undefined,
      summary: inf.summary != undefined ? inf.summary : "",
      description: inf.description != undefined ? inf.description : ""
    }).subscribe();
    this.addForm.reset();
  }
}
