import { Component, Input } from '@angular/core';
import { Themes } from '../../../core/interfaces/core.interface';
import { InputAtom } from '../../atoms/input/input.atom';
import { TextAtom } from '../../atoms/text/text.atom';

/**
 * Campo de formulario del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Combina `TextAtom` como etiqueta y texto de ayuda con `InputAtom`
 * para representar un campo de formulario completo y reutilizable.
 *
 * @example
 * ```html
 * <dsb-form-field-molecule
 *   label="Correo electrónico"
 *   placeholder="nombre@correo.com"
 *   value="juan@uceva.edu.co"
 *   helperText="Usaremos este correo para contactarte."
 * ></dsb-form-field-molecule>
 * ```
 */
@Component({
  selector: 'dsb-form-field-molecule',
  templateUrl: './form-field.molecule.html',
  imports: [InputAtom, TextAtom],
})
export class FormFieldMolecule {
  /** Texto de la etiqueta mostrada sobre el campo */
  @Input() label: string = '';

  /** Texto de ayuda mostrado cuando el campo está vacío */
  @Input() placeholder: string = 'Escribe aquí...';

  /** Valor actual del campo */
  @Input() value: string = '';

  /** Tipo HTML del input */
  @Input() type: 'text' | 'search' | 'email' | 'password' = 'text';

  /** Tema visual compartido entre la etiqueta, el input y el texto de ayuda */
  @Input() theme: Themes = 'primary';

  /** Texto de ayuda o de error mostrado debajo del input */
  @Input() helperText: string = '';

  /** Si el campo está deshabilitado */
  @Input() disabled: boolean = false;
}