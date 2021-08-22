// общие модули

// строки интернационализации
import i18ru from './i18n.ru';
import events from './events';
import qs from 'qs';

export default function ($p) {
  i18ru($p);
  events($p);
  $p.utils.prm = () => qs.parse(location.search.replace('?', ''));
}

