import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";
import logo from "../public/vue3-transitions-logo.png";

const theme = create({
  base: "light",
  brandImage: logo,
  brandTitle: "Vue 3 Transitions"
});

addons.setConfig({
  theme,
});
