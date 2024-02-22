//** import image icon  */ */

import crmIcon from "../../../public/images/crm/crm.png";
import crmIconActive from "../../../public/images/crm/crmActive.png";
import webSiteIcon from "../../../public/images/crm/online-store-not.png";
import webSiteIconActive from "../../../public/images/crm/online-store -active.png";
import AdvertIcon from "../../../public/images/crm/megaphone.png";
import AdvertActive from "../../../public/images/crm/megaphoneActive.png";
import leadIcon from "../../../public/images/crm/leads-icon.png";
import leadIconActive from "../../../public/images/crm/leads-icon-active.png";
import dashIcon from "../../../public/images/crm/dashboard.png";
import dashIconActive from "../../../public/images/crm/dashboardActive.png";
import helpIcon from "../../../public/images/crm/question.png";
import helpActive from "../../../public/images/crm/questionActive.png";
import analyticsActive from "../../../public/images/crm/analysisActive.png";
import analytics from "../../../public/images/crm/analysis.png";
import setting from "../../../public/images/crm/settings.png";
import settingActive from "../../../public/images/crm/settingsActive.png";

const navigation = () => {
  return [
    {
      title: "Dashboards",
      icon: dashIcon,
      activeIcon: dashIconActive,
      path: "/dashboards",
      type: "asGroup",
    },
    {
      title: "Website",
      icon: webSiteIcon,
      activeIcon: webSiteIconActive,
      children: [
        {
          title: "Themes",
          path: "/onlineStore/themes",
        },
        {
          title: "Pages",
          path: "/onlineStore/pages",
        },
        {
          title: "Properties",
          path: "/onlineStore/properties",
        },
        {
          title: "Menus",
          path: "/onlineStore/menus",
        },
        {
          title: "Media Library",
          path: "/onlineStore/mediaLibrary",
        },
        {
          title: "Preferences",
          path: "/onlineStore/preferences",
        },
        {
          title: "Domain & Settings",
          path: "/onlineStore/domainSettings",
        },
      ],
    },
    {
      title: "Leads",
      icon: leadIcon,
      activeIcon: leadIconActive,
      path: "/leads",
      type: "asGroup",
    },
    {
      title: "Analytics",
      icon: analytics,
      activeIcon: analyticsActive,
      path: "/analytics",
      type: "asGroup",
    },

    {
      sectionTitle: "Marketing",
    },
    {
      title: "Advertising",
      icon: AdvertIcon,
      activeIcon: AdvertActive,
      path: "/advertising",
      type: "asGroup",
    },

    {
      sectionTitle: "CRM",
    },
    {
      title: "CRM",
      icon: crmIcon,
      activeIcon: crmIconActive,
      children: [
        {
          title: "Dashboard",
          path: "/crm/dashboards",
        },
        {
          title: "Leads",
          path: "/crm/crmLeads",
        },
        {
          title: "Tasks",
          path: "/crm/tasks",
        },
        {
          title: "Meetings & Calendar",
          path: "/crm/meetings",
        },
        {
          title: "Reports",
          path: "/crm/reports",
        },
      ],
    },

    {
      sectionTitle: "Other",
    },

    {
      title: "Setting",
      icon: setting,
      activeIcon: settingActive,

      children: [
        {
          title: "Team members",
          path: "/setting/team",
        },
        {
          title: "Roles & Permissions",
          path: " /setting/roles",
        },
        {
          title: "Leads",
          path: " /setting/leads",
        },
        {
          title: "Tasks",
          path: " /setting/tasks",
        },
      ],
    },
    {
      title: "Help and Support",
      icon: helpIcon,
      activeIcon: helpActive,
      path: "/helpSupport",
      type: "asGroup",
    },

    //   {
    //     title: 'Calendar',
    //     icon: 'tabler:calendar',
    //     path: '/apps/calendar'
    //   },
    //   {
    //     title: 'Invoice',
    //     icon: 'tabler:file-dollar',
    //     children: [
    //       {
    //         title: 'List',
    //         path: '/apps/invoice/list'
    //       },
    //       {
    //         title: 'Preview',
    //         path: '/apps/invoice/preview'
    //       },
    //       {
    //         title: 'Edit',
    //         path: '/apps/invoice/edit'
    //       },
    //       {
    //         title: 'Add',
    //         path: '/apps/invoice/add'
    //       }
    //     ]
    //   },
    //   {
    //     title: 'User',
    //     icon: 'tabler:user',
    //     children: [
    //       {
    //         title: 'List',
    //         path: '/apps/user/list'
    //       },
    //       {
    //         title: 'View',
    //         children: [
    //           {
    //             title: 'Account',
    //             path: '/apps/user/view/account'
    //           },
    //           {
    //             title: 'Security',
    //             path: '/apps/user/view/security'
    //           },
    //           {
    //             title: 'Billing & Plans',
    //             path: '/apps/user/view/billing-plan'
    //           },
    //           {
    //             title: 'Notifications',
    //             path: '/apps/user/view/notification'
    //           },
    //           {
    //             title: 'Connection',
    //             path: '/apps/user/view/connection'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     title: 'Roles & Permissions',
    //     icon: 'tabler:settings',
    //     children: [
    //       {
    //         title: 'Roles',
    //         path: '/apps/roles'
    //       },
    //       {
    //         title: 'Permissions',
    //         path: '/apps/permissions'
    //       }
    //     ]
    //   },
    //   {
    //     title: 'Pages',
    //     icon: 'tabler:file',
    //     children: [
    //       {
    //         title: 'User Profile',
    //         children: [
    //           {
    //             title: 'Profile',
    //             path: '/pages/user-profile/profile'
    //           },
    //           {
    //             title: 'Teams',
    //             path: '/pages/user-profile/teams'
    //           },
    //           {
    //             title: 'Projects',
    //             path: '/pages/user-profile/projects'
    //           },
    //           {
    //             title: 'Connections',
    //             path: '/pages/user-profile/connections'
    //           }
    //         ]
    //       },
    //       {
    //         title: 'Account Settings',
    //         children: [
    //           {
    //             title: 'Account',
    //             path: '/pages/account-settings/account'
    //           },
    //           {
    //             title: 'Security',
    //             path: '/pages/account-settings/security'
    //           },
    //           {
    //             title: 'Billing',
    //             path: '/pages/account-settings/billing'
    //           },
    //           {
    //             title: 'Notifications',
    //             path: '/pages/account-settings/notifications'
    //           },
    //           {
    //             title: 'Connections',
    //             path: '/pages/account-settings/connections'
    //           }
    //         ]
    //       },
    //       {
    //         title: 'FAQ',
    //         path: '/pages/faq'
    //       },
    //       {
    //         title: 'Help Center',
    //         path: '/pages/help-center'
    //       },
    //       {
    //         title: 'Pricing',
    //         path: '/pages/pricing'
    //       },
    //       {
    //         title: 'Miscellaneous',
    //         children: [
    //           {
    //             openInNewTab: true,
    //             title: 'Coming Soon',
    //             path: '/pages/misc/coming-soon'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Under Maintenance',
    //             path: '/pages/misc/under-maintenance'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Page Not Found - 404',
    //             path: '/pages/misc/404-not-found'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Not Authorized - 401',
    //             path: '/pages/misc/401-not-authorized'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Server Error - 500',
    //             path: '/pages/misc/500-server-error'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     title: 'Auth Pages',
    //     icon: 'tabler:lock',
    //     children: [
    //       {
    //         title: 'Login',
    //         children: [
    //           {
    //             openInNewTab: true,
    //             title: 'Login v1',
    //             path: '/pages/auth/login-v1'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Login v2',
    //             path: '/pages/auth/login-v2'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Login With AppBar',
    //             path: '/pages/auth/login-with-appbar'
    //           }
    //         ]
    //       },
    //       {
    //         title: 'Register',
    //         children: [
    //           {
    //             openInNewTab: true,
    //             title: 'Register v1',
    //             path: '/pages/auth/register-v1'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Register v2',
    //             path: '/pages/auth/register-v2'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Register Multi-Steps',
    //             path: '/pages/auth/register-multi-steps'
    //           }
    //         ]
    //       },
    //       {
    //         title: 'Verify Email',
    //         children: [
    //           {
    //             openInNewTab: true,
    //             title: 'Verify Email v1',
    //             path: '/pages/auth/verify-email-v1'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Verify Email v2',
    //             path: '/pages/auth/verify-email-v2'
    //           }
    //         ]
    //       },
    //       {
    //         title: 'Forgot Password',
    //         children: [
    //           {
    //             openInNewTab: true,
    //             title: 'Forgot Password v1',
    //             path: '/pages/auth/forgot-password-v1'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Forgot Password v2',
    //             path: '/pages/auth/forgot-password-v2'
    //           }
    //         ]
    //       },
    //       {
    //         title: 'Reset Password',
    //         children: [
    //           {
    //             openInNewTab: true,
    //             title: 'Reset Password v1',
    //             path: '/pages/auth/reset-password-v1'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Reset Password v2',
    //             path: '/pages/auth/reset-password-v2'
    //           }
    //         ]
    //       },
    //       {
    //         title: 'Two Steps',
    //         children: [
    //           {
    //             openInNewTab: true,
    //             title: 'Two Steps v1',
    //             path: '/pages/auth/two-steps-v1'
    //           },
    //           {
    //             openInNewTab: true,
    //             title: 'Two Steps v2',
    //             path: '/pages/auth/two-steps-v2'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     title: 'Wizard Examples',
    //     icon: 'tabler:forms',
    //     children: [
    //       {
    //         title: 'Checkout',
    //         path: '/pages/wizard-examples/checkout'
    //       },
    //       {
    //         title: 'Property Listing',
    //         path: '/pages/wizard-examples/property-listing'
    //       },
    //       {
    //         title: 'Create Deal',
    //         path: '/pages/wizard-examples/create-deal'
    //       }
    //     ]
    //   },
    //   {
    //     icon: 'tabler:square',
    //     title: 'Dialog Examples',
    //     path: '/pages/dialog-examples'
    //   },
    //   {
    //     sectionTitle: 'User Interface'
    //   },
    //   {
    //     title: 'Typography',
    //     icon: 'tabler:typography',
    //     path: '/ui/typography'
    //   },
    //   {
    //     title: 'Icons',
    //     path: '/ui/icons',
    //     icon: 'tabler:brand-tabler'
    //   },
    //   {
    //     title: 'Cards',
    //     icon: 'tabler:id',
    //     children: [
    //       {
    //         title: 'Basic',
    //         path: '/ui/cards/basic'
    //       },
    //       {
    //         title: 'Advanced',
    //         path: '/ui/cards/advanced'
    //       },
    //       {
    //         title: 'Statistics',
    //         path: '/ui/cards/statistics'
    //       },
    //       {
    //         title: 'Widgets',
    //         path: '/ui/cards/widgets'
    //       },
    //       {
    //         title: 'Actions',
    //         path: '/ui/cards/actions'
    //       }
    //     ]
    //   },
    //   {
    //     badgeContent: '19',
    //     title: 'Components',
    //     icon: 'tabler:archive',
    //     badgeColor: 'primary',
    //     children: [
    //       {
    //         title: 'Accordion',
    //         path: '/components/accordion'
    //       },
    //       {
    //         title: 'Alerts',
    //         path: '/components/alerts'
    //       },
    //       {
    //         title: 'Avatars',
    //         path: '/components/avatars'
    //       },
    //       {
    //         title: 'Badges',
    //         path: '/components/badges'
    //       },
    //       {
    //         title: 'Buttons',
    //         path: '/components/buttons'
    //       },
    //       {
    //         title: 'Button Group',
    //         path: '/components/button-group'
    //       },
    //       {
    //         title: 'Chips',
    //         path: '/components/chips'
    //       },
    //       {
    //         title: 'Dialogs',
    //         path: '/components/dialogs'
    //       },
    //       {
    //         title: 'List',
    //         path: '/components/list'
    //       },
    //       {
    //         title: 'Menu',
    //         path: '/components/menu'
    //       },
    //       {
    //         title: 'Pagination',
    //         path: '/components/pagination'
    //       },
    //       {
    //         title: 'Progress',
    //         path: '/components/progress'
    //       },
    //       {
    //         title: 'Ratings',
    //         path: '/components/ratings'
    //       },
    //       {
    //         title: 'Snackbar',
    //         path: '/components/snackbar'
    //       },
    //       {
    //         title: 'Swiper',
    //         path: '/components/swiper'
    //       },
    //       {
    //         title: 'Tabs',
    //         path: '/components/tabs'
    //       },
    //       {
    //         title: 'Timeline',
    //         path: '/components/timeline'
    //       },
    //       {
    //         title: 'Toasts',
    //         path: '/components/toast'
    //       },
    //       {
    //         title: 'Tree View',
    //         path: '/components/tree-view'
    //       },
    //       {
    //         title: 'More',
    //         path: '/components/more'
    //       }
    //     ]
    //   },
    //   {
    //     sectionTitle: 'Forms & Tables'
    //   },
    //   {
    //     title: 'Form Elements',
    //     icon: 'tabler:toggle-left',
    //     children: [
    //       {
    //         title: 'Text Field',
    //         path: '/forms/form-elements/text-field'
    //       },
    //       {
    //         title: 'Select',
    //         path: '/forms/form-elements/select'
    //       },
    //       {
    //         title: 'Checkbox',
    //         path: '/forms/form-elements/checkbox'
    //       },
    //       {
    //         title: 'Radio',
    //         path: '/forms/form-elements/radio'
    //       },
    //       {
    //         title: 'Custom Inputs',
    //         path: '/forms/form-elements/custom-inputs'
    //       },
    //       {
    //         title: 'Textarea',
    //         path: '/forms/form-elements/textarea'
    //       },
    //       {
    //         title: 'Autocomplete',
    //         path: '/forms/form-elements/autocomplete'
    //       },
    //       {
    //         title: 'Date Pickers',
    //         path: '/forms/form-elements/pickers'
    //       },
    //       {
    //         title: 'Switch',
    //         path: '/forms/form-elements/switch'
    //       },
    //       {
    //         title: 'File Uploader',
    //         path: '/forms/form-elements/file-uploader'
    //       },
    //       {
    //         title: 'Editor',
    //         path: '/forms/form-elements/editor'
    //       },
    //       {
    //         title: 'Slider',
    //         path: '/forms/form-elements/slider'
    //       },
    //       {
    //         title: 'Input Mask',
    //         path: '/forms/form-elements/input-mask'
    //       }
    //     ]
    //   },
    //   {
    //     icon: 'tabler:layout-navbar',
    //     title: 'Form Layouts',
    //     path: '/forms/form-layouts'
    //   },
    //   {
    //     title: 'Form Validation',
    //     path: '/forms/form-validation',
    //     icon: 'tabler:checkbox'
    //   },
    //   {
    //     title: 'Form Wizard',
    //     path: '/forms/form-wizard',
    //     icon: 'tabler:text-wrap-disabled'
    //   },
    //   {
    //     title: 'Table',
    //     icon: 'tabler:table',
    //     path: '/tables/mui'
    //   },
    //   {
    //     title: 'Mui DataGrid',
    //     icon: 'tabler:layout-grid',
    //     path: '/tables/data-grid'
    //   },
    //   {
    //     sectionTitle: 'Charts & Misc'
    //   },
    //   {
    //     title: 'Charts',
    //     icon: 'tabler:chart-pie',
    //     children: [
    //       {
    //         title: 'Apex',
    //         path: '/charts/apex-charts'
    //       },
    //       {
    //         title: 'Recharts',
    //         path: '/charts/recharts'
    //       },
    //       {
    //         title: 'ChartJS',
    //         path: '/charts/chartjs'
    //       }
    //     ]
    //   },
    //   {
    //     path: '/acl',
    //     action: 'read',
    //     subject: 'acl-page',
    //     icon: 'tabler:shield',
    //     title: 'Access Control'
    //   },
    //   {
    //     title: 'Others',
    //     icon: 'tabler:dots',
    //     children: [
    //       {
    //         title: 'Menu Levels',
    //         children: [
    //           {
    //             title: 'Menu Level 2.1'
    //           },
    //           {
    //             title: 'Menu Level 2.2',
    //             children: [
    //               {
    //                 title: 'Menu Level 3.1'
    //               },
    //               {
    //                 title: 'Menu Level 3.2'
    //               }
    //             ]
    //           }
    //         ]
    //       },
    //       {
    //         title: 'Disabled Menu',
    //         disabled: true
    //       },
    //       {
    //         title: 'Raise Support',
    //         externalLink: true,
    //         openInNewTab: true,
    //         path: 'https://pixinvent.ticksy.com/'
    //       },
    //       {
    //         title: 'Documentation',
    //         externalLink: true,
    //         openInNewTab: true,
    //         path: 'https://demos.pixinvent.com/vuexy-nextjs-admin-template/documentation'
    //       }
    //     ]
    //   }
    // ]
  ];
};

export default navigation;
