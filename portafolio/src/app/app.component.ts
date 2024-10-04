import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi Portafolio en Angular';  // Variable de ejemplo
  personalInfo = {
    name: 'Juan Pérez',
    title: 'Desarrollador de Software',
    email: 'juan.perez@example.com',
    phone: '+1234567890',
    profilePicture: 'assets/profile-picture.jpg'
  };

  experience = [
    {
      jobTitle: 'Desarrollador Frontend',
      company: 'Empresa XYZ',
      duration: 'Enero 2022 - Presente',
      description: 'Desarrollé aplicaciones web usando Angular y TypeScript.'
    },
    {
      jobTitle: 'Desarrollador Backend',
      company: 'Empresa ABC',
      duration: 'Julio 2020 - Diciembre 2021',
      description: 'Construí APIs RESTful utilizando Node.js y Express.'
    }
  ];

  education = [
    {
      degree: 'Licenciatura en Ingeniería de Sistemas',
      institution: 'Universidad de Ejemplo',
      duration: '2016 - 2020'
    }
  ];
}


