 let base = parseFloat(prompt("Introduce la base del del triangulo"));
      let altura = parseFloat(prompt("Introduce la altura del del triangulo"));

      if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Altura o base incorrecta porfavor volver a ingresar");
        bandera = false;
      } else {
        let area = (base * altura) / 2;
        alert(
          "La area de un triangulo con una base de " +
            base +
            " y altura de " +
            altura +
            " es : " +
            area,
        );
      }