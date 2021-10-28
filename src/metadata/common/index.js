// общие модули
import qs from 'qs';
// строки интернационализации
import i18ru from './i18n.ru';
import {event_src} from 'metadata-superlogin/proxy/events';


export default function ($p) {
  i18ru($p);
  event_src($p);
  $p.utils.prm = () => qs.parse(location.search.replace('?', ''));
}

