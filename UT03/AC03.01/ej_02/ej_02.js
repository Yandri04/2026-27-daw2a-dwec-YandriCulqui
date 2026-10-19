      let fechaActual = new Date();
      let fechaAComparar = new Date(2000, 0, 1);
      fechaAComparar.setHours(12, 0, 0, 0);
      let milisigundos = fechaActual.getTime() - fechaAComparar.getTime();
      alert("milisegundos entre ambos valores = " + milisigundos);