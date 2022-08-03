import React from "react";
import { Bgimage } from "../images";

export default function Header() {
  return (
    <div>
      <div>
        <span>Aku & </span>
        <span>Kamu</span>
      </div>
      <img class="bg-cover bg-center" src={Bgimage} alt="bg image" />
    </div>
  );
}
