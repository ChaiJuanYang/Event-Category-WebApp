import { Component } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.css']
})
export class TextToSpeechComponent {
  private socket: any;
  speechstr = "";
  mp3FilePath: string = '';

  constructor(){
    this.socket = io("http://localhost:8080"); 
     // Listen for the 'speechGenerated' event from the backend
    this.socket.on('textToSpeech', (data: any) => {
      console.log(data.mp3FilePath)
      this.mp3FilePath = data.mp3FilePath;
    });
  }

  convertToSpeech() {console.log(this.speechstr)
    // Emit the 'textToSpeech' event with the text to convert
    this.socket.emit('textToSpeech', this.speechstr);   
  }
}
