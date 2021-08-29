/**
 * Виртуальные метаданные для редактирования строки документа
 *
 * Created by Evgeniy Malyarov on 22.08.2021.
 */

export default function inventory_goods_row($p) {

  const {DocInventory_goodsGoodsRow: Proto, utils, doc: {inventory_goods}, cat: {characteristics, clrs}} = $p;
  const {fields} = inventory_goods.metadata('goods');
  fields.clr = utils._clone(characteristics.metadata('clr'));

  class DocInventory_goodsGoodsRow extends Proto {

    get clr() {
      return this.nom_characteristic.clr;
    }

    set clr(clr) {
      if(!clr || clr.empty()) {
        this.nom_characteristic = '';
        return;
      }

      const {nom, nom_characteristic} = this;
      if(nom_characteristic.clr == clr) {
        return;
      }
      const cx = characteristics.find({owner: nom, clr});
      if(cx) {
        this.nom_characteristic = cx;
      }
    }
  }

  $p.DocInventory_goodsGoodsRow = DocInventory_goodsGoodsRow;
}
