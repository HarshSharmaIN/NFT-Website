import { useNavigate } from "react-router-dom";
import { navItems,navIcons } from "../../../data";
import { Button } from "../ui/button";
import { FloatingNav } from "../ui/floating-navbar";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-4 absolute top-10 left-10 z-10">
        {navIcons.map((item, index) => (
          <Button key={index} variant="outline" size="icon">
            <img src={item.img} alt={item.alt} />
          </Button>
        ))}
      </div>

      <FloatingNav navItems={navItems} />

      <div className="absolute top-10 right-10 text-center z-10">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          onClick={() => navigate("/profile")}
        >
          <img src="user.svg" alt="User" className="h-6" />
          <span className="mx-2">Profile</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}

export default Navbar;
