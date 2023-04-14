import React, { useEffect, useState } from 'react'

const Nutrition = ({diet,totalNutrients}) => {
    const [show, setShow] = useState(false)
    console.log("inside nutrition"+diet);
    console.log("calories is "+diet.calories);
    // console.log("totalNutrients is "+diet.totalNutrients);
    // console.log("totalNutrients is "+diet.totalNutrients.FAT.quantity);
    
    useEffect(() => {
        if (diet.totalNutrients) {
            console.log("totalNutrients is "+diet.totalNutrients.FAT.quantity);
            setShow(true)
        } else {
            console.log("i am else");
            setShow(false)
        }
    
      return () => {
        
      }
    }, [diet])
    
  return (
    // <!-- component -->
// <!-- https://www.fda.gov/food/food-labeling-nutrition/changes-nutrition-facts-label -->
<div className="flex justify-center items-center">

<div class="p-1 border-2 border-blue-900 font-sans w-80 text-[#1a2b4b]">
    <div class="text-4xl font-bold leading-none text-[#1a2b4b]">Nutrition Facts</div>
    <div class="flex justify-between font-bold border-b-8 border-blue-900  mt-4">
        <div>Serving size</div><div>{Math.floor(diet.totalWeight)}g</div>
    </div>
    <div class="flex justify-between items-end font-bold">
        <div>
            <div class="font-bold ">Amount per serving</div>
            <div class="text-3xl">Calories</div>
        </div>
        <div className="flex justify-center items-end">

        <div class="text-4xl">{Math.floor(diet.calories)}{" "}</div>
        <span className='text-sm'>kcal</span>
        </div>
    </div>
    <div class="border-t-4 border-blue-900 text-sm pb-1">
        <div class="text-right font-bold pt-1 pb-1">% Daily value*</div>
        <hr class="border-gray-500"/>
        <div class="flex justify-between">
            <div>
                <span class="font-bold">Total Fat</span> {show?Math.floor(diet.totalNutrients.FAT.quantity):""}{show?diet.totalNutrients.FAT.unit:""}
            </div>
            <div class="font-bold">{show?Math.floor(diet.totalDaily.FAT.quantity):""}{show?diet.totalDaily.FAT.unit:""}</div>
        </div>
        <hr class="border-gray-500"/>
        <div class="flex justify-between">
            <div>Saturated Fat 1g</div>
            <div class="font-bold">5%</div>
        </div>
        <hr class="border-gray-500"/>
        <div>
            <span class="italic">Trans Fat</span> 8g
        </div>
        <hr class="border-gray-500"/>
        <div class="flex justify-between">
            <div>
                <span class="font-bold">Cholesterol</span> 0mg
            </div>
            <div class="font-bold">0%</div>
        </div>
        <hr class="border-gray-500"/>
        <div class="flex justify-between">
            <div>
                <span class="font-bold">Sodium</span> 160mg
            </div>
            <div class="font-bold">7%</div>
        </div>
        <hr class="border-gray-500"/>
        <div class="flex justify-between">
            <div>
                <span class="font-bold">Total Carbohydrate</span> 37g
            </div>
            <div class="font-bold">13%</div>
        </div>
        <hr class="border-gray-500"/>
        <div class="flex justify-between">
            <div class="pl-4">
                Dietary Fiber 4g
            </div>
            <div class="font-bold">14%</div>
        </div>
        <hr class="border-gray-500"/>
        <div class="pl-4">
            Total Sugar 12g
            <div class="pl-4">
                <hr class="border-gray-500"/>
                <div class="flex justify-between">
                    <div>Includes 10g Added Sugars</div>
                    <div class="font-bold">20%</div>
                </div>
            </div>
        </div>
        <hr class="border-gray-500"/>
        <div>
            <span class="font-bold">Protein</span> 3g
        </div>
    </div>
    <div class="border-t-8 border-blue-900 pt-1 text-sm">
        <div class="flex justify-between">
            <div>Vitamin D 2mcg</div>
            <div>10%</div>
        </div>
        <hr class="border-gray-500"/>
        <div class="flex justify-between">
            <div>Calcium 260mg</div>
            <div>20%</div>
        </div>
        <hr class="border-gray-500"/>
        <div class="flex justify-between">
            <div>Iron 8mg</div>
            <div>45%</div>
        </div>
        <hr class="border-gray-500"/>
        <div class="flex justify-between">
            <div>Potassium 240mg</div>
            <div>6%</div>
        </div>
        <div class="border-t-4 border-blue-900 flex leading-none text-xs pt-2 pb-1">
            <div class="pr-1">*</div>
            <div>The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</div>
        </div>
    </div>
</div>
</div>
  )
}

export default Nutrition
