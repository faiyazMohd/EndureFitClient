import React, { useEffect, useState } from "react";

const Nutrition = ({ diet }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (diet.totalNutrients) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [diet]);

  return (
    <div class="p-1 border-2 border-blue-900 font-sans w-[21rem] text-[#1a2b4b] rounded-br-3xl rounded-tl-3xl">
      <div class="text-4xl font-bold leading-none text-[#1a2b4b]">
        Nutrition Facts
      </div>
      <div class="flex justify-between font-bold border-b-8 border-blue-900  mt-4">
        <div>Serving size</div>
        <div>{Math.floor(diet.totalWeight)}g</div>
      </div>
      <div class="flex justify-between items-end font-bold">
        <div>
          <div class="font-bold ">Amount per serving</div>
          <div class="text-3xl">Calories</div>
        </div>
        <div className="flex justify-center items-end">
          <div class="text-4xl">{Math.floor(diet.calories)} </div>
          <span className="text-sm">kcal</span>
        </div>
      </div>
      <div class="border-t-4 border-blue-900 text-sm pb-1">
        <div class="text-right font-bold pt-1 pb-1">% Daily value*</div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            <span class="font-bold">Total Fat</span>{" "}
            {show ? Math.floor(diet.totalNutrients.FAT.quantity) : "0"}
            {show ? diet.totalNutrients.FAT.unit : "g"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.FAT.quantity) : "0"}
            {show ? diet.totalDaily.FAT.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between ml-4">
          <div>
            Saturated Fat{" "}
            {show ? Math.floor(diet.totalNutrients.FASAT.quantity) : "0"}
            {show ? diet.totalNutrients.FASAT.unit : "g"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.FASAT.quantity) : "0"}
            {show ? diet.totalDaily.FASAT.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div>
          <span class="italic ml-4">Trans Fat</span>{" "}
          {show ? Math.floor(diet.totalNutrients.FATRN.quantity) : ""}
          {show ? diet.totalNutrients.FATRN.unit : ""}
        </div>
        <div>
          <span class="itali ml-4">Monounsaturated Fat</span>{" "}
          {show ? Math.floor(diet.totalNutrients.FAMS.quantity) : ""}
          {show ? diet.totalNutrients.FAMS.unit : ""}
        </div>
        <div>
          <span class="italic ml-4">Polyunsaturated Fat</span>{" "}
          {show ? Math.floor(diet.totalNutrients.FAPU.quantity) : ""}
          {show ? diet.totalNutrients.FAPU.unit : ""}
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            <span class="font-bold">Cholesterol</span>{" "}
            {show ? Math.floor(diet.totalNutrients.CHOLE.quantity) : "0"}
            {show ? diet.totalNutrients.CHOLE.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.CHOLE.quantity) : "0"}
            {show ? diet.totalDaily.CHOLE.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            <span class="font-bold">Sodium</span>{" "}
            {show ? Math.floor(diet.totalNutrients.NA.quantity) : "0"}
            {show ? diet.totalNutrients.NA.unit : "g"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.NA.quantity) : "0"}
            {show ? diet.totalDaily.NA.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            <span class="font-bold">Total Carbohydrate</span>{" "}
            {show ? Math.floor(diet.totalNutrients.CHOCDF.quantity) : "0"}
            {show ? diet.totalNutrients.CHOCDF.unit : "g"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.CHOCDF.quantity) : "0"}
            {show ? diet.totalDaily.CHOCDF.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div class="pl-4">
            Fiber {show ? Math.floor(diet.totalNutrients.FIBTG.quantity) : "0"}
            {show ? diet.totalNutrients.FIBTG.unit : "g"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.FIBTG.quantity) : "0"}
            {show ? diet.totalDaily.FIBTG.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />

        <div class="pl-4">
          Total Sugar{" "}
          {show ? Math.floor(diet.totalNutrients.SUGAR.quantity) : "0"}
          {show ? diet.totalNutrients.SUGAR.unit : "g"}
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            <span class="font-bold">Protein</span>{" "}
            {show ? Math.floor(diet.totalNutrients.PROCNT.quantity) : "0"}
            {show ? diet.totalNutrients.PROCNT.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.PROCNT.quantity) : "0"}
            {show ? diet.totalDaily.PROCNT.unit : "%"}
          </div>
        </div>
      </div>
      <div class="border-t-8 border-blue-900 pt-1 text-sm">
        <div class="flex justify-between">
          <div>
            Calcium {show ? Math.floor(diet.totalNutrients.CA.quantity) : "0"}
            {show ? diet.totalNutrients.CA.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.CA.quantity) : "0"}
            {show ? diet.totalDaily.CA.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Magnesium {show ? Math.floor(diet.totalNutrients.MG.quantity) : "0"}
            {show ? diet.totalNutrients.MG.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.MG.quantity) : "0"}
            {show ? diet.totalDaily.MG.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Iron {show ? Math.floor(diet.totalNutrients.FE.quantity) : "0"}
            {show ? diet.totalNutrients.FE.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.FE.quantity) : "0"}
            {show ? diet.totalDaily.FE.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Potassium {show ? Math.floor(diet.totalNutrients.K.quantity) : "0"}
            {show ? diet.totalNutrients.K.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.K.quantity) : "0"}
            {show ? diet.totalDaily.K.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Zinc {show ? Math.floor(diet.totalNutrients.ZN.quantity) : "0"}
            {show ? diet.totalNutrients.ZN.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.ZN.quantity) : "0"}
            {show ? diet.totalDaily.ZN.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Phosphorus {show ? Math.floor(diet.totalNutrients.P.quantity) : "0"}
            {show ? diet.totalNutrients.P.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.P.quantity) : "0"}
            {show ? diet.totalDaily.P.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Vitamin A{" "}
            {show ? Math.floor(diet.totalNutrients.VITA_RAE.quantity) : "0"}
            {show ? diet.totalNutrients.VITA_RAE.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.VITA_RAE.quantity) : "0"}
            {show ? diet.totalDaily.VITA_RAE.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Vitamin B12{" "}
            {show ? Math.floor(diet.totalNutrients.VITB12.quantity) : "0"}
            {show ? diet.totalNutrients.VITB12.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.VITB12.quantity) : "0"}
            {show ? diet.totalDaily.VITB12.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Vitamin C{" "}
            {show ? Math.floor(diet.totalNutrients.VITC.quantity) : "0"}
            {show ? diet.totalNutrients.VITC.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.VITC.quantity) : "0"}
            {show ? diet.totalDaily.VITC.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Vitamin D{" "}
            {show ? Math.floor(diet.totalNutrients.VITD.quantity) : "0"}
            {show ? diet.totalNutrients.VITD.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.VITD.quantity) : "0"}
            {show ? diet.totalDaily.VITD.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Vitamin E{" "}
            {show ? Math.floor(diet.totalNutrients.TOCPHA.quantity) : "0"}
            {show ? diet.totalNutrients.TOCPHA.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.TOCPHA.quantity) : "0"}
            {show ? diet.totalDaily.TOCPHA.unit : "%"}
          </div>
        </div>
        <hr class="border-gray-500" />
        <div class="flex justify-between">
          <div>
            Vitamin K{" "}
            {show ? Math.floor(diet.totalNutrients.VITK1.quantity) : "0"}
            {show ? diet.totalNutrients.VITK1.unit : "mg"}
          </div>
          <div class="font-bold">
            {show ? Math.floor(diet.totalDaily.VITK1.quantity) : "0"}
            {show ? diet.totalDaily.VITK1.unit : "%"}
          </div>
        </div>
        <div class="border-t-4 border-blue-900 flex leading-none text-xs pt-2 pb-1">
          <div class="pr-1">*</div>
          <div class="font-bold">
            The % Daily Value (DV) tells you how much a nutrient in a serving of
            food contributes to a daily diet. 2,000 calories a day is used for
            general nutrition advice.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
