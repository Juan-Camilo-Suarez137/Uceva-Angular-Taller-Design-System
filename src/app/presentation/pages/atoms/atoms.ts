import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BadgeAtom,
  BadgeType,
  BadgeTypeText,
  ButtonAtom,
  ButtonType,
  ContainerAtom,
  IconAtom,
  InputAtom,
  TextAtom,
  Themes,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './atoms.html',
  imports: [
    BadgeAtom,
    ButtonAtom,
    IconAtom,
    ContainerAtom,
    CommonModule,
    InputAtom,
    TextAtom,
  ],
})
export class Atoms {
  badges: { type: BadgeType, typeText: BadgeTypeText}[] = [
    { type: 'primary', typeText: 'text-white' },
    { type: 'secondary', typeText: 'text-white' },
    { type: 'success', typeText: 'text-white' },
    { type: 'danger', typeText: 'text-white' },
    { type: 'warning', typeText: 'text-dark' },
    { type: 'info', typeText: 'text-dark' },
    { type: 'light', typeText: 'text-dark' },
    { type: 'dark', typeText: 'text-white' },
  ];

  buttons: { type: ButtonType, idButton: string}[] = [
    { type: 'primary', idButton: 'idButttonPrimary' },
    { type: 'secondary', idButton: 'idButttonSecondary' },
    { type: 'success', idButton: 'idButttonSuccess' },
    { type: 'danger', idButton: 'idButttonDanger' },
    { type: 'warning', idButton: 'idButttonWarning' },
    { type: 'info', idButton: 'idButttonInfo' },
    { type: 'light', idButton: 'idButttonLight' },
    { type: 'dark', idButton: 'idButttonDark' },
  ];

  icons: { name: string, size: number }[] = [
    { name: 'bootstrap', size: 1 },
    { name: 'apple', size: 2 },
    { name: 'bell', size: 3 },
    { name: 'android', size: 4 },
    { name: 'ban', size: 5 },
  ]

  inputSamples: { label: string; placeholder: string; value: string; theme: Themes; disabled: boolean }[] = [
    { label: 'Vacío', placeholder: 'Buscar...', value: '', theme: 'primary', disabled: false },
    { label: 'Con valor', placeholder: 'Buscar...', value: 'Angular 20', theme: 'primary', disabled: false },
    { label: 'Disabled', placeholder: 'Buscar...', value: 'No editable', theme: 'secondary', disabled: true },
    { label: 'Danger', placeholder: 'Buscar...', value: 'Correo inválido', theme: 'danger', disabled: false },
  ];

  textSamples: { content: string; variant: 'title' | 'subtitle' | 'body' | 'caption'; theme: Themes }[] = [
    { content: 'Título principal', variant: 'title', theme: 'dark' },
    { content: 'Subtítulo del bloque', variant: 'subtitle', theme: 'secondary' },
    { content: 'Este es un texto de cuerpo para describir una sección.', variant: 'body', theme: 'primary' },
    { content: 'Texto de ayuda / caption', variant: 'caption', theme: 'info' },
  ];

  onClick(idButton: string){
    alert(`Click en el Boton ${idButton}`);
  }

}