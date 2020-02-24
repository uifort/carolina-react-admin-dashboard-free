import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import GradeTwoTone from '@material-ui/icons/GradeTwoTone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

var iconsMap = {
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon
};

export default [
  {
    label: 'Navigation menu',
    content: JSON.parse(
      `[
  {
    "label": "Dashboards",
    "icon": "DashboardTwoToneIcon",
    "content": [
      {
        "label": "Default",
        "description": "This is a dashboard page example built using this template.",
        "to": "/DashboardDefault"
      }
    ]
  },
  {
    "label": "Elements",
    "icon": "SettingsIcon",
    "content": [
      {
        "label": "Buttons",
        "description": "Wide selection of buttons that feature different styles for backgrounds, borders and hover options!",
        "to": "/Buttons"
      },
      {
        "label": "Dropdowns",
        "description": "A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list.",
        "to": "/Dropdowns"
      },
      {
        "label": "Navigation menus",
        "description": "Navigation menus are one of the basic building blocks for any web or mobile app.",
        "to": "/NavigationMenus"
      },
      {
        "label": "Progress Bars",
        "description": "You can use the progress bars on their own or in combination with other widgets.",
        "to": "/ProgressBars"
      },
      {
        "label": "Pagination",
        "description": "Basic and dynamic pagination for use in your next awesome application.",
        "to": "/Pagination"
      },
      {
        "label": "Scrollable",
        "description": "Add scrolling areas to any elements with custom scrollbars or default browser ones.",
        "to": "/Scrollable"
      },
      {
        "label": "Badges",
        "description": "Badges and labels are used to offer extra small pieces of info for your content.",
        "to": "/Badges"
      },
      {
        "label": "Icons",
        "description": "Wide icons selection including from flag icons to FontAwesome and other icons libraries.",
        "to": "/Icons"
      },
      {
        "label": "Utilities & Helpers",
        "description": "These are helpers that speed up the dev time for various components and effects.",
        "to": "/UtilitiesHelpers"
      }
    ]
  },
  {
    "label": "Cards",
    "icon": "ViewModuleIcon",
    "content": [
      {
        "label": "Cards examples 3",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards3"
      }
    ]
  },
  {
    "label": "Presentation Blocks",
    "icon": "ErrorIcon",
    "content": [
      {
        "label": "Landing page",
        "description": "",
        "to": "/LandingPage"
      }
    ]
  },
  {
    "label": "Widgets",
    "icon": "ReceiptIcon",
    "content": [
      {
        "label": "Accordions",
        "description": "Accordions represent collapsable component with extended functionality.",
        "to": "/Accordions"
      },
      {
        "label": "Modal dialogs",
        "description": "Wide selection of modal dialogs styles and animations available.",
        "to": "/Modals"
      },
      {
        "label": "Notifications",
        "description": "Show beautiful, animated growl like notifications or alerts on your pages screens.",
        "to": "/Notifications"
      },
      {
        "label": "Popovers",
        "description": "Add small overlay content, like those found in iOS, to any element for housing secondary information.",
        "to": "/Popovers"
      },
      {
        "label": "Tabs",
        "description": "Tabs are used to split content between multiple sections. Wide variety available.",
        "to": "/Tabs"
      }
    ]
  },
  {
    "label": "Regular Tables",
    "icon": "CodeIcon",
    "content": [
      {
        "label": "Tables examples 1",
        "description": "Tables are the backbone of almost all web applications.",
        "to": "/RegularTables1"
      },
      {
        "label": "Tables examples 4",
        "description": "Tables are the backbone of almost all web applications.",
        "to": "/RegularTables4"
      }
    ]
  },
  {
    "label": "Forms Elements",
    "icon": "BarChartIcon",
    "content": [
      {
        "label": "Controls",
        "description": "Wide selection of forms controls, using a standardised code base, specifically for React.",
        "to": "/FormsControls"
      }
    ]
  },
  {
    "label": "Others",
    "icon": "ChatIcon",
    "content": [
      {
        "label": "Apex Charts",
        "description": "Wonderful animated charts built with ApexCharts components.",
        "to": "/ApexCharts"
      },
      {
        "label": "Maps",
        "description": "Implement in your applications Google or vector maps.",
        "to": "/Maps"
      },
      {
        "label": "List Groups",
        "description": "These can be used with other components and elements to create stunning and unique new elements for your UIs.",
        "to": "/ListGroups"
      }
    ]
  }
]`,
      (key, value) => {
        if (key === 'icon') {
          return iconsMap[value];
        } else {
          return value;
        }
      }
    )
  }
];
