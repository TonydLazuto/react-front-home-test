import {
  butter,
  chocolate,
  cream,
  egg,
  flour,
  redFruits,
  sugar,
  pasta,
  guanciale,
  permeggiano,
  pepper
} from "../Ingredients/IngredientData";

import { StepType as StepType } from "./StepType";

export const stepsPavlova: StepType[] = [
  {
    description: "Préparer la meringue française.",
    ingredients: [
      { ingredient: sugar, quantity: 100 },
      { ingredient: egg, quantity: 3 },
    ],
    order: 1,
  },
  {
    description: "Préparer la chantilly.",
    ingredients: [
      { ingredient: sugar, quantity: 50, unit: "g" },
      { ingredient: cream, quantity: 20, unit: "cl" },
    ],

    order: 2,
  },
  {
    description: "Recouvrir la meringue de chantilly.",
    order: 3,
  },
  {
    description: "Disposer les fruits rouges sur le dessus.",
    order: 4,
    ingredients: [{ ingredient: redFruits, quantity: 100, unit: "g" }],
  },
];

export const stepsFondantChocolat: StepType[] = [
  {
    description: "Faire fondre le chocolat avec le beurre au bain-marie.",
    order: 1,
    ingredients: [
      { ingredient: chocolate, quantity: 200, unit: "g" },
      { ingredient: butter, quantity: 150, unit: "g" },
    ],
  },
  {
    description:
      "Pendant ce temps,séparer les jaunes des blancs d'oeufs. Monter ces derniers en neige ferme.",
    order: 2,
    ingredients: [{ ingredient: egg, quantity: 3 }],
  },
  {
    description: "Ajouter les jaunes d'oeufs au mélange beurre chocolat.",
    order: 3,
  },
  {
    description: "Incorporer le sucre et la farine puis les blancs d'oeufs.",
    order: 4,
    ingredients: [
      { ingredient: flour, quantity: 50, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Verser la préparation dans un moule beurré et fariné. Enfourner 15mn à 180°.",
    order: 5,
  },
];

export const stepsTarteAuxPoires: StepType[] = [
  {
    description: "Préparer la pâte sablée.",
    order: 1,
    ingredients: [
      { ingredient: butter, quantity: 200, unit: "g" },
      { ingredient: flour, quantity: 150, unit: "g" },
      { ingredient: egg, quantity: 1 },
    ],
  },
  {
    description:
      "Pour la garniture, travailler le beurre et le sucre au batteur électrique.",
    order: 3,
    ingredients: [
      { ingredient: butter, quantity: 100, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Incorporer les oeufs puis ajouter les amandes moulues et la farine",
    order: 4,
  },
  {
    description:
      "Verser la préparation sur le fond de la pâte. Disposer les poires. Enfourner 50 mn à 180°",
    order: 5,
  },
];


export const stepsCarbonara: StepType[] = [
  {
    description: "Faites cuire les pâtes dans une grande casserole d'eau salée selon les instructions sur l'emballage, jusqu'à ce qu'elles soient al dente. Réservez une tasse d'eau de cuisson avant d'égoutter les pâtes",
    order: 1,
    ingredients: [
      { ingredient: pasta, quantity: 350 },
    ],
  },
  {
    description:
      "Pendant ce temps, dans une grande poêle, faites revenir les lardons de guanciale à feu moyen jusqu'à ce qu'ils soient croustillants et dorés. Retirez-les de la poêle avec une écumoire et placez-les sur du papier absorbant pour éliminer l'excès de graisse.",
    order: 2,
    ingredients: [
      {
        ingredient: guanciale,
        quantity: 150,
      },
    ],
  },
  {
    description:
      "Dans un bol moyen, battez les œufs avec le parmesan râpé et une généreuse pincée de poivre noir fraîchement moulu.",
    ingredients: [
      { ingredient: egg, quantity: 3, unit: "g" },
      { ingredient: permeggiano, quantity: 50, unit: "g" },
      { ingredient: pepper, quantity: 1, unit: "g" }
    ],
    order: 3,
  },
  {
    description:
      "Une fois les pâtes cuites et égouttées, remettez-les dans la casserole chaude. Ajoutez les lardons de guanciale croustillants et mélangez pour les répartir uniformément.",
    order: 4,
  },
  {
    description:
      "Versez lentement le mélange d'œufs et de fromage sur les pâtes chaudes, en remuant vigoureusement pour enrober chaque brin de pâte. Si la sauce semble trop épaisse, ajoutez un peu d'eau de cuisson réservée pour l'allonger légèrement.",
    order: 5,
  },
  {
    description:
      "Servez immédiatement dans des assiettes chaudes, en garnissant chaque portion d'un peu plus de parmesan râpé et de poivre noir fraîchement moulu, selon les goûts.",
    order: 6,
  },
];
