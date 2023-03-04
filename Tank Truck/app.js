/**
 * @param {number} d - Cylinder diameter in meters.
 * @param {number} vt - Total volume of cylinder.
 * @param {number} L - Cylinder length in meters.
 * @param {number} h - Depth in meters.
 * @returns {number} Volume in liters.
 */
function tankvol(h, d, vt) {
  let R = d / 2,
    L = vt / (Math.PI * (d / 2) ** 2),
    sA = R ** 2 * Math.acos((R - h) / R),
    sB = R - h,
    sC = Math.sqrt(2 * R * h - h ** 2);

  return Math.floor(L * (sA - sB * sC));
}
