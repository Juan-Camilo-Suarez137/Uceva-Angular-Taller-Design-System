import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Themes } from '../../../core/interfaces/core.interface';
import { ButtonAtom } from '../../atoms/button/button.atom';
import { IconAtom } from '../../atoms/icon/icon.atom';
import { InputAtom } from '../../atoms/input/input.atom';

/**
 * Barra de búsqueda del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Combina `IconAtom`, `InputAtom` y `ButtonAtom` para representar
 * una barra de búsqueda reutilizable que emite un evento al confirmar
 * la búsqueda.
 *
 * @example
 * ```html
 * <dsb-search-box-molecule
 *   placeholder="Buscar componente..."
 *   value="Badge"
 *   icon="search"
 *   buttonText="Buscar"
 * ></dsb-search-box-molecule>
 * ```
 */
@Component({
  selector: 'dsb-search-box-molecule',
  templateUrl: './search-box.molecule.html',
  imports: [ButtonAtom, IconAtom, InputAtom],
})
export class SearchBoxMolecule {
  /** Texto de ayuda mostrado cuando el campo está vacío */
  @Input() placeholder: string = 'Buscar...';

  /** Valor actual del campo de búsqueda */
  @Input() value: string = '';

  /** Tema visual compartido entre el input y el botón */
  @Input() theme: Themes = 'primary';

  /** Nombre del icono de Bootstrap Icons (sin el prefijo `bi-`) */
  @Input() icon: string = 'search';

  /** Texto visible del botón de búsqueda */
  @Input() buttonText: string = 'Buscar';

  /** Si el campo y el botón están deshabilitados */
  @Input() disabled: boolean = false;

  /** Evento emitido al hacer click en el botón de búsqueda. */
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  /** Emite el evento `search` con el valor actual del campo. */
  onSearch(): void {
    this.search.emit(this.value);
  }
}