import { RecipeType } from "./RecipeType";
import { ListOfRecipes } from "./RecipeType";

import {
  sugar,
  flour,
  redFruits,
  chocolate,
  egg,
  butter,
  almondPowder,
  pear,
  cream,
  salad,
  cucumber,
  feta,
  pasta,
  guanciale,
  permeggiano,
  pepper
} from "../Ingredients/IngredientData";

import {
  stepsFondantChocolat,
  stepsPavlova,
  stepsTarteAuxPoires,
  stepsCarbonara
} from "../Steps/StepData";

import {
  appetizer,
  autumn,
  dessert,
  summer,
  vegan,
  winter,
  italian,
  spring
} from "../Tags/TagData";

const pavlova: RecipeType = {
  nom: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  etapes: stepsPavlova,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: redFruits, quantity: 100, unit: "g" },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [summer, dessert],
};

const fondantChocolat: RecipeType = {
  nom: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL:
    "https://www.guydemarle.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0ZvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--333bff76e254e1934153f809f2d9cc2b5967da52/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VWTI5dFltbHVaVjl2Y0hScGIyNXpld2c2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpvR1JWUTZER2R5WVhacGRIbEpJZ3REWlc1MFpYSUdPd2RVT2dsamNtOXdTU0lRTmpBd2VEWXdNQ3N3S3pBR093ZFUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--929a1958a8630156464b089800ca739f1b4570de/fondant-au-chocolat.jpg",
  ingredients: [chocolate, egg, flour, butter, sugar],
  etapes: stepsFondantChocolat,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 200, unit: "g" },
    { ingredient: flour, quantity: 50, unit: "g" },
    { ingredient: chocolate, quantity: 200, unit: "g" },
    { ingredient: butter, quantity: 150, unit: "g" },
  ],
  tags: [dessert, winter],
};

const pearPie: RecipeType = {
  nom: "Tarte amandine aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear],
  etapes: stepsTarteAuxPoires,
  ingredientsWithQuantity: [
    { ingredient: pear, quantity: 2 },
    { ingredient: almondPowder, quantity: 50, unit: "g" },
    { ingredient: sugar, quantity: 150, unit: "g" },
    { ingredient: egg, quantity: 2 },
  ],
  tags: [dessert, autumn],
};

const waldorfSalad: RecipeType = {
  nom: "Salade Waldorf",
  description: "La salade greque est parfaite pour l'été",
  imageURL:
    "https://assets.afcdn.com/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp",
  ingredients: [salad, cucumber, feta],
  ingredientsWithQuantity: [
    { ingredient: salad, quantity: 1 },
    {
      ingredient: cucumber,
      quantity: 1,
    },
    { ingredient: feta, quantity: 150, unit: "g" },
  ],
  tags: [appetizer, summer, vegan],
};

const carbonara: RecipeType = {
  nom: "Pâtes carbonara",
  description: "Carbonara est un plat de pâtes italien",
  imageURL:
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg",
  etapes: stepsCarbonara,
  ingredients: [pasta, guanciale, egg, permeggiano, pepper],
  ingredientsWithQuantity: [
    { ingredient: pasta, quantity: 350 },
    {
      ingredient: guanciale,
      quantity: 150,
    },
    { ingredient: egg, quantity: 3, unit: "g" },
    { ingredient: permeggiano, quantity: 50, unit: "g" },
    { ingredient: pepper, quantity: 1, unit: "g" },
  ],
  tags: [italian],
};

export const allRecipes: ListOfRecipes = [
  pavlova,
  fondantChocolat,
  pearPie,
  waldorfSalad,
  carbonara
];

