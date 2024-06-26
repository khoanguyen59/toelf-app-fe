import { CategoryNames } from '@/routers/RouteCategoryName.enum';
import { I18N } from '@/enums/i18n.enum';

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);
};

export const getTitle = (categoryName: CategoryNames, t: any): string => {
  let title = '';
  switch (categoryName) {
    case CategoryNames.HOME:
      title = t(I18N.MENU_MARKETPLACE);
      break;
    case CategoryNames.REGISTER:
      title = t(I18N.MENU_MY_LISTING);
      break;
    case CategoryNames.TRANSACTIONS:
      title = t(I18N.MENU_EXCHANGES);
      break;
    case CategoryNames.ANALYSIS:
      title = t(I18N.MENU_REPORTING);
      break;
    case CategoryNames.SETTINGS:
      title = t(I18N.MENU_SETTING);
      break;
    case CategoryNames.MY_PROJECTS:
      title = t(I18N.MENU_MY_PROJECTS);
      break;
    case CategoryNames.DECLARATIONS:
      title = t(I18N.MENU_DECLARATIONS);
      break;
  }
  return title;
};
