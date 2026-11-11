

### 1. Significado de la cabecera User-Agent
La cadena navigator.userAgent identifica el navegador, su motor de renderizado y el sistema operativo.
* Mozilla/5.0: Identificador histórico de Netscape para asegurar su funcionamiento con webs antiguas.
* (Windows NT 10.0; Win64; x64): Sistema operativo (núcleo de Windows 10/11) y arquitectura .
* AppleWebKit/537.36 / Gecko/20100101 / Trident/7.0: Motores de renderizado respectivos de Chrome, Firefox e Internet Explorer 11.
* Chrome/... / Firefox/... / rv:11.0: Nombre y versión real de cada navegador.

### 2. Comportamiento del script en navegadores actuales
Al probar el código en Chrome, Firefox e Internet Explorer 11, los tres producen el mismo resultado y redirigen a NetscapePage.html:

* getBrowserName(): Devuelve "NETSCAPE" en los tres casos porque el estándar  obliga a navigator.appName a devolver ese valor por compatibilidad
* getBrowserVersion(): Devuelve 5 al leer el primer dígito de navigator.appVersion.
* getOS(): Devuelve "unknown" en Windows moderno porque indexOf("windows NT") distingue entre mayúsculas y minúsculas y la cabecera real escribe "Windows NT".
