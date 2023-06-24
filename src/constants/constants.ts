import { Icons } from "../components/Icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Colors from "./Colors";

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
}


export const ScreensArray = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: Home, },
  { route: 'Profile', label: 'Profile', type: Icons.AntDesign, icon: "user", component: Profile, },
];

export const drawerMenu = [
  {
    title: "Settings",
    bg: Colors.menu1,
    type: Icons.Feather, icon: 'settings',
    route: 'Settings',
    menuList: [
      { title: 'Change Theme' },
      { title: 'Notify Me' },
    ]
  },
  {
    title: "Todo's",
    bg: Colors.menu2,
    type: Icons.Feather, icon: 'check-square',
    route: 'Todo',
    menuList: [
      { title: 'Eat' },
      { title: 'Code' },
      { title: 'Sleep' },
    ]
  },
  {
    title: "Projects",
    bg: Colors.menu3,
    type: Icons.Octicons, icon: 'project',
    route: 'Project',
    menuList: [
      { title: 'Portfolio' },
      { title: 'Note-APP' },
      { title: 'RN-Ui' },
    ]
  },
]