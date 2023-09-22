interface MilesCalculatorProps {
   milesValue: number
   discountValue: number
   bonus: number
   quantity: number
}
function MilesCalculatorWithDiscount(milesQuantity: number, discountValue: number, milesValue: number){
   let paydValue: number = 0;
   
   paydValue = milesValue * discountValue/100;

   return milesQuantity / paydValue;
}

export function MilesCalculator({milesValue, discountValue, bonus, quantity}: MilesCalculatorProps){
   let effectiveMilePrice: number = 0;

   if (discountValue > 0 && bonus == 0) {
      effectiveMilePrice = MilesCalculatorWithDiscount(quantity, discountValue, milesValue);
   }

   effectiveMilePrice = (quantity + (quantity * bonus/100) )/ milesValue 

   return effectiveMilePrice;
}