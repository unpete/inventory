/**
 * Виртуальные метаданные для редактирования строки документа
 *
 * Created by Evgeniy Malyarov on 22.08.2021.
 */

export default function inventory_goods_row($p) {

  const {DocInventory_goodsGoodsRow: Proto, utils, doc: {inventory_goods}, cat: {characteristics, clrs, nom}} = $p;
  const {fields} = inventory_goods.metadata('goods');
  fields.clr = utils._clone(characteristics.metadata('clr'));

  class DocInventory_goodsGoodsRow extends Proto {

    get clr() {
      return this.nom_characteristic.clr;
    }

    set clr(clr) {
      const {nom, nom_characteristic, _data} = this;
      if(_data._loading || (nom_characteristic.owner === nom && nom_characteristic.clr == clr)) {
        return;
      }
      const cx = characteristics.find({owner: nom, clr});
      this.nom_characteristic = cx ? cx : '';
    }

    // при изменении реквизита
    value_change(field, type, value) {
      if(field == 'nom') {
        const v = nom.get(value);
        this.unit = v.storage_unit;
        this.clr = this.nom_characteristic.clr;
      }
    }
  }

  $p.DocInventory_goodsGoodsRow = DocInventory_goodsGoodsRow;
}
