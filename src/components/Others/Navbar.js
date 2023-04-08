import { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoWithName from "../../assets/Logo/logowithname.png";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import AlertContext from "../../context/alerts/AlertContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Exercises", href: "/exercises" },
  { name: "Diets", href: "/diets" },
  { name: "Forum", href: "/forum" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;
  const handleLogoutClick = () => {
    localStorage.removeItem("endurefit-token");
    showAlert(true, "Logged Out Successffully");
  };
  const pathname = useLocation().pathname;
  // console.log(`current path is` + pathname);
  return (
    <div className="Navbar">
      <header className="">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 ">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src={logoWithName}
                alt="logoWithName"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-6 w-6 text-[#2a477f]"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`hover:font-bold  font-semibold leading-6 text-[#2a477f] ${pathname===item.href?"border-b-2 border-blue-900":""} rounded-b-md `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {localStorage.getItem("endurefit-token") ? (
              <Link
                to="/login"
                className="hover:font-bold font-semibold leading-6 text-[#2a477f]"
                onClick={handleLogoutClick}
              >
                Logout{" "}
                <span aria-hidden="true">
                  <LogoutIcon />
                </span>
              </Link>
            ) : pathname === "/login" ? (
              <Link
                to="/signup"
                className="hover:font-bold font-semibold leading-6 text-[#2a477f]"
              >
                Signup{" "}
                <span aria-hidden="true">
                  <LoginIcon />
                </span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="hover:font-bold font-semibold leading-6 text-[#2a477f]"
              >
                Log in{" "}
                <span aria-hidden="true">
                  <LoginIcon />
                </span>
              </Link>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src={logoWithName}
                  alt="logoWithName"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-6 w-6 text-[#2a477f]"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="hover:font-bold -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#2a477f] hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  {/* <Link
                    to="/login"
                    className="-mx-3 hover:font-bold block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#2a477f] hover:bg-gray-50"
                  >
                    Log in
                  </Link> */}
                  {localStorage.getItem("endurefit-token") ? (
                    <Link
                      to="/login"
                      className="-mx-3 hover:font-bold block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#2a477f] hover:bg-gray-50"
                      onClick={handleLogoutClick}
                    >
                      Logout{" "}
                      <span aria-hidden="true">
                        <LogoutIcon />
                      </span>
                    </Link>
                  ) : pathname === "/login" ? (
                    <Link
                      to="/signup"
                      className="-mx-3 hover:font-bold block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#2a477f] hover:bg-gray-50"
                    >
                      Signup{" "}
                      <span aria-hidden="true">
                        <LoginIcon />
                      </span>
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="-mx-3 hover:font-bold block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#2a477f] hover:bg-gray-50"
                    >
                      Log in{" "}
                      <span aria-hidden="true">
                        <LoginIcon />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;
