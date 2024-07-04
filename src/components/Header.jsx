import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <nav className="p-2 px-6 bg-[#0EA5E9] rounded-b-lg flex items-center justify-between">
      <Link to={"/"}>
        <div className="img-container bg-zinc-900 size-12 rounded-full grid place-items-center p-2">
          <img src="/logo.png" alt="" className="size-full object-cover" />
        </div>
      </Link>

      <h1 className="font-extrabold font-dosis text-2xl tracking-wider uppercase">
        <span className="text-gray-800">Short</span>ener
      </h1>

      <div className="btns">
        {!user ? (
          <Button onClick={() => navigate("/authentication")}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Karan Singh</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {[
                [<LinkIcon className="mr-2 size-4" />, "My Links"],
                [<LogOut className="mr-2 size-4 text-red-500" />, "Logout"],
              ].map((item, index) => (
                <DropdownMenuItem key={index}>
                  {item[0]}
                  <span className={`${index === 1 ? "text-red-500" : ""}`}>
                    {item[1]}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
