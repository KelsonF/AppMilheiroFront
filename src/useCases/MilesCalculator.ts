function MilesCalculatorWithDiscount(
  milesQuantity: number,
  discountValue: number,
  milesValue: number
) {
  let paydValue: number = 0;

  paydValue = (milesValue * discountValue) / 100;

  return milesQuantity / paydValue;
}

export function MilesCalculator(
  milesPrice: number,
  discountValue: number,
  milesBonus: number,
  quantity: number
): number {
  let effectiveMilePrice: number = 0;

  if (milesBonus > 0) {
    effectiveMilePrice = MilesCalculatorWithDiscount(
      quantity,
      discountValue,
      milesPrice
    );
  }

  effectiveMilePrice = (quantity + (quantity * milesBonus) / 100) / milesPrice;

  return effectiveMilePrice;
}
