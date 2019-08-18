import { random } from "lodash-es";
import { readable  } from "svelte/store";

const value = readable(random(0, 100, false), (set) => {
  const interval = setInterval(() => {
		set(random(0, 100, false));
	}, 1000);

  return () => {
    clearInterval(interval);
  };
});

const demo = document.getElementById("demo");
value.subscribe($value => {
  demo.innerHTML = $value;
});
