import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const LandingPage = () => {
  return (
    <div className="p-5">
      <h2 className="font-poetsen text-center xl:text-6xl lg:text-5xl text-4xl gradient-text my-10">
        The Only URL <br/>Shortener You'll ever need !
      </h2>
      <div className="input-field flex items-center gap-5 p-5">
        <Input />
        <Button>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
