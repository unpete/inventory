/**
 * Виртуальные метаданные для редактирования строки документа
 *
 * Created by Evgeniy Malyarov on 22.08.2021.
 */

export default function inventory_cuts_row($p) {

  const {DocInventory_cutsMaterialsRow: Proto, utils, doc: {inventory_cuts}, cat: {characteristics, clrs, nom}} = $p;
  const {fields} = inventory_cuts.metadata('materials');
  fields.clr = utils._clone(characteristics.metadata('clr'));

  class DocInventory_cutsMaterialsRow extends Proto {

    get clr() {
      return this.characteristic.clr;
    }

    set clr(clr) {
      this.set_clr(clr);
    }

    set_clr(clr, force) {
      const {nom, characteristic, _data} = this;
      if((!force && _data._loading) || (characteristic.owner === nom && characteristic.clr == clr)) {
        return;
      }
      const cx = characteristics.find({owner: nom, clr});
      this.characteristic = cx ? cx : '';
    }

    // при изменении реквизита
    value_change(field, type, value) {
      if(field == 'nom') {
        const {clr} = this.characteristic;
        this.nom = value;
        this.unit = this.nom.storage_unit;
        this.set_clr(clr, true);
      }
    }
  }

  $p.DocInventory_cutsMaterialsRow = DocInventory_cutsMaterialsRow;
}
