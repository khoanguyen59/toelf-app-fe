import { TopicCategory } from '@enums/topic.enum';
import { SvgIconComponent } from '@mui/icons-material';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';

export interface InfoTopic {
  id?: number;
  name: string;
  tag: string;
  icon?: SvgIconComponent;
  categories?: TopicCategory[];
}

export const getIconByTopic = (topic: InfoTopic) => {
  let icon;
  if (!!topic.icon) return topic.icon;
  
  if (topic.categories.length) {
    switch (topic.categories[0]) {
      case TopicCategory.Politics:
        icon = AccountBalanceOutlinedIcon;
        break;
      case TopicCategory.Economy:
        icon = AttachMoneyOutlinedIcon;
        break;
      case TopicCategory.Entertainment:
        icon = SportsEsportsOutlinedIcon;
        break;
      case TopicCategory.Sports:
        icon = SportsSoccerOutlinedIcon;
        break;
      case TopicCategory.World:
        icon = PublicOutlinedIcon;
        break;
      case TopicCategory.Lifestyle:
        icon = NightlifeOutlinedIcon;
        break;
      case TopicCategory.Health:
        icon = HealthAndSafetyOutlinedIcon;
        break;
      case TopicCategory.Science:
        icon = ScienceOutlinedIcon;
        break;
      case TopicCategory.Technology:
        icon = BiotechOutlinedIcon;
        break;
      case TopicCategory.Culture:
        icon = ColorLensOutlinedIcon;
        break;
      case TopicCategory.History:
        icon = HistoryOutlinedIcon;
        break;
      case TopicCategory.Education:
        icon = SchoolOutlinedIcon;
        break;
      case TopicCategory.Society:
        icon = Diversity3OutlinedIcon;
        break;
      default:
        icon = MapsUgcOutlinedIcon;
    }
  }

  return icon;
}
