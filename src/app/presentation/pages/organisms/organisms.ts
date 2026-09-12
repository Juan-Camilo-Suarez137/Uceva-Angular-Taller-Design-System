import { Component } from '@angular/core';
import { ContainerAtom, NavbarConfig, NavbarOrganism, ResultsPanelOrganism, ResultsPanelConfig} from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [NavbarOrganism,
            ContainerAtom,
            ResultsPanelOrganism
          ],
})
export class Organisms {
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ]
  }

  resultsPanelConfig: ResultsPanelConfig = {
    title: 'Préstamo de equipos',
    icon: 'laptop',
    items: [
      { title: 'Laptop Lenovo', subtitle: 'Portátil de uso académico', icon: 'laptop', badgeText: 'Disponible', badgeType: 'success' },
      { title: 'Mouse inalámbrico', subtitle: 'Accesorio de computación', icon: 'mouse', badgeText: 'Disponible', badgeType: 'success' },
      { title: 'Proyector', subtitle: 'Uso en aulas y laboratorios', icon: 'projector', badgeText: 'En préstamo', badgeType: 'warning' },
    ],
  };

  onSearch(term: string): void {
    alert(`Búsqueda: ${term}`);
  }
}