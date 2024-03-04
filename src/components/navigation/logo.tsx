import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <a href="/">
      <Image src="/logo.svg" alt="logo" width={160} height={40} />
    </a>
  );
};

export default Logo;
