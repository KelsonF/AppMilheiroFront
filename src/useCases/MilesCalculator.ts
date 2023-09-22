interface MilesCalculatorProps {
   milesPrice: number
   discountValue: number
   milesBonus: number
   quantity: number
}
function MilesCalculatorWithDiscount(milesQuantity: number, discountValue: number, milesValue: number){
   let paydValue: number = 0;
   
   paydValue = milesValue * discountValue/100;

   return milesQuantity / paydValue;
}

export function MilesCalculator({milesPrice, discountValue, milesBonus, quantity}: MilesCalculatorProps): number {
   let effectiveMilePrice: number = 0;

   if (discountValue > 0 && milesBonus == 0) {
      effectiveMilePrice = MilesCalculatorWithDiscount(quantity, discountValue, milesPrice);
   }

   effectiveMilePrice = (quantity + (quantity * milesBonus/100) )/ milesPrice;

   return effectiveMilePrice;
}