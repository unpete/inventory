// модификаторы документов

// расчет-заказ
import doc_calc_order from './doc_calc_order';
import doc_calc_order_print from './doc_calc_order_print';
import inventory_cuts from './inventory_cuts_row';
import inventory_goods from './inventory_goods';

export default function ($p) {
  doc_calc_order($p);
  doc_calc_order_print($p);
  inventory_cuts($p);
  inventory_goods($p);
}
