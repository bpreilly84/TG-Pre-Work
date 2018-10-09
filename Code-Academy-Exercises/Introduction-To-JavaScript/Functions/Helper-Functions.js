function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns)  * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

/* learned about using helper functions */
