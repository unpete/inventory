/**
 * Виртуальные метаданные для редактирования строки документа
 *
 * Created by Evgeniy Malyarov on 22.08.2021.
 */

export default function inventory_goods($p) {

  const {DocInventory_goodsGoodsRow: Row, DocInventory_goods: Doc, utils,
    doc: {inventory_goods},
    cat: {characteristics, clrs, nom, organizations}} = $p;
  const {fields} = inventory_goods.metadata('goods');
  fields.clr = utils._clone(characteristics.metadata('clr'));

  class DocInventory_goodsGoodsRow extends Row {

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
      switch (field) {
      case 'nom':
        const {clr} = this.nom_characteristic;
        this.nom = value;
        this.unit = this.nom.storage_unit;
        this.clr = clr;
        break;
      case 'len':
      case 'width':
      case 'qty':
        this[field] = value;
        if(this.width) {
          this.quantity = (this.len || 1) * this.width * this.qty / 1000000;
        }
        else {
          this.quantity = this.len * this.qty / 1000;
        }
        this.value_change('quantity', '', this.quantity)
        break;
      case 'quantity':
      case 'price':
        this[field] = value;
        this.amount = this.quantity * this.price;
      }
    }
  }

  class DocInventory_goods extends Doc {

    after_create(user) {
      this.responsible = user || $p.current_user;
      const {acl_objs} = this.responsible;

      //Организация
      acl_objs.find_rows({by_default: true, type: organizations.class_name}, (row) => {
        this.organization = row.acl_obj;
        return false;
      });

      this.date = new Date();

      //Номер документа
      return this.new_number_doc();
    }

  }

  $p.DocInventory_goodsGoodsRow = DocInventory_goodsGoodsRow;
  $p.DocInventory_goods = DocInventory_goods;
}
