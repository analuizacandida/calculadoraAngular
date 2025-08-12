import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemLista';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-compras',
  imports: [
    FormsModule,
    CommonModule

  ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.css'
})
export class ListaComprasComponent {

item: string = '';
lista: ItemLista[] = [];

adcionarItem() {
 let itemLista = new ItemLista();
 itemLista.nome = this.item;
 itemLista.id = this.lista.length + 1; // Atribui um ID baseado no tamanho atual da lista

 this.lista.push(itemLista); // Adiciona o item à lista
  this.item = ''; // -> Limpa o campo de entrada após adicionar o item

  console.table(this.lista); // -> Exibe a lista no console para depuração
}
  riscarItem(itemLista: ItemLista) {	
      itemLista.comprado = !itemLista.comprado; // -> Alterna o estado de comprado do item
     
    }
 limparLista() {
    this.lista = []; // -> Limpa a lista de compras
    console.table(this.lista); // -> Exibe a lista vazia no console para depuração
  }
}
