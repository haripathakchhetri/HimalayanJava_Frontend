import { Button } from "@material-tailwind/react"
import { AlignJustify } from "lucide-react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router"
import { removeUser } from "../auth/userSlice";

const Header = ({ setOpen }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {

    dispatch(removeUser());

    navigate('/login');
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className=" block ">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <div className="flex flex-1 justify-end">
        <Button onClick={handleLogout} className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow">
          Logout
        </Button>
      </div>

    </header>
  )
}
export default Header