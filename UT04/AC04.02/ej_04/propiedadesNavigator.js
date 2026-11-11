/* 
 * Copyright (C) 2023 laurl
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
 */


//userAgent (agente de usuario o cliente) es la cabecera  que incluye el navegador en la petición http para su identificación
alert("Agente de usuario: " + navigator.userAgent);
//appCodeName es el nombre interno del navegador
alert("Código de Navegador: " + navigator.appCodeName);
//appName es el nombre oficial del navegador
alert("Navegador: " + navigator.appName);
//appVersion es la versión del navegador (del motor de renderizado)
alert("Versión: " + navigator.appVersion);
if (navigator.javaEnabled()) {
    alert("El navegador Sí está preparado para soportar Java");
} else {
    alert("El navegador NO está preparado para soportar Java");
}