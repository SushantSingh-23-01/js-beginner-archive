function solveQuadratic(a, b, c) {
  // If equation is not quadratic
  if (a === 0) {
    if (b === 0) {
      return c === 0 ? [Infinity] : [];
    } else {
      return [-c / b]
    }
  }
  
  const discriminant = b**2 - 4*a*c;
  
  // Imaginary roots
  if (discriminant < 0) {
    return [];
  }
  // Equal roots (comparing with small epsilon to account for floating point errors)
  if (Math.abs(discriminant) <= 1e-14) {
    return [-b / (2 * a)];
  }

  const sqrtDisc = Math.sqrt(discriminant);
  const sol1 = (-b + sqrtDisc) / (2 * a);
  const sol2 = (-b - sqrtDisc) / (2 * a);

  return [sol1, sol2];  
}
console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, -1, -2));
console.log(solveQuadratic(1, -1, 0));
