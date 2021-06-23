// общие модули

// строки интернационализации
import i18ru from './i18n.ru';
import events from './events';

import randomId from './ids';

export default function ($p) {
  i18ru($p);
  events($p);
  $p.utils.randomId = randomId;
}

