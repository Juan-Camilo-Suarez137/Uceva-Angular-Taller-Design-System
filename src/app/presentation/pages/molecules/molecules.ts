import { Component } from '@angular/core';
import { 
  ButtonGroupData, 
  ButtonGroupMolecule, 
  ContainerAtom, 
  FormFieldMolecule,
  NavLink, 
  NavLinkMolecule,
  SearchBoxMolecule,
  Themes,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerAtom,
    ButtonGroupMolecule,
    NavLinkMolecule,
    FormFieldMolecule,
    SearchBoxMolecule,
  ],
})
export class Molecules {
  buttonsGroupData: ButtonGroupData[] = [
    { idButton: 'idButtonPrimary', type: 'primary', text: 'Text Primary' },
    { idButton: 'idButtonSecondary', type: 'secondary', text: 'Text Secondary' },
    { idButton: 'idButtonSuccess', type: 'success', text: 'Text Success' },
    { idButton: 'idButtonDanger', type: 'danger', text: 'Text Danger' },
    { idButton: 'idButtonWarning', type: 'warning', text: 'Text Warning' },
    { idButton: 'idButtonInfo', type: 'info', text: 'Text Info' },
    { idButton: 'idButtonLight', type: 'light', text: 'Text Light' },
    { idButton: 'idButtonDark', type: 'dark', text: 'Text Dark' },
  ];

  navLinks: NavLink[] = [
    { text: 'Link 1', url: '/atoms' },
    { text: 'Link 2', url: '/molecules' },
    { text: 'Link 3', url: '/organisms' },
  ];

  formFieldSamples: {
    label: string;
    placeholder: string;
    value: string;
    theme: Themes;
    helperText: string;
    disabled: boolean;
  }[] = [
    { label: 'Nombre', placeholder: 'Escribe tu nombre', value: '', theme: 'primary', helperText: '', disabled: false },
    { label: 'Correo', placeholder: 'nombre@correo.com', value: 'juan@uceva.edu.co', theme: 'success', helperText: 'Correo verificado.', disabled: false },
    { label: 'Correo inválido', placeholder: 'nombre@correo.com', value: 'juan@', theme: 'danger', helperText: 'El correo ingresado no es válido.', disabled: false },
    { label: 'Campo deshabilitado', placeholder: 'No editable', value: 'Solo lectura', theme: 'secondary', helperText: '', disabled: true },
  ];

  searchBoxSamples: { placeholder: string; value: string; theme: Themes; icon: string; buttonText: string }[] = [
    { placeholder: 'Buscar componente...', value: '', theme: 'primary', icon: 'search', buttonText: 'Buscar' },
    { placeholder: 'Buscar usuario...', value: 'Juanes', theme: 'info', icon: 'person', buttonText: 'Ir' },
  ];

  onClick(idButton: string){
    alert(`Click en el Boton de Grupo ${idButton}`);
  }

  onSearch(term: string) {
    alert(`Buscando: "${term}"`);
  }
}
