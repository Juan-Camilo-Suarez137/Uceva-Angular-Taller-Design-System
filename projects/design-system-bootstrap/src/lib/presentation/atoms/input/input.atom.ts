import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputType } from '../../../core/interfaces/core.interface';

/**
 * Componente visual tipo input del Design System.
 *
 * @description
 * Permite renderizar un campo de texto reutilizable con soporte para
 * placeholder, valor inicial, tema visual y estado deshabilitado.
 */
@Component({
  selector: 'dsb-input-atom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.atom.html',
})
export class InputAtom {
  /** Texto de ayuda mostrado cuando el campo está vacío */
  @Input() placeholder: string = 'Buscar...';
  /** Valor actual del input */
  @Input() value: string = '';
  /** Tipo HTML del input */
  @Input() type: 'text' | 'search' | 'email' | 'password' = 'text';
  /** Tema visual del input */
  @Input() theme: InputType = 'primary';
  /** Si el input está deshabilitado */
  @Input() disabled: boolean = false;
}