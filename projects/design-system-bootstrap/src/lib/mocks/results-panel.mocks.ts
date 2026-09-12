import { ResultsPanelConfig } from '../core/interfaces/core.interface';

export const MOCK_RESULTS_PANEL_CONFIG: ResultsPanelConfig = {
  title: 'Préstamo de equipos',
  icon: 'laptop',
  items: [
    { title: 'Laptop Lenovo', subtitle: 'Portátil de uso académico', icon: 'laptop', badgeText: 'Disponible', badgeType: 'success' },
    { title: 'Mouse inalámbrico', subtitle: 'Accesorio de computación', icon: 'mouse', badgeText: 'Disponible', badgeType: 'success' },
    { title: 'Proyector', subtitle: 'Uso en aulas y laboratorios', icon: 'projector', badgeText: 'En préstamo', badgeType: 'warning' },
  ],
};