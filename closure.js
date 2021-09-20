const init = () => {
  const hasShadow = true;
  const number = 90;

  const cekShadow = () => {
    console.log(hasShadow);
    console.log(number);
  };

  return cekShadow;
};

const testing = init();
testing();

import { props } from "module";
