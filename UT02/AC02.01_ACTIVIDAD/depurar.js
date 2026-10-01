/*
 * Copyright (C) Laura 2023
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * Autor=Laura Lozano
 * Fecha=1/09/2023
 * Licencia=GPLv3
 * Version=1.0
 * Descripcion= Archivo javascript para aprender a depurar y ámbitos de variables
 */

//Variable global para hacer una suma global de valores
let sumaGlobal=0;
let i;

/*
 * Función que suma un argumento a una suma local y a una suma global
 */
function sumaLocalGlobal(numero){
    //Variable local con la suma
    let sumaLocal=0;
    sumaLocal+=cuadrado(numero);
    sumaGlobal+=numero;
    //No necesito devolver nada, así que no hay return
}

/*
 * Función que calcula el cuadrado del argumento que le pasen
 */
function cuadrado(numero){
    //Variable local con el producto
    let producto=numero*numero;
    return producto;

}
for (i=1;i<10;i++){
    sumaLocalGlobal(i);   
   
}





