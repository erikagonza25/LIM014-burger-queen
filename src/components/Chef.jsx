import React from "react";
const Chef = () => {
  return (
    <section>
      <h1>Cliente</h1>
      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1 </td>
            <td>cafe</td>
            <td> $5</td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
    </section>
  );
};

export default Chef;
