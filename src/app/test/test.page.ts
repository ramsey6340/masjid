import { Component, OnInit } from '@angular/core';
import {RecitationService} from "../../data/recitation/recitation.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private recitationService: RecitationService) { }

  ngOnInit() {
  }

  uploadFile() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;

// Vérifiez si un fichier a été sélectionné
    if (fileInput.files && fileInput.files.length > 0) {
      // Récupérez le premier fichier sélectionné
      const file = fileInput.files[0];

      // Maintenant, vous pouvez utiliser 'file' en toute sécurité
      console.log('Nom du fichier :', file.name);
      console.log('Taille du fichier :', file.size, 'octets');

      //this.recitationService.loadRecitation("DMfFKyFucSDh0oYYbDzN", file);
    } else {
      // Aucun fichier sélectionné
      console.log('Aucun fichier sélectionné.');
    }
  }

}
