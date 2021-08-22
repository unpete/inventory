/**
 * Виртуальные метаданные для редактирования строки документа
 *
 * Created by Evgeniy Malyarov on 22.08.2021.
 */

export default function inventory_cuts_row($p) {

  const {DocInventory_cutsMaterialsRow: Proto, utils, doc: {inventory_cuts}, cat: {characteristics, clrs}} = $p;
  const {fields} = inventory_cuts.metadata('materials');
  fields.clr = utils._clone(characteristics.metadata('clr'));

  class DocInventory_cutsMaterialsRow extends Proto {

    get clr() {
      return this.characteristic.clr;
    }

    set clr(clr) {
      const {nom, characteristic} = this;
      if(characteristic.clr == clr) {
        return;
      }
      const cx = characteristics.find({owner: nom, clr});
      if(cx) {
        this.characteristic = cx;
      }
    }
  }

  $p.DocInventory_cutsMaterialsRow = DocInventory_cutsMaterialsRow;
}
