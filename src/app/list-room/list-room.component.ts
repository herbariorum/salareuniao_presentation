import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {

  rooms: Observable<Room[]>;

  constructor( private roomService: RoomService, private router: Router) { }

  ngOnInit() {
    this.reloadData();

  }

  reloadData(){
    this.rooms = this.roomService.getRoomList();
  }

  deleteRoom(id: number){
    this.roomService.deleteRoom(id)
    .subscribe(
      data=> {
        console.log(data)
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  detailsRoom(id:number){
    this.router.navigate(['details', id]);
  }

  updateRoom(id: number){
    this.router.navigate(['update', id]);
  }

}


