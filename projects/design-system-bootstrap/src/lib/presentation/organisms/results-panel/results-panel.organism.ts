import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResultsPanelConfig } from '../../../core/interfaces/core.interface';
import { IconAtom } from '../../atoms/icon/icon.atom';
import { TextAtom } from '../../atoms/text/text.atom';
import { BadgeAtom } from '../../atoms/badge/badge.atom';
import { SearchBoxMolecule } from '../../molecules/search-box/search-box.molecule';

/**
 * Panel de resultados con búsqueda del Design System.
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design.
 * Orquesta una `SearchBoxMolecule` y una lista de ítems
 * (icono + texto + badge) para representar un panel
 * completo de búsqueda y resultados.
 *
 * Integra:
 * - `IconAtom` para el icono del encabezado y de cada ítem
 * - `TextAtom` para el título/subtítulo de cada ítem
 * - `BadgeAtom` para el estado de cada ítem
 * - `SearchBoxMolecule` para la búsqueda
 *
 * @example
 * ```html
 * <dsb-results-panel-organism
 *   [config]="resultsPanelConfig"
 *   (search)="onSearch($event)">
 * </dsb-results-panel-organism>
 * ```
 */
@Component({
  selector: 'dsb-results-panel-organism',
  templateUrl: './results-panel.organism.html',
  imports: [IconAtom, TextAtom, BadgeAtom, SearchBoxMolecule],
})
export class ResultsPanelOrganism {
  /**
   * Configuración del panel: título, icono y lista de ítems.
   * Cuando es `null`, el componente no renderiza contenido.
   */
  @Input() config: ResultsPanelConfig | null = null;

  /** Texto de ayuda del buscador */
  @Input() placeholder: string = 'Buscar...';

  /** Evento emitido cuando el usuario busca algo */
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  /** Reenvía el término de búsqueda hacia el componente padre */
  onSearch(term: string): void {
    this.search.emit(term);
  }
}