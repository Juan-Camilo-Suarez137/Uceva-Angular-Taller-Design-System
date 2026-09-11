import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextType } from '../../../core/interfaces/core.interface';

@Component({
  selector: 'dsb-text-atom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.atom.html',
})
export class TextAtom {
  /** Contenido textual a mostrar */
  @Input() content: string = '';
  /** Variante tipográfica */
  @Input() variant: 'title' | 'subtitle' | 'body' | 'caption' = 'body';
  /** Color/tema del texto */
  @Input() theme: TextType = 'dark';

  get textClasses(): string {
    return `text-${this.theme}`;
  }
}