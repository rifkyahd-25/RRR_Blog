import { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26378376.profitableratecpm.com/c0462a4e1e45e839b0729b67cdddda39/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    document.getElementById("ad-container")?.appendChild(script);
  }, []);

  return (
    <div className="my-4">
      <div id="ad-container">
        <div id="container-c0462a4e1e45e839b0729b67cdddda39"></div>
      </div>
    </div>
  );
};

export default AdsterraAd;
