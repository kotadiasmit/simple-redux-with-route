import { Chance } from "chance";

const chance = Chance();

export const fakeUser = () => {
  return chance.name({ middle: true });
};
