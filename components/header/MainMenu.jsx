import NavigationItem from './NavigationItem';
import useLocalStorage from '../../utils/useLocalstorage';

const MainMenu = ({ name, active, onItemClick}) => {
  const [activeItem, setActiveItem] = useLocalStorage('navItem', 'Home');
  const handleItemClick = (item) => {
    if( activeItem !== item) {
      console.log(item)
      setActiveItem(item);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg order-lg-2 font-weight-bold ">
       <button
         className="navbar-toggler d-block d-lg-none"
         type="button"
        data-bs-toggle="collapse"
         data-bs-target="#navbarNav"
         aria-controls="navbarNav"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span />
       </button>

       <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="d-flex flex-column flex-lg-row font-weight-bold justify-content-around mt-40 ">
          <NavigationItem
            name="Home"
            active={activeItem === "Home"}
            onItemClick={handleItemClick}
            route='/'
          />
          <NavigationItem
            name="About"
            active={activeItem === "About"}
            onItemClick={handleItemClick}
            route='/pages-menu/about-us-v1'
          />
          <NavigationItem
            name="Services"
            active={activeItem === "Services"}
            onItemClick={handleItemClick}
            route='/pages-menu/service-v1'
          />
          <NavigationItem
            name="Contact"
            active={activeItem === "Contact"}
            onItemClick={handleItemClick}
            route='/contact'
          />
      </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
