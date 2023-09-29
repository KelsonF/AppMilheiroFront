export function MilesCalculatorWithBonus(
  milesQuantity: number,
  milesBonus: number,
  milesValue: number
) {
  let milesQuantityWithBonus: number = 0;

  milesQuantityWithBonus = milesQuantity + (milesQuantity * milesBonus/100);

  return milesQuantityWithBonus/milesValue;
}

export function MilesCalculatorWithDiscount(
  milesPrice: number,
  discountValue: number,
  milesBonus: number,
  quantity: number
): number {
  let effectiveMilePrice: number = 0;

  effectiveMilePrice = (quantity + (quantity * milesBonus) / 100) / milesPrice;

  return effectiveMilePrice;
}
